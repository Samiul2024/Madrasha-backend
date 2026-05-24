import dotenv from "dotenv";

import connectDB from "../config/db.js";

import Course from "../modules/course/course.model.js";

dotenv.config();

connectDB();

const seedCourses =
  async () => {
    try {
      await Course.deleteMany();

      await Course.insertMany([
        {
          title:
            "Hifzul Quran Program",

          slug:
            "hifzul-quran",

          duration:
            "3-5 Years",

          fee:
            "500 / Month",

          description:
            "Complete Quran memorization with Tajweed and Islamic tarbiyah.",

          features: [
            "Qualified Huffaz Teachers",
            "Daily Revision",
            "Islamic Tarbiyah",
            "Arabic Pronunciation",
          ],
        },

        {
          title:
            "Boyosko Islamic Education",

          slug:
            "boyosko-islamic-education",

          duration:
            "12-18 Months",

          fee:
            "100 / Month",

          description:
            "Islamic learning program for adults including Aqidah, Salah, Fiqh and daily Islamic lifestyle.",

          features: [
            "Iman & Aqidah",
            "Fiqh & Salah",
            "Daily Duas",
            "Islamic Lifestyle",
          ],
        },
      ]);

      console.log(
        "Courses Seeded"
      );

      process.exit();
    } catch (error) {
      console.log(error);

      process.exit(1);
    }
  };

seedCourses();
