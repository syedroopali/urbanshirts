"use server";

import { auth } from "@/auth";
import User from "../models/user.model";
import { redirect } from "next/navigation";

export async function RemoveFromCart(formData: FormData) {
  const session = await auth();
  const id = await formData.get("id");
  const user = await User.findOne({ email: session?.user?.email });
  const updatedCart = user.cart.filter((itemId: string) => itemId != id);
  await User.updateOne({ _id: user._id }, { $set: { cart: updatedCart } });
  redirect("/products/addToCart");
}
