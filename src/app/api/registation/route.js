import dbConnect from "@/db/dbConfig";
import users from "@/model/Users/Users";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

// export function GET() {
//   return NextResponse.json({ message: "Login successful", success: true });
// }
export async function POST(req) {
  await dbConnect();

  const { name, email, mobile, password } = await req.json();
  if (!name || !email || !password || !mobile)
    return NextResponse.json({ message: "Invalid Details ", success: false });

  const emailCheak = await users.findOne({ email: email });
  const mobileCheak = await users.findOne({ mobile: mobile });

  if (emailCheak || mobileCheak)
    return NextResponse.json({ message: "User Already Exist", success: false });
  // //console.log(username);

  const hashpassword = await bcrypt.hash(password, 15);
  //console.log(hashpassword);

  const usersave = await users({
    name,

    email,
    mobile,
    password: hashpassword,
  });

  //   //console.log(typeof usersave._id);
  //   const { _id } = usersave._id;
  //console.log({ _id: usersave._id });

  await usersave.save();

  const token = jwt.sign({ _id: usersave._id }, process.env.JWT_TOKEN);
  //console.log(token);
  const res = NextResponse.json({
    usersave,
    message: "Login successful",
    success: true,
  });

  // res.cookies.set("token", token, {
  //   httpOnly: true,
  // });
  cookies().set({
    name: "token",
    value: token,
    expires: new Date(Date.now() + 1000 * 60 * 60 * 12),
    httpOnly: true,
    secure: true,
  });

  return res;
}
