import { Router } from "express";

const courseRouter = Router();

// list all the available courses
courseRouter.get("/", (req, res) => {});

// create course
courseRouter.post("/create", (req, res) => {});

// update course
courseRouter.put("/update", (req, res) => {});

// delete course
courseRouter.delete("/delete", (req, res) => {});

// preview course
courseRouter.post("/preview", (req, res) => {});

// purchase course
courseRouter.post("/purchase", (req, res) => {});

export default courseRouter;
