import { Router } from "express";
import * as CourseController from "./../controllers/course.controller";

const courseRouter = Router();

// list all the available courses
courseRouter.get("/", CourseController);

// create course
courseRouter.post("/create", CourseController);

// update course
courseRouter.put("/update", CourseController);

// delete course
courseRouter.delete("/delete", CourseController);

// preview course
courseRouter.post("/preview", CourseController);

// purchase course
courseRouter.post("/purchase", CourseController);

export default courseRouter;
