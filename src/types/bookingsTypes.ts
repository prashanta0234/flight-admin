export type SelectedSeatsState = {
	flightId: string | undefined;
	seatIds: string[];
};

type Seat = {
	_id: string;
	seatNumber: string;
};

type FlightDetails = {
	_id: string;
	airline: string;
	flight_number: string;
	destination: string;
	date: string;
	time: string;
	price: number;
};

export type Booking = {
	_id: string;
	userId: string;
	flightId: FlightDetails;
	numberOfSeats: number;
	totalPrice: number;
	bookingStatus: "Confirmed" | "Pending" | "Cancelled";
	seatsBooked: Seat[];
	paymentStatus: "Paid" | "Unpaid" | "Refunded";
	cancellationDate: string | null;
	bookingDate: string;
	createdAt: string;
	updatedAt: string;
	__v: number;
};
