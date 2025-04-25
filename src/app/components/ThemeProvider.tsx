"use client";
import { createContext, useEffect, useState } from "react";

const isServer = typeof window === "undefined";

type theme = "light" | "dark";
export const ThemeContext = createContext({
	theme: "dark" as theme,
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	setTheme: (Theme: theme) => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
	const [forcedMode, setForcedMode] = useState<theme | null>(null); // null = not forced
	const [browserMode, setBrowserMode] = useState<theme>("light"); // what the browser wants
	useEffect(() => {
		if (isServer) return;
		const forced = !!localStorage.getItem("theme");
		if (forced) {
			setForcedMode(localStorage.getItem("theme") as theme);
			return;
		}
		if (!window.matchMedia) return;

		const darkModePreference = window.matchMedia("(prefers-color-scheme: dark)");
		if (darkModePreference.matches) setBrowserMode("dark");
		darkModePreference.addEventListener("change", (e) => {
			if (e.matches) setBrowserMode("dark");
			else setBrowserMode("light");
		});
	}, []);

	const setTheme = (theme: theme) => {
		setForcedMode(theme);
		localStorage.setItem("theme", theme);
	};

	useEffect(() => {
		if (forcedMode) {
			document.body.setAttribute("data-theme", forcedMode);
		}
	}, [forcedMode, browserMode]);

	const currentTheme = forcedMode || browserMode;

	return <ThemeContext.Provider value={{ theme: currentTheme, setTheme }}>{children}</ThemeContext.Provider>;
};
