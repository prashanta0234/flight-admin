import { ReactNode } from "react";

import { FaList, FaPlaneArrival } from "react-icons/fa6";
import { IoAddCircle } from "react-icons/io5";
import { FaHome } from "react-icons/fa";

interface ILink {
	title: string;
	url: string;
	icon: ReactNode;
}

export const sidebarLinks: ILink[] = [
	{ title: "Dashboard", url: "/", icon: <FaHome /> },
	{ title: "Flights", url: "/flights", icon: <FaPlaneArrival /> },
	{
		title: "Add Flights",
		url: "/add-flights",
		icon: <IoAddCircle />,
	},
	{ title: "Bookings", url: "/bookings", icon: <FaList /> },
];
