import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

import Footer from "@/_components/footer/footer";
import Header from "@/_components/header/header";

// Get meta data from relevant persons
export const metadata: Metadata = {
	title: "Click Job AI",
	description: "Find jobs in many industries and more!!",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${GeistSans.variable} max-w-screen-2xl mx-auto`}>
				<Header />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
