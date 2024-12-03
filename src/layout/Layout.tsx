import React from "react";
import Navbar from "../components/shared/Navbar";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/shared/Sidebar";

const Layout = () => {
	return (
		<section className="grid min-h-screen bg-background md:grid-cols-[auto_1fr]">
			<Sidebar />
			<section className="grid h-screen grid-rows-[auto_1fr]">
				<Navbar />
				<main className="customized_scrollbar h-full overflow-y-auto rounded-t-xl px-5 py-6 pb-6">
					<Outlet />
				</main>
			</section>
		</section>
	);
};

export default Layout;
