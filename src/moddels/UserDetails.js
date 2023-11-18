import { model, models, Schema } from "mongoose";

const UserSchema = new Schema(
  {
    fullName: { type: String,required: true, },
    userName: { type: String,required: true, },
    email: { type: String,required: true, unique: true },
    password: { type: String },
    confirmPassword: { type: String },
    image: { type: String },
  },
  { timestamps: true }
);

export const UserDetails = models?.UserDetails || model("UserDetails", UserSchema);
