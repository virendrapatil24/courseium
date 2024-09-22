import { Course } from "../models/course.js";

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

export function purchaseCourse(req, res) {}
