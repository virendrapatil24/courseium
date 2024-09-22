import { Router } from "express";

const userRouter = Router();

// sign up user
userRouter.post("/signup", (req, res) => {
  const { username, password, email, firstName, lastName } = req.body;
});

// login user
userRouter.post("/login", (req, res) => {});

// list user created courses
userRouter.get("/my-courses", (req, res) => {});

// list user purchased courses
userRouter.get("/my-learnings", (req, res) => {});

// list purchases (just the transactions)
userRouter.get("/purchases", (req, res) => {});

export default userRouter;
