import asyncHandler from "../../utils/asyncHandler.js";

import Notice from "./notice.model.js";

export const getNotices =
  asyncHandler(async (req, res) => {
    const notices =
      await Notice.find().sort({
        createdAt: -1,
      });

    res.json({
      success: true,
      notices,
    });
  });

export const getSingleNotice =
  asyncHandler(async (req, res) => {
    const notice =
      await Notice.findOne({
        slug: req.params.slug,
      });

    if (!notice) {
      res.status(404);

      throw new Error(
        "Notice not found"
      );
    }

    res.json({
      success: true,
      notice,
    });
  });

export const createNotice =
  asyncHandler(async (req, res) => {
    const notice =
      await Notice.create(req.body);

    res.status(201).json({
      success: true,
      notice,
    });
  });

export const updateNotice =
  asyncHandler(async (req, res) => {
    const notice =
      await Notice.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
        }
      );

    res.json({
      success: true,
      notice,
    });
  });

export const deleteNotice =
  asyncHandler(async (req, res) => {
    const notice =
      await Notice.findById(
        req.params.id
      );

    if (!notice) {
      res.status(404);

      throw new Error(
        "Notice not found"
      );
    }

    await notice.deleteOne();

    res.json({
      success: true,
      message:
        "Notice deleted",
    });
  });
