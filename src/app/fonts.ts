import localFont from "next/font/local";

export const poppins = localFont({
	src: [
		{
			path: "./fonts/Poppins-Light.woff2",
			weight: "300",
			style: "normal",
		},
		{
			path: "./fonts/Poppins-Regular.woff2",
			weight: "400",
			style: "normal",
		},
		{
			path: "./fonts/Poppins-Medium.woff2",
			weight: "500",
			style: "normal",
		},
		{
			path: "./fonts/Poppins-SemiBold.woff2",
			weight: "600",
			style: "normal",
		},
		{
			path: "./fonts/Poppins-Bold.woff2",
			weight: "700",
			style: "normal",
		},
	],
});
