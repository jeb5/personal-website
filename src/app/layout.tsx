import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./ThemeProvider";

const rubik = Rubik({
	variable: "--font-rubik",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Jeb Nicholson",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`${rubik.variable} antialiased`}>
			<ThemeProvider>{children}</ThemeProvider>
		</html>
	);
}
