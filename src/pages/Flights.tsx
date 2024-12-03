import React from "react";
import FlightCard from "../components/flights/FlightCard";
import { useGetFlightsQuery } from "../rtk/api/flights";
import Loader from "../components/shared/Loader";
import { Flight } from "../types/flightsTypes";
import NotFound from "../components/shared/NotFound";

const Flights = () => {
	const { isError, isLoading, isFetching, data, isSuccess } =
		useGetFlightsQuery();

	let content;
	if (isLoading || isFetching) {
		content = <Loader />;
	} else if (!isError && isSuccess && data?.length > 0) {
		content = (
			<div className="grid grid-cols-1 md:grid-cols-3 mt-6 gap-4">
				{data.map((flight: Flight) => (
					<FlightCard key={flight._id} data={flight} />
				))}
			</div>
		);
	} else if (!isError && data?.length === 0) {
		content = (
			<NotFound message="No flights found! Please modify your search." />
		);
	} else {
		content = <NotFound message="An error occurred while fetching flights." />;
	}

	return (
		<div>
			<div className="my-6">
				<p className="font-light text-4xl text-slate-500">Available flights</p>
			</div>
			<div>{content}</div>
		</div>
	);
};

export default Flights;
