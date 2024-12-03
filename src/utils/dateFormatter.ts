export const dateFormatter = (data: string): string => {
	const date = new Date(data);

	const options: Intl.DateTimeFormatOptions = {
		weekday: "short",
		day: "numeric",
		month: "short",
		year: "numeric",
	};

	const formattedDate = date.toLocaleDateString("en-US", options);

	return formattedDate;
};
