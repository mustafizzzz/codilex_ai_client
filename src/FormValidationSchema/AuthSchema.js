import * as z from "zod";

export const registerSchema = z.object({
  fullName: z.string().min(2, { message: "Full name must be at least 2 characters" }),
  lastName: z.string().min(2, { message: "Last name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().regex(/^\d{10}$/, "Phone number must be 10 digits"),
  terms: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions",
  }),
})

export const otpValidationSchema = z.object({
  pin: z.string().min(4, {
    message: "Your one-time password must be 4 characters.",
  }),
});

export const loginSchema = z.object({
  phone: z.string().regex(/^\d{10}$/, "Phone number must be 10 digits"),
})