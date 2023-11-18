import { hashedPassword } from "@/helperFunctions/hashPassword";
import { UserDetails } from "@/moddels/UserDetails";
import mongoose from "mongoose";

export async function POST(req) {
  // console.log(req)
  mongoose.connect(process.env.MONGO_URL);
  const body = await req.json();
//   console.log(body);
  const { fullName, userName, email, password, confirmPassword } = body;
  const encryptedPassword = await hashedPassword(password);
  const newUser = new UserDetails({
    fullName,
    userName,
    email,
    password: encryptedPassword,
    confirmPassword,
  });

  await newUser.save();
  return Response.json(newUser);
}
