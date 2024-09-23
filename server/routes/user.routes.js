import { Router } from "express";
import * as UserController from "./../controllers/user.controller.js";
import { isAuthenticated } from "../utils/authentication.js";

const userRouter = Router();

// sign up user
userRouter.post("/signup", UserController.createUser);

// login user
userRouter.post("/login", UserController.logInUser);

// list user created courses
userRouter.get("/my-courses", isAuthenticated, UserController.getUserCourses);

// list user purchased courses
userRouter.get(
  "/my-learnings",
  isAuthenticated,
  UserController.getUserLearnings
);

// list purchases (just the transactions)
userRouter.get("/purchases", isAuthenticated, UserController.getUserPurchases);

export default userRouter;
