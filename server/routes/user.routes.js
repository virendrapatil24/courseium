import { Router } from "express";
import * as UserController from "./../controllers/user.controller.js";

const userRouter = Router();

// sign up user
userRouter.post("/signup", UserController.createUser);

// login user
userRouter.post("/login", UserController.logInUser);

// list user created courses
userRouter.get("/my-courses", UserController.getUserCourses);

// list user purchased courses
userRouter.get("/my-learnings", UserController.getUserLearnings);

// list purchases (just the transactions)
userRouter.get("/purchases", UserController.getUserPurchases);

export default userRouter;
