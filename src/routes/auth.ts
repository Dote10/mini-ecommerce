import { Router } from "express";
import { login, signup } from "../controllers/auth";
import { customErrorHandler } from "../middlewares/error-handler";

const authRoutes: Router = Router();

authRoutes.post("/signup", customErrorHandler(signup));

authRoutes.post("/login", login);

export default authRoutes;
