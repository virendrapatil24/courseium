import { model, Schema } from "mongoose";

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
export const Purchase = model("Purchase", PurchaseSchema);
