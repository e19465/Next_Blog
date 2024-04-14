const router = require("express").Router();
const bcrypt = require("bcrypt");
const multer = require("multer");
const User = require("../../models/User");
const { uploadToS3AndGetURL } = require("../../functions/aws_upload");
const {
  get_access_token,
  get_refresh_token,
} = require("../../functions/jwt_tokens");
const {
  verify_access_token,
  verify_access_token_and_admin,
  verify_refresh_token,
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
    if (req.user.user_id === req.params.user_id) {
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
          set_data = { ...set_data, dp: image_info };
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
        console.log(set_data);
        const updated_user = await User.findByIdAndUpdate(
          req.user.user_id,
          { $set: set_data },
          { new: true }
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
    } else {
      return res
        .status(403)
        .json({ error: "you don't have permission to update this account" });
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

//! get all users
router.get("/user/all", verify_access_token_and_admin, async (req, res) => {
  try {
    const all_users = await User.find();
    if (!all_users) {
      return res.status(404).json({ error: "No users found" });
    }
    let resp = [];
    for (let user_obj of all_users) {
      const { password, ...others } = user_obj._doc;
      resp.push(others);
    }
    return res.status(200).json(resp);
  } catch (err) {
    console.log(err);
  }
});

//! get one user
router.get("/user/one/:user_id", async (req, res) => {
  try {
    const found_user = await User.findById(req.params.user_id);
    if (!found_user) {
      return res.status(404).json({ error: "user not found" });
    }

    const { password, ...others } = found_user._doc;

    return res.status(200).json(others);
  } catch (err) {
    console.log(err);
  }
});

//! refresh access token
router.post(
  "/new/refresh",
  verify_access_token,
  verify_refresh_token,
  async (req, res) => {
    const refreshToken = req.body.token;
    if (!refreshToken) {
      return res.status(401).json({ error: "refresh token required" });
    }
    const new_refresh_token = get_refresh_token(req.user.user_id);
    return res.status(200).json(new_refresh_token);
  }
);
//! refresh access token
router.post(
  "/access/refresh",
  verify_access_token,
  verify_refresh_token,
  async (req, res) => {
    const refreshToken = req.body.token;
    if (!refreshToken) {
      return res.status(401).json({ error: "refresh token required" });
    }
    const new_access_token = get_access_token(
      req.user.user_id,
      req.user.unique_uuid,
      req.user.username,
      req.user.email,
      req.user.isAdmin
    );
    return res.status(200).json(new_access_token);
  }
);

module.exports = router;
