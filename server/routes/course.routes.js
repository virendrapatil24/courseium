import { Router } from "express";
import * as CourseController from "./../controllers/course.controller.js";
import { isAuthenticated } from "../utils/authentication.js";
import { isCourseValid, isUserCourseInstructor } from "../utils/utils.js";

const courseRouter = Router();

// list all the available courses
courseRouter.get("/", CourseController.getAllCourses);

// create course
courseRouter.post("/create", isAuthenticated, CourseController.createCourse);

// update course
courseRouter.put(
  "/update",
  isAuthenticated,
  isCourseValid,
  isUserCourseInstructor,
  CourseController.updateCourse
);

// delete course
courseRouter.delete(
  "/delete",
  isAuthenticated,
  isCourseValid,
  isUserCourseInstructor,
  CourseController.deleteCourse
);

// preview course
courseRouter.post("/preview", isCourseValid, CourseController.previewCourse);

// purchase course
courseRouter.post(
  "/purchase",
  isAuthenticated,
  isCourseValid,
  CourseController.purchaseCourse
);

export default courseRouter;
