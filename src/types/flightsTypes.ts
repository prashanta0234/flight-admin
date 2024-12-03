export type Flight = {
	_id: string;
	airline: string;
	flight_number: string;
	origin: string;
	destination: string;
	date: string;
	time: string;
	price: number;
	availability: boolean;
};

export type FlightsResponse = {
	flights: Flight[];
};

export type Seat = {
	_id: string;
	seatNumber: string;
	isBooked: boolean;
	bookedBy: string | null;
	flightId: string;
};

export type FlightData = {
	flight: Flight;
	seats: Seat[];
};
