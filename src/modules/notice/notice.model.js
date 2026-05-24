import mongoose from "mongoose";

const noticeSchema =
  new mongoose.Schema(
    {
      title: {
        type: String,
        required: true,
      },

      slug: {
        type: String,
        required: true,
        unique: true,
      },

      category: {
        type: String,
        default: "General",
      },

      content: {
        type: String,
        required: true,
      },
    },

    {
      timestamps: true,
    }
  );

const Notice =
  mongoose.model(
    "Notice",
    noticeSchema
  );

export default Notice;
