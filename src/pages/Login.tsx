import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import loginSchema from "../validation-schemas/loginSchema";
import { useLoginMutation } from "../rtk/api/auth";
import { Button, Spinner } from "flowbite-react";
import { toast } from "sonner";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { setToken } from "../rtk/slices/userLogin";
import { structureError } from "../utils/structureError";

type LoginData = z.infer<typeof loginSchema>;

const Login = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginData>({
		mode: "onTouched",
	});
	const [login, { isLoading, error, data }] = useLoginMutation();

	const onSubmit = (data: LoginData) => {
		login(data);
	};

	if (error) {
		const e = structureError(error);
		toast.error(e.message);
	}

	if (data) {
		Cookies.set("user-token", data.token);
		dispatch(setToken(data.token));
		toast.success("Login successful!");
		navigate("/");
	}

	return (
		<div className="flex justify-center items-center h-screen bg-gray-100">
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="bg-white p-6 rounded shadow-md w-full max-w-md"
			>
				<h2 className="text-2xl font-bold text-center mb-4">Welcome Back!</h2>

				<div className="mb-4">
					<label className="block text-gray-700">Email</label>
					<input
						{...register("email")}
						type="email"
						className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
					/>
					{errors.email && (
						<span className="text-red-500 text-sm">{errors.email.message}</span>
					)}
				</div>

				<div className="mb-4">
					<label className="block text-gray-700">Password</label>
					<input
						{...register("password")}
						type="password"
						className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
					/>
					{errors.password && (
						<span className="text-red-500 text-sm">
							{errors.password.message}
						</span>
					)}
				</div>

				<Button
					type="submit"
					className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
				>
					{isLoading ? <Spinner /> : "Login"}
				</Button>

				<p className="text-center mt-4 text-sm text-gray-600">
					Don’t have an account?{" "}
					<Link to="/registration" className="text-blue-500 hover:underline">
						Register here
					</Link>
				</p>
			</form>
		</div>
	);
};

export default Login;
