import { string, z } from "zod";

export const UserSchema = z.object({
  username: z.string().min(1, { message: "Username is required" }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Please provide valid email" }),
  image: z.string(),
});

export const ProductSchema = z.object({
  name: z.string().min(1, { message: "Please enter product name" }),
  price: z.string().min(1, { message: "Please enter product price" }),
  description: z
    .string()
    .min(1, { message: "Please enter products description" }),
  detail: z.string().min(1, { message: "Please enter products detail" }),
  tag: z.string(),
  imageUrl: string().default(""),
});
