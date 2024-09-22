import { Course } from "../models/course.js";
import { Purchase } from "../models/purchase.js";

export async function getAllCourses(req, res) {
  try {
    const courses = await Course.find();
    res.status(200).json({ message: "courses fetched successfully", courses });
  } catch (error) {
    res.status(500).json({ message: "unable to fetch courses", error });
  }
}

export async function createCourse(req, res) {
  try {
    const { title, description, price, imageURL, category } = req.body;

    const newCourse = new Course({
      title,
      description,
      price,
      instructor: req.user.id,
      imageURL: imageURL || null,
      category: category || null,
    });

    await newCourse.save();

    res.status(201).json({ message: "course created successfully" });
  } catch (error) {
    res.status(500).json({ message: "unable to create course", error });
  }
}

export async function updateCourse(req, res) {
  try {
    const { title, description, price, imageURL, category } = req.body;

    if (title) req.course.title = title;
    if (description) req.course.description = description;
    if (price) req.course.price = price;
    if (imageURL !== undefined) req.course.imageURL = imageURL;
    if (category) req.course.category = category;

    await req.course.save();

    res.status(200).json({ message: "Course updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "unable to update the course", error });
  }
}

export async function deleteCourse(req, res) {
  try {
    await req.course.deleteOne();

    res.status(200).json({ message: "Course deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "unable to delete the course", error });
  }
}

export function previewCourse(req, res) {
  try {
    res.status(200).json({
      message: "course details fetched successfully",
      course: req.course,
    });
  } catch (error) {
    res.status(500).json({ message: "unable to fetch the course", error });
  }
}

export async function purchaseCourse(req, res) {
  try {
    // user cannot purchase own course
    if (req.user.id === req.course.instructor._id.toString()) {
      res.status(403).json({ message: "you cannot purchase your own course" });
      return;
    }

    // course already purchased
    const courseAlreadyPurchased = await Purchase.findOne({
      user: req.user.id,
      course: req.course._id,
    });
    if (courseAlreadyPurchased) {
      res.status(403).json({ message: "course already purchased" });
      return;
    }

    const purchase = new Purchase({
      user: req.user.id,
      course: req.course._id,
    });

    await purchase.save();

    res.status(201).json({ message: "purchase done successfully" });
  } catch (e) {
    res.status(500).json({ message: "unable to make a purchase", error: e });
  }
}
