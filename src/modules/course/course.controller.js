import asyncHandler from "../../utils/asyncHandler.js";

const getCourses =
  asyncHandler(
    async (req, res) => {
      res.status(200).json({
        success: true,

        courses: [
          {
            title:
              "Hifzul Quran Program",

            duration:
              "3-5 Years",

            fee:
              "500 / Month",
          },

          {
            title:
              "Boyosko Islamic Education",

            duration:
              "12-18 Months",

            fee:
              "100 / Month",
          },
        ],
      });
    }
  );

export {
  getCourses,
};
