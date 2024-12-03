import { z } from "zod";

const loginSchema = z.object({
	email: z.string().email("Invalid email format").nonempty("Email is required"),
	password: z
		.string()
		.min(8, "Password must be at least 8 characters")
		.nonempty("Password is required"),
});

export default loginSchema;
