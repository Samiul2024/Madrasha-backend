import express from "express";

import {
  getCourses,
  createCourse,
  deleteCourse,
} from "./course.controller.js";

import {
  protect,
} from "../../middleware/authMiddleware.js";

const router =
  express.Router();

router.get("/", getCourses);

router.post(
  "/",
  protect,
  createCourse
);

router.delete(
  "/:id",
  protect,
  deleteCourse
);

export default router;
