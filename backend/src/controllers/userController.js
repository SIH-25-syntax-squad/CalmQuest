import AsyncHandler from "../utils/AsyncHandler.js"
import ApiError from "../utils/ApiError.js"
import ApiResponse from "../utils/ApiResponse.js"

import { User } from "../models/userModel.js"

export const generateAccessToken = async (userId) => {
    try {
        const user = await User.findById(userId);
        if (!user) {
            throw new Error("User not found");
        }
        const accessToken = await user.generateAccessToken();
        return { accessToken };
    } catch (error) {
        console.log(error);
        throw new Error("Error generating access token");
    }
};

const signup = async (req, res) => {
    const { email, name, password } = req.body;
    try {
        if (!email || !name || !password) {
            return res.status(400).json({ success: false, message: "Email, name, and password are required" });
        }

        let user = await User.findOne({ email });
        if (user) {
            return res.status(409).json({ success: false, message: "User with this email already exists" });
        }
        user = await User.create({ email, name, password });

        const { accessToken } = await generateAccessToken(user._id);

        const newUser = await User.findById(user._id).select("-password");

        if (!newUser) {
            return res.status(500).json({ success: false, message: "Something went wrong while registering the user" });
        }

        return res
            .status(200)
            .cookie("accessToken", accessToken, { httpOnly: true, secure: true })
            .json({ success: true, data: newUser, message: "User registered successfully" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: "Error creating user" });
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        if (!email) {
            return res.status(400).json({ success: false, message: "Please provide your email" });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        const isPasswordCorrect = await user.matchPassword(password);
        if (!isPasswordCorrect) {
            return res.status(400).json({ success: false, message: "Invalid credentials" });
        }

        const { accessToken } = await generateAccessToken(user._id);

        const loggedUser = await User.findById(user._id).select("-password");
        await user.save({ validateBeforeSave: false });

        return res
            .status(200)
            .cookie("accessToken", accessToken, { httpOnly: true, secure: true })
            .json({ success: true, data: { user: loggedUser, accessToken }, message: "User logged in successfully" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: "Error logging in" });
    }
};

const getUser = async (req, res) => {
    try {
        return res.status(200).json({ success: true, data: req.user, message: "Current User fetched successfully" });
    } catch (error) {
        return res.status(500).json({ success: false, message: "Error fetching user" });
    }
};

const logout = async (req, res) => {
    try {
        return res.status(200).clearCookie("accessToken").json({ success: true, message: "User logged out successfully" });
    } catch (error) {
        return res.status(500).json({ success: false, message: "Error logging out" });
    }
};

export { signup, login, getUser, logout };