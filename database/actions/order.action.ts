"use server";

import dbConnect from "../dbConnect";
import Order from "../models/order.model";
import User from "../models/user.model";
import mongoose from "mongoose";

export async function order(params: {
  email: string | null | undefined;
  address: string | null | undefined;
  phone: string | null | undefined;
}) {
  const { email, address, phone } = await params;
  await dbConnect();

  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const user = await User.findOne({ email }).session(session);

    await Order.create(
      [
        {
          address,
          phone,
          user: user._id,
          order: user.cart,
        },
      ],
      { session }
    );

    await session.commitTransaction();

    return { success: true };
  } catch (error: unknown) {
    await session.abortTransaction();

    if (error instanceof Error) {
      return { success: false };
    }
  } finally {
    await session.endSession();
  }
}
