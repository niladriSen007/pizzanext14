import { comparePassword } from "@/helperFunctions/comparePassword";

import { UserDetails } from "@/moddels/UserDetails";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(req) {
  // console.log(req)
  mongoose.connect(process.env.MONGO_URL);
  const body = await req.json();
  const { email, password } = body;

  const existingUser = await UserDetails.findOne({ email });

  if (!existingUser) {
    return NextResponse.json({ Text: "No user exists" });
  }
  const decryptedPassword = await comparePassword(
    password,
    existingUser?.password
  );
  return NextResponse.json({ Text: existingUser });

  //   await newUser.save();
  //   return Response.json(newUser);
}
