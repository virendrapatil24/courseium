import { compare, hash } from "bcrypt";
import { User } from "../models/user.js";
import { Course } from "../models/course.js";
import { Purchase } from "../models/purchase.js";
import { generateToken } from "../utils/authentication.js";

export async function createUser(req, res) {
  try {
    const { username, email, password, firstName, lastName } = req.body;
    const usernameLowerCase = username.toLowerCase();
    const emailLowerCase = email.toLowerCase();

    const existingUser = await User.findByEmailAndUsername(email, username);
    if (existingUser) {
      const fieldInUse =
        existingUser.email.toLowerCase() === emailLowerCase
          ? "Email"
          : "Username";
      res.status(422).json({ message: `${fieldInUse} is already taken` });
      return;
    }

    const hashedPassword = await hash(password, 10);
    const newUser = new User({
      username: usernameLowerCase,
      email: emailLowerCase,
      password: hashedPassword,
      lastName,
      firstName,
    });

    await newUser.save();

    const { error, token } = generateToken({ id: newUser._id.toString() });
    if (error) {
      res.status(400).json({ error });
      return;
    }

    console.log(token);
    res
      .status(201)
      .json({ message: "User signed up successfully", authToken: token });
  } catch (error) {
    res.status(500).json({ message: "Error while signing up", error });
  }
}

export async function logInUser(req, res) {
  try {
    const { username, password } = req.body;

    const currentUser = await User.findOne({ username });
    if (!currentUser) {
      res.status(400).json({ message: "User not found" });
    }

    const isPasswordValid = await compare(password, currentUser.password);
    if (!isPasswordValid) {
      res.status(401).json({ message: "Invalid password" });
    }

    const { error, token } = generateToken({
      id: currentUser._id.toString(),
    });
    if (error) {
      res.status(400).json({ error });
      return;
    }

    res
      .status(201)
      .json({ message: "User logged in successfully", authToken: token });
  } catch (error) {
    res.status(500).json({ message: "Unable to log in user", error });
  }
}

export async function getUserCourses(req, res) {
  try {
    const userCourses = await Course.find({
      instructor: req.user.id,
    });
    res
      .status(200)
      .json({ message: "Fetched user courses successfully", userCourses });
  } catch (error) {
    res.status(500).json({ message: "Unable to get user courses", error });
  }
}

export async function getUserLearnings(req, res) {
  try {
    const userPurchases = await Purchase.find({ user: req.user.id });
    const userLearnings = await Course.find({
      _id: { $in: userPurchases.map((purchase) => purchase.course) },
    });
    res
      .status(200)
      .json({ message: "Fetched user learnings successfully", userLearnings });
  } catch (error) {
    res.status(500).json({ message: "Unable to get user learnings", error });
  }
}

export async function getUserPurchases(req, res) {
  try {
    const userPurchases = await Purchase.find({ user: req.user.id });
    res
      .status(200)
      .json({ message: "Fetched user purchases successfully", userPurchases });
  } catch (error) {
    res.status(500).json({ message: "Unable to get user purchases", error });
  }
}
