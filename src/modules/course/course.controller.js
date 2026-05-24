import asyncHandler from "../../utils/asyncHandler.js";

import Course from "./course.model.js";

export const getCourses =
  asyncHandler(async (req, res) => {
    const courses =
      await Course.find().sort({
        createdAt: -1,
      });

    res.json({
      success: true,
      courses,
    });
  });

export const createCourse =
  asyncHandler(async (req, res) => {
    const course =
      await Course.create(req.body);

    res.status(201).json({
      success: true,
      course,
    });
  });

export const deleteCourse =
  asyncHandler(async (req, res) => {
    const course =
      await Course.findById(
        req.params.id
      );

    if (!course) {
      res.status(404);

      throw new Error(
        "Course not found"
      );
    }

    await course.deleteOne();

    res.json({
      success: true,
      message:
        "Course deleted",
    });
  });
