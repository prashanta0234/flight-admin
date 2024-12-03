import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface LoginResponse {
	token: string;
}

interface LoginCredentials {
	email: string;
	password: string;
}

export const authApi = createApi({
	reducerPath: "authApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://flight-server-six.vercel.app/api/",
	}),
	endpoints: (builder) => ({
		login: builder.mutation<LoginResponse, LoginCredentials>({
			query: (credentials) => ({
				url: "/login",
				method: "POST",
				body: credentials,
			}),
			transformResponse: (response: { data: { token: string } }) =>
				response.data,
		}),
	}),
});

export const { useLoginMutation } = authApi;
