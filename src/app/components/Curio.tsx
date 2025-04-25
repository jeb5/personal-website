"use client";
import { useContext, useEffect, useRef } from "react";
import CanvasShow from "../../CanvasShow";
import { ThemeContext } from "./ThemeProvider";

export default function Curio() {
	const curioPlaceholderRef = useRef<HTMLDivElement>(null);
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const canvasShowRef = useRef<CanvasShow | null>(null);
	const theme = useContext(ThemeContext).theme;
	useEffect(() => {
		if (!curioPlaceholderRef.current) return;
		if (!canvasRef.current) return;
		canvasShowRef.current = new CanvasShow(canvasRef.current);

		const last = { window: { width: 0, height: 0 }, curio: { width: 0, height: 0, x: 0, y: 0 } };
		const possibleChangeCallback = () => {
			const curioPlaceholder = curioPlaceholderRef.current;
			if (!curioPlaceholder) return;

			const rect = curioPlaceholder.getBoundingClientRect();
			if (last.window.width !== window.innerWidth || last.window.height !== window.innerHeight) {
				last.window = {
					width: window.innerWidth,
					height: window.innerHeight,
				};
				canvasShowRef.current?.setWindowSize(window.innerWidth, window.innerHeight);
			}
			if (last.curio.width !== rect.width || last.curio.height !== rect.height || last.curio.x !== rect.x || last.curio.y !== rect.y) {
				last.curio = {
					width: rect.width,
					height: rect.height,
					x: rect.x,
					y: rect.y,
				};
				canvasShowRef.current?.setCurioPosition(rect.x, rect.y);
				canvasShowRef.current?.setCurioSize(rect.width, rect.height);
			}
		};
		possibleChangeCallback();
		canvasShowRef.current.start();

		window.addEventListener("resize", possibleChangeCallback);
		window.addEventListener("scroll", possibleChangeCallback);

		const mouseMoveCallback = (e: MouseEvent) => {
			if (!canvasShowRef.current) return;
			canvasShowRef.current.setMousePosition(e.clientX, e.clientY);
		};
		window.addEventListener("mousemove", mouseMoveCallback);

		return () => {
			window.removeEventListener("resize", possibleChangeCallback);
			window.removeEventListener("scroll", possibleChangeCallback);
			window.removeEventListener("mousemove", mouseMoveCallback);
		};
	}, [curioPlaceholderRef, canvasRef]);

	useEffect(() => {
		if (!canvasShowRef.current) return;
		canvasShowRef.current.setDarkMode(theme === "dark");
	}, [theme]);

	return (
		<>
			<canvas ref={canvasRef} className="fixed top-0 left-0 -z-10" />
			<div
				ref={curioPlaceholderRef}
				className="hidden mdlg:block w-[250px] h-[250px] min-h-[250px] min-w-[250px] lg:h-[320px] lg:w-[320px] lg:min-h-[320px] lg:min-w-[320px]"
			></div>
		</>
	);
}
