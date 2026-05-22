import dotenv from "dotenv";

import mongoose from "mongoose";

import connectDB from "../config/db.js";

import Admin from "../modules/admin/admin.model.js";

dotenv.config();

connectDB();

const createAdmin =
  async () => {
    try {
      const existingAdmin =
        await Admin.findOne({
          email:
            "admin@daruliman.com",
        });

      if (
        existingAdmin
      ) {
        console.log(
          "Admin already exists"
        );

        process.exit();
      }

      const admin =
        await Admin.create({
          name:
            "Super Admin",

          email:
            "admin@daruliman.com",

          password:
            "12345678",

          role:
            "super-admin",
        });

      console.log(
        "Admin Created:"
      );

      console.log(admin);

      process.exit();
    } catch (error) {
      console.log(error);

      process.exit(1);
    }
  };

createAdmin();
