import React from "react";

const NotFound = ({ message }: { message: string }) => {
	return (
		<div className="flex h-screen w-full items-center justify-center bg-primary-50">
			<p className="text-center">{message}</p>
		</div>
	);
};

export default NotFound;
