import React from "react";
import { Link } from "react-router-dom";
import { sidebarLinks } from "../../layout/sidebarLinks";

const Sidebar = () => (
	<aside className="w-16 md:w-64 bg-gray-900 text-white flex flex-col">
		<div className="p-4 font-bold text-xl hidden md:block">Logo</div>
		<nav className="flex-1 flex flex-col gap-2 px-4">
			{sidebarLinks.map(({ url, icon, title }, indx: number) => (
				<Link
					to={url}
					className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-800"
					key={indx}
				>
					<span className="text-lg">{icon}</span>
					<span className="hidden md:inline">{title}</span>
				</Link>
			))}
		</nav>
	</aside>
);

export default Sidebar;
