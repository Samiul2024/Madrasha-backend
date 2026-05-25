import asyncHandler from "../../utils/asyncHandler.js";

import Gallery from "./gallery.model.js";

export const getGallery =
  asyncHandler(async (req, res) => {
    const gallery =
      await Gallery.find().sort({
        createdAt: -1,
      });

    res.json({
      success: true,
      gallery,
    });
  });

export const createGallery =
  asyncHandler(async (req, res) => {
    const gallery =
      await Gallery.create(req.body);

    res.status(201).json({
      success: true,
      gallery,
    });
  });

export const updateGallery =
  asyncHandler(async (req, res) => {
    const gallery =
      await Gallery.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
        }
      );

    res.json({
      success: true,
      gallery,
    });
  });

export const deleteGallery =
  asyncHandler(async (req, res) => {
    const gallery =
      await Gallery.findById(
        req.params.id
      );

    if (!gallery) {
      res.status(404);

      throw new Error(
        "Gallery item not found"
      );
    }

    await gallery.deleteOne();

    res.json({
      success: true,
      message:
        "Gallery item deleted",
    });
  });
