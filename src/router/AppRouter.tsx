import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "../layout/Layout";
import App from "../App";
import Login from "../pages/Login";
import Protected from "../layout/Protected";
import Flights from "../pages/Flights";
import AddFlights from "../pages/AddFlights";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Protected />,
		children: [
			{
				path: "/",
				element: <Layout />,
				children: [
					{ path: "/", element: <App /> },
					{ path: "/flights", element: <Flights /> },
					{ path: "add-flights", element: <AddFlights /> },
				],
			},
		],
	},
	{
		path: "/login",
		element: <Login />,
	},
]);

export const AppRouter = () => {
	return (
		<Suspense fallback="Loading">
			<RouterProvider router={router} />
		</Suspense>
	);
};
