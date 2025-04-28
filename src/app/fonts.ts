import localFont from "next/font/local";

export const montserrat = localFont({
	src: [
		{
			path: "./fonts/Montserrat-Light.woff2",
			weight: "300",
			style: "normal",
		},
		{
			path: "./fonts/Montserrat-Regular.woff2",
			weight: "400",
			style: "normal",
		},
		{
			path: "./fonts/Montserrat-Medium.woff2",
			weight: "500",
			style: "normal",
		},
		{
			path: "./fonts/Montserrat-SemiBold.woff2",
			weight: "600",
			style: "normal",
		},
		{
			path: "./fonts/Montserrat-Bold.woff2",
			weight: "700",
			style: "normal",
		},
	],
});
