import { Course } from "../models/course.js";

export async function isUserCourseInstructor(req, res, next) {
  const userId = req.user.id;
  const courseId = req.coursePurchased._id;

  const courseMatch = await Course.findOne({
    _id: courseId,
    instructor: userId,
  });
  if (!courseMatch) {
    res.status(403).json({ message: "you don't own this course" });
    return;
  }

  next();
}

export async function isCourseValid(req, res, next) {
  const { courseId } = req.body;
  const { coursePurchased, error } = await checkCourse(courseId);

  if (error) {
    res.status(400).json({ error });
    return;
  }

  req.coursePurchased = coursePurchased;
  next();
}

export async function checkCourse(courseId) {
  const coursePurchased = await Course.findOne({
    _id: courseId,
  });
  if (!coursePurchased) {
    return { error: "course not found" };
  }

  return { coursePurchased };
}
