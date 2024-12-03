import React from "react";

const Navbar = () => (
	<nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
		<h1 className="text-xl font-bold">Dashboard</h1>
		<button className="bg-blue-500 px-4 py-2 rounded-md">Log Out</button>
	</nav>
);

export default Navbar;
