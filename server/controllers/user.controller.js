import { hash } from "bcrypt";
import { User } from "../models/user.js";

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
    await User.create({
      username: usernameLowerCase,
      email: emailLowerCase,
      password: hashedPassword,
      lastName,
      firstName,
    });

    res.status(201).json({ message: "User signed up successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error while signing up" });
  }
}

export function logInUser(req, res) {}

export function getUserCourses(req, res) {}

export function getUserLearnings(req, res) {}

export function getUserPurchases(req, res) {}
