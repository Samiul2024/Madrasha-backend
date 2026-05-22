import jwt from "jsonwebtoken";

import asyncHandler from "../utils/asyncHandler.js";

import Admin from "../modules/admin/admin.model.js";

const protect =
  asyncHandler(
    async (req, res, next) => {
      let token;

      if (
        req.headers.authorization &&
        req.headers.authorization.startsWith(
          "Bearer"
        )
      ) {
        token =
          req.headers.authorization.split(
            " "
          )[1];

        try {
          const decoded =
            jwt.verify(
              token,
              process.env.JWT_SECRET
            );

          req.admin =
            await Admin.findById(
              decoded.id
            ).select(
              "-password"
            );

          next();
        } catch (error) {
          res.status(401);

          throw new Error(
            "Not authorized"
          );
        }
      }

      if (!token) {
        res.status(401);

        throw new Error(
          "No token provided"
        );
      }
    }
  );

export {
  protect,
};
