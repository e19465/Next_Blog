const router = require("express").Router();
const bcrypt = require("bcrypt");
const multer = require("multer");
const User = require("../../models/User");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const { uploadToS3AndGetURL } = require("../../functions/aws_upload");
const { v4: uuidv4 } = require("uuid");
const {
  get_access_token,
  get_refresh_token,
} = require("../../functions/jwt_tokens");
////////////////////////////////////////////////////////////////////////////

//! REGISTER ROUTE
router.post("/register", upload.single("image"), async (req, res) => {
  const uniqueIdForUser = uuidv4();
  let image_info = {};
  if (req.file) {
    try {
      image_info = await uploadToS3AndGetURL(
        req.file.buffer,
        req.file.originalname,
        req.file.mimetype,
        "dp_images",
        uniqueIdForUser
      );
    } catch (err) {
      console.error(err);
      return res.status(500).json({
        error: "An error occurred during image uploading. Please try again",
      });
    }
  }

  const req_username = req.body.username;
  const req_password = req.body.password;
  const req_email = req.body.email;

  if (!req_username || !req_password || !req_email) {
    return res
      .status(400)
      .json({ error: "username, password and email required" });
  }

  try {
    const hashed_pw = await bcrypt.hash(req_password, 10);
    const new_user = new User({
      username: req_username,
      password: hashed_pw,
      email: req_email,
      dp: image_info,
      unique_uuid: uniqueIdForUser,
    });

    const saved_user = await new_user.save();
    const { password, ...others } = saved_user._doc;
    return res.status(201).json(others);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

//! LOGN ROUTE
router.post("/login", async (req, res) => {
  const req_username = req.body.username;
  const req_password = req.body.password;

  if (!req_username || !req_password) {
    return res.status(400).json({ error: "username and password required" });
  }

  try {
    const found_user = await User.findOne({ username: req_username });

    if (!found_user) {
      return res.status(401).json({ error: "wrong credentials" });
    }

    const found_user_password = found_user.password;
    const is_password_correct = await bcrypt.compare(
      req_password,
      found_user_password
    );
    if (!is_password_correct) {
      return res.status(401).json({ error: "wrong credentials" });
    }

    const access_token = get_access_token(
      found_user._id,
      found_user.unique_uuid,
      found_user.username,
      found_user.email
    );
    const refresh_token = get_refresh_token(found_user._id);
    return res
      .status(200)
      .json({ access: access_token, refresh: refresh_token });
  } catch (err) {
    res.status(500).json(err.message);
  }
});

module.exports = router;
