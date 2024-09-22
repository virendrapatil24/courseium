import { Course } from "../models/course.js";
import { Purchase } from "../models/purchase.js";

export function getAllCourses(req, res) {}

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
    res.status(500).json({ message: "unable to create course" });
  }
}

export function updateCourse(req, res) {}

export function deleteCourse(req, res) {}

export function previewCourse(req, res) {}

export async function purchaseCourse(req, res) {
  try {
    // user cannot purchase own course
    if (req.user.id === req.coursePurchased.instructor._id.toString()) {
      res.status(403).json({ message: "you cannot purchase your own course" });
      return;
    }

    // course already purchased
    const courseAlreadyPurchased = await Purchase.findOne({
      user: req.user.id,
      course: req.coursePurchased._id,
    });
    if (courseAlreadyPurchased) {
      res.status(403).json({ message: "course already purchased" });
      return;
    }

    const purchase = new Purchase({
      user: req.user.id,
      course: req.coursePurchased._id,
    });

    await purchase.save();

    res.status(201).json({ message: "purchase done successfully" });
  } catch (e) {
    res.status(500).json({ message: "unable to make a purchase", error: e });
  }
}
