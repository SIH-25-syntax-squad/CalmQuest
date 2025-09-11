import { Router } from "express";
import { getUser, login, logout, signup } from "../controllers/userController.js";
import { verifyJWT } from "../middlewares/verifyJWT.js";

const router = Router();

router.route("/signup").post(signup);
router.route("/login").post(login);
router.route("/logout").post(verifyJWT, logout);

router.route("/currentUser").get(verifyJWT, getUser);


export default router