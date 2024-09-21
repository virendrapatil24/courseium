import { Router } from "express";

const userRouter = Router();

// sign up user
userRouter.post("/signup", (res, req) => {});

// login user
userRouter.post("/login", (res, req) => {});

// list user created courses
userRouter.get("/my-courses", (res, req) => {});

// list user purchased courses
userRouter.get("/my-learnings", (res, req) => {});

// list purchases (just the transactions)
userRouter.get("/purchases", (res, req) => {});

export default userRouter;
