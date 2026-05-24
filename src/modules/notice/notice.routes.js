import express from "express";

import {
  getNotices,
  getSingleNotice,
  createNotice,
  updateNotice,
  deleteNotice,
} from "./notice.controller.js";

import {
  protect,
} from "../../middleware/authMiddleware.js";

const router =
  express.Router();

router.get("/", getNotices);

router.get(
  "/:slug",
  getSingleNotice
);

router.post(
  "/",
  protect,
  createNotice
);

router.put(
  "/:id",
  protect,
  updateNotice
);

router.delete(
  "/:id",
  protect,
  deleteNotice
);

export default router;
