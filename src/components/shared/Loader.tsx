import { Spinner } from "flowbite-react";
import React from "react";

const Loader = () => {
	return (
		<div className="flex h-screen w-full items-center justify-center bg-primary-50">
			<Spinner aria-label="Extra large spinner example" size="xl" />
		</div>
	);
};

export default Loader;
