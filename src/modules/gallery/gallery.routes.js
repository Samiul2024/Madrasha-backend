import express from "express";

import {
  getGallery,
  createGallery,
  updateGallery,
  deleteGallery,
} from "./gallery.controller.js";

import {
  protect,
} from "../../middleware/authMiddleware.js";

const router =
  express.Router();

router.get("/", getGallery);

router.post(
  "/",
  protect,
  createGallery
);

router.put(
  "/:id",
  protect,
  updateGallery
);

router.delete(
  "/:id",
  protect,
  deleteGallery
);

export default router;
