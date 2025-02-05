import dbConnect from "@/database/dbConnect";
import User from "@/database/models/user.model";
import { UserSchema } from "@/lib/validations";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";
import slugify from "slugify";

export async function POST(request: NextRequest) {
  const user = await request.json();
  const validatedUser = UserSchema.safeParse(user);
  if (!validatedUser.success) {
    return NextResponse.json({ error: "Validation failed" });
  }

  const { username, email, image } = validatedUser.data;

  const slugifiedUsername = slugify(username, {
    lower: true,
    strict: true,
    trim: true,
  });
  await dbConnect();
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const existingUser = await User.findOne({ email }).session(session);
    if (existingUser) {
      return NextResponse.json({ error: "User Already Exist" });
    }

    await User.create([{ username: slugifiedUsername, email, image }], {
      session,
    });
    await session.commitTransaction();
    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    if (error instanceof Error) {
      await session.abortTransaction();
      return NextResponse.json({ error: error.message });
    }
  } finally {
    await session.endSession();
  }
}
