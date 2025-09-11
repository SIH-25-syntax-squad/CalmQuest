import { User } from "../models/userModel.js";
import jwt from "jsonwebtoken";

export const verifyJWT = async (req, res, next) => {
  try {
    const token =
      req.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    // Decoding token
    const decodedToken = jwt.verify(token, process.env.ACCESS_SECRET_KEY);

    // User with id from decoded token
    const user = await User.findById(decodedToken?._id).select("-password -refreshToken");

    if (!user) {
      return res.status(401).json({ success: false, message: "Invalid access token" });
    }

    // Adding user in req
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ success: false, message: error?.message || "Invalid access token" });
  }
};