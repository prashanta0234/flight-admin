import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { jwtType } from "../types/jwtType";

const Protected = () => {
	const token = Cookies.get("user-token");
	let decoded;
	if (token) {
		decoded = jwtDecode<jwtType>(token as string);
	}

	return token && decoded?.role === "ADMIN" ? (
		<Outlet />
	) : (
		<Navigate to="/login" />
	);
};

export default Protected;
