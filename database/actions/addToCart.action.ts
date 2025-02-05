"use server";

import { auth } from "@/auth";
import dbConnect from "../dbConnect";
import User from "../models/user.model";

export async function AddToCart(params) {
  const id = await params;

  const session = await auth();
  if (!session?.user) {
    throw new Error("Please Login First");
  }

  try {
    await dbConnect();
    await User.findOneAndUpdate(
      { email: session.user.email },
      { $push: { cart: id } }
    );
  } catch (error) {
    throw new Error(error.message);
  }

  return { success: true };
}
