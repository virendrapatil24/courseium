import { Course } from "../models/course.js";

export async function isUserCourseInstructor(req, res, next) {
  try {
    if (req.course.instructor.toString() !== req.user.id) {
      res.status(403).json({ message: "You don't own this course" });
      return;
    }

    next();
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
}

export async function isCourseValid(req, res, next) {
  try {
    const { courseId } = req.query;
    const course = await Course.findById(courseId);

    if (!course) {
      res.status(400).json({ error: "Course not found" });
      return;
    }

    req.course = course;
    next();
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
}
