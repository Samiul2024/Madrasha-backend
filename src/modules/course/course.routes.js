import express from "express";

import {
  getCourses,
  getSingleCourse,
  createCourse,
  updateCourse,
  deleteCourse,
} from "./course.controller.js";

import {
  protect,
} from "../../middleware/authMiddleware.js";

const router =
  express.Router();

router.get("/", getCourses);

router.get(
  "/:id",
  getSingleCourse
);

router.post(
  "/",
  protect,
  createCourse
);

router.put(
  "/:id",
  protect,
  updateCourse
);

router.delete(
  "/:id",
  protect,
  deleteCourse
);

export default router;
