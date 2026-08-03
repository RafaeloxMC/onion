import type { Metadata } from "next";
import { Geist, Geist_Mono, Mrs_Saint_Delafield } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

const mrsSaintDelafield = Mrs_Saint_Delafield({
	variable: "--mrs-saint-delafield",
	weight: "400",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Onion YSWS",
	description: "Ship a privacy-focused project, get privacy things!",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={`${geistSans.variable} ${geistMono.variable} ${mrsSaintDelafield.variable} h-full antialiased`}
		>
			<body className="min-h-full flex flex-col">{children}</body>
		</html>
	);
}
