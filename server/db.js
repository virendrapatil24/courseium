import { model, Schema } from "mongoose";

const UserSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  firstName: { type: String },
  lastName: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const CourseSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  instructor: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  imageURL: { type: String },
  category: { type: String },
});

const PurchaseSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  course: { type: Schema.Types.ObjectId, ref: "Course", required: true },
  purchaseDate: { type: Date, default: Date.now },
  status: {
    type: String,
    enum: ["completed", "refunded"],
    default: "completed",
  },
});

export const User = model("User", UserSchema);
export const Course = model("Course", CourseSchema);
export const Purchase = model("Purchase", PurchaseSchema);
