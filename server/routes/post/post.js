const { v4: uuidv4 } = require("uuid");
const Post = require("../../models/Post");
const User = require("../../models/User");
const multer = require("multer");
const {
  verify_access_token,
  verify_access_token_and_admin,
} = require("../../middleware/verify_access_token");
const { uploadToS3AndGetURL } = require("../../functions/aws_upload");
const { deleteFromS3 } = require("../../functions/aws_delete");
const router = require("express").Router();
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

//! create post
router.post(
  "/post/create",
  verify_access_token,
  upload.single("image"),
  async (req, res) => {
    let set_data = { ...req.body };
    let image_info = {};
    const unique_uuid_post = uuidv4();
    if (req.file) {
      try {
        image_info = await uploadToS3AndGetURL(
          req.file.buffer,
          req.file.originalname,
          req.file.mimetype,
          "post_images",
          req.user.unique_uuid,
          unique_uuid_post
        );
      } catch (err) {
        console.error(err);
        return res.status(500).json({
          error: "An error occurred during image uploading. Please try again",
        });
      }
    }

    try {
      set_data = {
        ...set_data,
        authur: req.user.username,
        owner_id: req.user.user_id,
        unique_uuid: unique_uuid_post,
        img: image_info,
      };
      const new_post = new Post(set_data);
      await new_post.save();
      res.status(201).json(new_post);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
);

//! update post
router.patch(
  "/post/update/:unique_uuid_post",
  verify_access_token,
  upload.single("image"),
  async (req, res) => {
    let set_data = { ...req.body };
    let image_info = {};
    let is_aws_images_deleted = false;
    const unique_uuid_post = req.params.unique_uuid_post;
    if (req.file) {
      try {
        is_aws_images_deleted = await deleteFromS3(unique_uuid_post);
        image_info = await uploadToS3AndGetURL(
          req.file.buffer,
          req.file.originalname,
          req.file.mimetype,
          "post_images",
          req.user.unique_uuid,
          unique_uuid_post
        );
        set_data = { ...set_data, img: image_info };
      } catch (err) {
        console.error(err);
        return res.status(500).json({
          error: "An error occurred during image uploading. Please try again",
        });
      }
    }

    try {
      const updated_post = await Post.findOneAndUpdate(
        { unique_uuid: unique_uuid_post },
        { $set: set_data },
        { new: true }
      );
      if (!updated_post) {
        return res.status(404).json({ error: "post not found!" });
      }
      return res.status(200).json(updated_post);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }
);

//! delete post
router.delete(
  "/post/delete/:post_uuid",
  verify_access_token,
  async (req, res) => {
    const post_uuid = req.params.post_uuid;
    if (!post_uuid) {
      return res.status(400).json({ error: "post uuid required" });
    }
    try {
      const found_user = await User.findById(req.user.user_id);
      if (!found_user) {
        return res.status(404).json({ error: "user not found" });
      }
      const found_post = await Post.findOne({ unique_uuid: post_uuid });
      if (!found_post) {
        return res.status(404).json({ error: "post not found" });
      }
      if (found_post.owner_id === req.user.user_id || found_user.isAdmin) {
        is_aws_images_deleted = await deleteFromS3(post_uuid);
        await Post.findOneAndDelete({ unique_uuid: post_uuid });
        return res.status(200).json({
          messsage: "post has been successfully deleted",
          aws_images_deleted: is_aws_images_deleted,
        });
      } else {
        return res
          .status(403)
          .json({ error: "You don't have permission to delete this post" });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
);

//! get one post
router.get("/post/one/:postId", async (req, res) => {
  const post_id = req.params.postId;
  try {
    const found_post = await Post.findById(post_id);
    if (!found_post) {
      return res.status(404).json({ error: "post not found" });
    }
    return res.status(200).json(found_post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//! get all posts belongs to user
router.get("/post/user/all", verify_access_token, async (req, res) => {
  try {
    const found_posts = await Post.find({ owner_id: req.user.user_id });
    if (!found_posts) {
      return res.status(404).json({ error: "No posts found for this user" });
    }
    return res.status(200).json(found_posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//! get all posts
router.get("/post/all", async (req, res) => {
  try {
    const all_posts = await Post.find();
    if (!all_posts) {
      return res.status(404).json({ error: "No posts found" });
    }
    return res.status(200).json(all_posts);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

module.exports = router;
