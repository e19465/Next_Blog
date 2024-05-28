const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    img: {
      type: Object,
      default: {},
    },
    authur: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    unique_uuid: {
      type: String,
      required: true,
    },
    owner_id: {
      type: String,
      required: true,
    },
    likes: [
      {
        user_id: String,
        liked: {
          type: Boolean,
          default: false,
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
