import { model, models, Schema } from "mongoose";

export interface IUser {
  username: string;
  email: string;
  image: string;
  cart: string[];
  isAdmin: boolean;
}

const UserSchema = new Schema<IUser>(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    image: { type: String },
    cart: { type: [String] },
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const User = models?.User || model<IUser>("User", UserSchema);

export default User;
