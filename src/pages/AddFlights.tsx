import React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import flightSchema, {
	FlightFormValues,
} from "../validation-schemas/addFlightsSchema";
import { convertTo12HourFormat } from "../utils/timeConverter";
import { useCreateFlightMutation } from "../rtk/api/flights";
import { toast } from "sonner";
import { structureError } from "../utils/structureError";
import { Button } from "flowbite-react";
import { useNavigate } from "react-router-dom";

const AddFlights = () => {
	const {
		control,
		handleSubmit,
		register,
		formState: { errors },
	} = useForm<FlightFormValues>({
		resolver: zodResolver(flightSchema),
		defaultValues: {
			airline: "",
			flight_number: "",
			origin: "",
			destination: "",
			date: "",
			time: "",
			price: 0,
			seats: [],
		},
		mode: "onSubmit",
	});

	const [createFlight, { isError, error, isLoading, data }] =
		useCreateFlightMutation();
	const navigate = useNavigate();

	const onSubmit = (data: FlightFormValues) => {
		const seatsArray =
			typeof data.seats === "string"
				? data.seats.split(",").map((seat: string) => seat.trim())
				: data.seats;
		const pressTime = convertTo12HourFormat(data.time);

		const processedData = {
			...data,
			price: Number(data.price),
			seats: seatsArray,
			time: pressTime,
		};
		createFlight(processedData);

		console.log("Flight Data Submitted: ", processedData);
	};

	if (error) {
		const e = structureError(error);
		toast.error(e.message);
	}

	if (data) {
		toast.success("Flight added successful");
		navigate("/flights");
	}

	return (
		<div className="max-w-lg mx-auto p-4 bg-gray-100 rounded shadow-md">
			<h1 className="text-xl font-bold mb-4">Add a Flight</h1>
			<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
				<div>
					<label className="block font-semibold">Airline</label>
					<input
						type="text"
						{...register("airline")}
						className="w-full p-2 border rounded"
						placeholder="Enter airline name"
					/>
					{errors.airline && (
						<p className="text-red-500 text-sm">{errors.airline.message}</p>
					)}
				</div>

				<div>
					<label className="block font-semibold">Flight Number</label>
					<input
						type="text"
						{...register("flight_number")}
						className="w-full p-2 border rounded"
						placeholder="Enter flight number"
					/>
					{errors.flight_number && (
						<p className="text-red-500 text-sm">
							{errors.flight_number.message}
						</p>
					)}
				</div>

				<div>
					<label className="block font-semibold">Origin</label>
					<input
						type="text"
						{...register("origin")}
						className="w-full p-2 border rounded"
						placeholder="Enter origin"
					/>
					{errors.origin && (
						<p className="text-red-500 text-sm">{errors.origin.message}</p>
					)}
				</div>

				<div>
					<label className="block font-semibold">Destination</label>
					<input
						type="text"
						{...register("destination")}
						className="w-full p-2 border rounded"
						placeholder="Enter destination"
					/>
					{errors.destination && (
						<p className="text-red-500 text-sm">{errors.destination.message}</p>
					)}
				</div>

				<div>
					<label className="block font-semibold">Date</label>
					<input
						type="date"
						{...register("date")}
						className="w-full p-2 border rounded"
					/>
					{errors.date && (
						<p className="text-red-500 text-sm">{errors.date.message}</p>
					)}
				</div>

				<div>
					<label className="block font-semibold">Time</label>
					<input
						type="time"
						{...register("time")}
						className="w-full p-2 border rounded"
					/>
					{errors.time && (
						<p className="text-red-500 text-sm">{errors.time.message}</p>
					)}
				</div>

				<div>
					<label className="block font-semibold">Price</label>
					<input
						type="number"
						{...register("price", { valueAsNumber: true })}
						className="w-full p-2 border rounded"
						placeholder="Enter price"
					/>
					{errors.price && (
						<p className="text-red-500 text-sm">{errors.price.message}</p>
					)}
				</div>

				<div>
					<label className="block font-semibold">Seats</label>
					<Controller
						control={control}
						name="seats"
						render={({ field }) => (
							<textarea
								{...field}
								className="w-full p-2 border rounded"
								placeholder="Enter seats, comma-separated (e.g., 1A, 1B, 2A)"
							/>
						)}
					/>
					{errors.seats && (
						<p className="text-red-500 text-sm">{errors.seats.message}</p>
					)}

					{errors.seats && (
						<p className="text-red-500 text-sm">{errors.seats.message}</p>
					)}
				</div>

				<Button
					type="submit"
					className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
					disabled={isLoading}
				>
					Add Flight
				</Button>
			</form>
		</div>
	);
};

export default AddFlights;
