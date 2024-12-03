import { z } from "zod";

const flightSchema = z.object({
	airline: z.string(),
	flight_number: z.string(),
	origin: z.string(),
	destination: z.string(),
	date: z.string(),
	time: z.string(),
	price: z.number(),
	seats: z.union([z.string(), z.array(z.string())]), // Accept string or array
});

export type FlightFormValues = z.infer<typeof flightSchema>;
export default flightSchema;
