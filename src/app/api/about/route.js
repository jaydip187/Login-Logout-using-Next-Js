import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import users from "@/model/Users/Users";

const { default: dbConnect } = require("@/db/dbConfig");

export async function GET() {
  dbConnect();

  const cookie = cookies();
  const token = cookie.get("token");

  if (!token)
    return NextResponse.json({ message: "Login Frist", success: false });

  const { _id } = jwt.verify(token.value, process.env.JWT_TOKEN);

  const userInfo = await users.findById(_id);

  return NextResponse.json({
    userInfo,
    message: "User Data",
    success: true,
  });
}
