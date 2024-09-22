import { model, Schema } from "mongoose";

const UserSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  firstName: { type: String },
  lastName: { type: String },
  createdAt: { type: Date, default: Date.now },
});

UserSchema.statics.findByEmailAndUsername =
  async function findByEmailAndUsername(email, username) {
    const user = this;
    const query = {
      $or: [{ email }, { username }],
    };
    const foundUser = await user
      .findOne(query)
      .collation({ locale: "en", strength: 2 })
      .exec();

    return foundUser;
  };

export const User = model("User", UserSchema);
