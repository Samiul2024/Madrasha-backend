import express from "express";

import dotenv from "dotenv";

import cors from "cors";

import connectDB from "./config/db.js";

import courseRoutes from "./modules/course/course.routes.js";

import adminRoutes from "./modules/admin/admin.routes.js";
import noticeRoutes from "./modules/notice/notice.routes.js";
import galleryRoutes from "./modules/gallery/gallery.routes.js";

import {
  notFound,
  errorHandler,
} from "./middleware/errorMiddleware.js";

dotenv.config();

connectDB();

const app = express();

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://darulimanislamiyah.vercel.app"
  ],
  credentials: true,
}));

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message:
      "Darul Iman API Running",
  });
});

app.use(
  "/api/courses",
  courseRoutes
);

app.use("/api/admin", adminRoutes);
app.use("/api/notices", noticeRoutes);
app.use("/api/gallery", galleryRoutes);

app.use(notFound);

app.use(errorHandler);

const PORT =
  process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  );
});


