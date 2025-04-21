"use client";

import { useContext, useEffect, useState } from "react";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { ThemeContext } from "./ThemeProvider";

export default function ThemeToggle() {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useContext(ThemeContext);
	useEffect(() => setMounted(true), []);
	if (!mounted) return <MdOutlineLightMode className="text-2xl" />;
	else {
		return (
			<button
				className="text-2xl"
				onClick={() => {
					if (theme === "dark") setTheme("light");
					else setTheme("dark");
				}}
			>
				{theme === "dark" ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}
			</button>
		);
	}
}
