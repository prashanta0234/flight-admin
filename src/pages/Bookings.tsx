import React from "react";

import Loader from "../components/shared/Loader";
import NotFound from "../components/shared/NotFound";
import BookingCard from "../components/bookings/BookingCard";
import { useNavigate } from "react-router-dom";
import { useUserBookingsQuery } from "../rtk/api/bookings";
import { Booking } from "../types/bookingsTypes";

const Bookings = () => {
	const { data, isLoading, isFetching, isError, isSuccess, error } =
		useUserBookingsQuery();
	const navigate = useNavigate();

	if (error) {
		if ("status" in error) {
			error.status === 401 && navigate(`/login`);
		}
	}

	let content;
	if (isLoading || isFetching) {
		content = <Loader />;
	} else if (!isError && isSuccess && data?.length > 0) {
		content = (
			<div className="grid grid-cols-1 md:grid-cols-3 mt-6 gap-4">
				{data.map((flight: Booking) => (
					<BookingCard key={flight._id} data={flight} />
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
			<h1 className="text-center font-semibold text-2xl">All bookings</h1>
			<div>{content}</div>
		</div>
	);
};

export default Bookings;
