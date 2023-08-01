import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const res = NextResponse.json({ message: "logout", suceess: true });

  cookies().set({
    name: "token",
    value: "",
    expires: new Date(Date.now()),
    httpOnly: true,
    secure: true,
  });

  return res;
}
