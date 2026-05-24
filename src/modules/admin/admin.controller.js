import asyncHandler from "../../utils/asyncHandler.js";
import generateToken from "../../utils/generateToken.js";
import Admin from "./admin.model.js";

export const loginAdmin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const admin = await Admin.findOne({ email });

  if (admin && (await admin.matchPassword(password))) {
    res.json({
      success: true,
      token: generateToken(admin._id),
      admin: {
        id: admin._id,
        name: admin.name,
        email: admin.email,
        role: admin.role,
      },
    });
  } else {
    res.status(401);
    throw new Error("Invalid credentials");
  }
});

export const getProfile = asyncHandler(async (req, res) => {
  res.json({
    success: true,
    admin: req.admin,
  });
});
