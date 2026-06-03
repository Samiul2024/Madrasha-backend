import asyncHandler from "../../utils/asyncHandler.js";

import Gallery from "./gallery.model.js";

import cloudinary from "../../config/cloudinary.js";

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

    console.log("BODY:", req.body);

    console.log("FILE:", req.file);

    const result =
      await cloudinary.uploader.upload(
        `data:${req.file.mimetype};base64,${req.file.buffer.toString(
          "base64"
        )}`,
        {
          folder:
            "darul-iman/gallery",
        }
      );

    console.log(
      "CLOUDINARY:",
      result.secure_url,
      result.public_id
    );

    const gallery =
      await Gallery.create({
        title: req.body.title,

        category:
          req.body.category,

        image:
          result.secure_url,

        publicId:
          result.public_id,
      });

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

    if (gallery.publicId) {

      await cloudinary
        .uploader
        .destroy(
          gallery.publicId
        );

    }

    await gallery.deleteOne();

    res.json({
      success: true,
      message:
        "Gallery item deleted",
    });

  });
