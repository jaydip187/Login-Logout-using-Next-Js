import dbConnect from "@/db/dbConfig";
import users from "@/model/Users/Users";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function POST(req) {
  await dbConnect();

  const { email, password } = await req.json();
  //console.log(email, password);
  // check if email and pass match in database
  const emailchaeck = await users.findOne({ email: email });

  // //console.log(emailchaeck);

  if (!emailchaeck)
    return NextResponse.json({
      message: "Invalid Email - Password",
      success: false,
    });

  const passwordMacth = await bcrypt.compare(password, emailchaeck.password);

  // //console.log(passwordMacth);
  if (!passwordMacth)
    return NextResponse.json({ message: "Invalid Password", success: false });

  const res = NextResponse.json({
    emailchaeck,
    message: "Login successful",
    success: true,
  });
  const token = jwt.sign({ _id: emailchaeck._id }, process.env.JWT_TOKEN);

  res.cookies.set("token", token, {
    httpOnly: true,
  });

  return res;
}
