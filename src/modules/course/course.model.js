import mongoose from "mongoose";

const courseSchema =
  new mongoose.Schema(
    {
      title: {
        type: String,
        required: true,
      },

      slug: {
        type: String,
        required: true,
      },

      duration: {
        type: String,
        required: true,
      },

      fee: {
        type: String,
        required: true,
      },

      description: {
        type: String,
        required: true,
      },

      features: [
        {
          type: String,
        },
      ],
    },

    {
      timestamps: true,
    }
  );

const Course =
  mongoose.model(
    "Course",
    courseSchema
  );

export default Course;
