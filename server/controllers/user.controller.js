import { compare, hash } from "bcrypt";
import { User } from "../models/user.js";
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
  } catch (err) {
    res.status(500).json({ message: "Error while signing up" });
  }
}

export async function logInUser(req, res) {
  try {
    const { username, password } = req.body;

    const currentUser = await User.findOne({ username });
    if (!currentUser) {
      res.status(400).json({ message: "user not found" });
    }

    const isPasswordValid = await compare(password, currentUser.password);
    if (!isPasswordValid) {
      res.status(401).json({ message: "invalid password" });
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
    res.status(500).json({ error: "Unable to log in user" });
  }
}

export function getUserCourses(req, res) {}

export function getUserLearnings(req, res) {}

export function getUserPurchases(req, res) {}
