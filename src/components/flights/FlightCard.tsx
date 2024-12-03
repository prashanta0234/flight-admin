import React from "react";
import { dateFormatter } from "../../utils/dateFormatter";

import { Flight } from "../../types/flightsTypes";

const FlightCard = ({ data }: { data: Flight }) => {
	const { airline, flight_number, origin, destination, price, time, date } =
		data;

	return (
		<div className="w-full">
			<div className="max-w-sm bg-white shadow-md rounded-md p-4 flex flex-col gap-2">
				<h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
					{airline}
				</h5>
				<h6 className="text-xl">Flight no: {flight_number}</h6>
				<p>
					Route: <span className="font-semibold">{origin}</span> to{" "}
					<span className="font-semibold">{destination}</span>
				</p>
				<p>
					Price per ticket: <span className="font-semibold">{price}</span>
				</p>
				<p>
					Flying Time: <span className="font-semibold">{time}</span>
				</p>
				<p className="font-normal text-gray-700 dark:text-gray-400">
					Date: <span className="font-semibold">{dateFormatter(date)}</span>
				</p>
			</div>
		</div>
	);
};

export default FlightCard;
