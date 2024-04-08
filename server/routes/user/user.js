const router = require("express").Router();
const bcrypt = require("bcrypt");
const multer = require("multer");
const User = require("../../models/User");
const { uploadToS3AndGetURL } = require("../../functions/aws_upload");
const {
  verify_access_token,
  verify_access_token_and_admin,
} = require("../../middleware/verify_access_token");
const { deleteFromS3 } = require("../../functions/aws_delete");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

//! user edit account
router.put(
  "/account/update/:user_id",
  verify_access_token,
  upload.single("image"),
  async (req, res) => {
    let is_aws_images_deleted = false;
    let set_data = { ...req.body };

    if (req.file) {
      is_aws_images_deleted = await deleteFromS3(req.user.unique_uuid);
      try {
        image_info = await uploadToS3AndGetURL(
          req.file.buffer,
          req.file.originalname,
          req.file.mimetype,
          "dp_images",
          req.user.unique_uuid
        );
        set_data = { ...set_data, image_info };
      } catch (err) {
        console.error(err);
        return res.status(500).json({
          error: "An error occurred during image uploading. Please try again",
        });
      }
    }

    if (req.body.password) {
      const hashedPw = await bcrypt.hash(req.body.password, 10);
      set_data.password = hashedPw;
    }

    try {
      const updated_user = await User.findByIdAndUpdate(
        req.user.user_id,
        { $set: set_data },
        { $new: true }
      );
      if (!updated_user) {
        return res.status(404).json({ error: "user not found" });
      }
      const { password, ...others } = updated_user._doc;
      console.log("is_aws_images_deleted: ", is_aws_images_deleted);
      return res.status(200).json(others);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }
);

//! USER DELETE ACCOUNT
router.delete(
  "/account/delete/:user_id",
  verify_access_token_and_admin,
  async (req, res) => {
    const user_id = req.user.user_id;
    const user_unique_uuid = req.user.unique_uuid;
    try {
      const is_aws_images_deleted = await deleteFromS3(user_unique_uuid);
      await User.findByIdAndDelete(user_id);
      return res.status(200).json({
        message: "account deleted successfully",
        aws_images_deleted: is_aws_images_deleted,
      });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }
);

module.exports = router;
