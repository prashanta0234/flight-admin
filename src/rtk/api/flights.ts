import { Flight, FlightData } from "../../types/flightsTypes";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { FlightFormValues } from "../../validation-schemas/addFlightsSchema";
import Cookies from "js-cookie";

export const flightsApi = createApi({
	reducerPath: "flightsApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://flight-server-six.vercel.app/api/",
		prepareHeaders: (headers) => {
			const token = Cookies.get("user-token");

			if (token) {
				headers.set("Authorization", `Bearer ${token}`);
			}

			return headers;
		},
	}),
	tagTypes: ["Flight"],

	endpoints: (builder) => ({
		getFlights: builder.query<Flight[], void>({
			query: () => `/flights`,
			transformResponse: (response: { data: { flights: Flight[] } }) =>
				response.data.flights,
		}),

		getFlight: builder.query<FlightData, string>({
			query: (id) => `/flights/${id}`,
			transformResponse: (response: { data: FlightData }) => response.data,
			providesTags: ["Flight"],
		}),

		createFlight: builder.mutation<FlightData, FlightFormValues>({
			query: (newFlight) => ({
				url: `/flights`,
				method: "POST",
				body: newFlight,
			}),
			invalidatesTags: ["Flight"],
			transformResponse: (response: { data: FlightData }) => response.data,
		}),
	}),
});

export const {
	useGetFlightsQuery,
	useGetFlightQuery,
	useCreateFlightMutation,
} = flightsApi;
