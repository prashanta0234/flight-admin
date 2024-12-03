import { z } from "zod";

const registrationSchema = z.object({
	name: z.string().nonempty("Name is required"),
	email: z.string().email("Invalid email format").nonempty("Email is required"),
	password: z
		.string()
		.min(8, "Password must be at least 8 characters")
		.nonempty("Password is required"),
	phone: z
		.string()
		.regex(/^(\+88)?01[3-9]\d{8}$/, "Invalid phone number format")
		.nonempty("Phone number is required"),
	gender: z.enum(["Male", "Female"], { required_error: "Gender is required" }),
});

export default registrationSchema;
