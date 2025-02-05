import { z } from "zod";

export const UserSchema = z.object({
  username: z.string().min(1, { message: "Username is required" }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Please provide valid email" }),
  image: z.string(),
});
