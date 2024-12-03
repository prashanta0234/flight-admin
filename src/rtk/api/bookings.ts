import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";
import { Booking } from "../../types/bookingsTypes";

export const bookingApi = createApi({
	reducerPath: "bookingApi",
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
	tagTypes: ["Flight", "Booking"],

	endpoints: (builder) => ({
		userBookings: builder.query<Booking[], void>({
			query: () => {
				return `/bookings`;
			},
			transformResponse: (response: { data: Booking[] }) => response.data,
			providesTags: ["Booking"],
		}),
	}),
});

export const { useUserBookingsQuery } = bookingApi;
