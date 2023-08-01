import { NextResponse } from "next/server";

export async function GET() {
  const res = NextResponse.json({ message: "logout", suceess: true });

  res.cookies.set("token", "", {
    expires: new Date(Date.now()),
  });

  return res;
}
