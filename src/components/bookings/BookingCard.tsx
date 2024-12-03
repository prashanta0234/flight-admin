import { Booking } from "@/types/bookingsTypes";
import { dateFormatter } from "../../utils/dateFormatter";
import React from "react";

const BookingCard = ({ data }: { data: Booking }) => {
	const { flightId, bookingDate, totalPrice, seatsBooked } = data;
	const { airline, flight_number, date, time } = flightId;
	return (
		<div className="p-4 bg-white shadow-md rounded-md">
			<h5 className="text-xl font-semibold">{airline}</h5>
			<h6 className="text-slate-500">{flight_number}</h6>
			<p>
				<span className="text-slate-500">Date & Time:</span>{" "}
				{dateFormatter(date)} - {time}
			</p>
			<p>
				{" "}
				<span className="text-slate-500">Total cost:</span> {totalPrice}
			</p>
			<p>
				{" "}
				<span className="text-slate-500">Booking date:</span>{" "}
				{dateFormatter(bookingDate)}
			</p>
			<p className="font-semibold">Tickets:</p>
			<ul className="flex gap-1">
				{seatsBooked.map((seat) => (
					<li key={seat._id} className="p-2 bg-blue-500 text-white rounded-md">
						{seat.seatNumber}
					</li>
				))}
			</ul>
		</div>
	);
};

export default BookingCard;
