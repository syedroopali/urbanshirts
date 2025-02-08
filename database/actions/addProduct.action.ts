"use server";

import { ProductSchema } from "@/lib/validations";
import dbConnect from "../dbConnect";
import mongoose from "mongoose";
import Product, { IProduct } from "../models/porduct.model";

export async function AddProduct(params: {
  name: string;
  price: string;
  description: string;
  detail: string;
  tag: string;
  imageUrl: string;
}) {
  const data = await params;
  const validatedResult = ProductSchema.safeParse(data);

  if (!validatedResult.success) {
    return { success: false, data: "unable to validate product data" };
  }

  await dbConnect();

  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    await Product.create([validatedResult.data], {
      session,
    });
    await session.commitTransaction();
    return { success: true };
  } catch (error: unknown) {
    if (error instanceof Error) {
      await session.abortTransaction();
      return { success: false };
    }
  } finally {
    await session.endSession();
  }
}
