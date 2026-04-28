import { dbConnect } from "@/lib/dbConnect";
import User from "@/models/User";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export const POST = async (req: Request) => {
  try {
    const { name, email, password, phoneNumber } = await req.json();
    await dbConnect();
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return NextResponse.json({
        status: 400,
        message: "The user is already existing",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = {
      name,
      email,
      hashedPassword,
      phoneNumber,
    };
    const createdUser = await User.create(newUser);
    return NextResponse.json({
      status: 201,
      data: createdUser,
      message: "user created successfully",
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: `A critical error ocurred. Error: ${error}`,
    });
  }
};
