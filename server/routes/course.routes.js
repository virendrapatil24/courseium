import { Router } from "express";
import * as CourseController from "./../controllers/course.controller.js";
import { isAuthenticated } from "../utils/authentication.js";

const courseRouter = Router();

// list all the available courses
courseRouter.get("/", CourseController.getAllCourses);

// create course
courseRouter.post("/create", isAuthenticated, CourseController.createCourse);

// update course
courseRouter.put("/update", CourseController.updateCourse);

// delete course
courseRouter.delete("/delete", CourseController.deleteCourse);

// preview course
courseRouter.post("/preview", CourseController.previewCourse);

// purchase course
courseRouter.post(
  "/purchase",
  isAuthenticated,
  CourseController.purchaseCourse
);

export default courseRouter;
