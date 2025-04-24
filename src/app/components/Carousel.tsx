"use client";
import { useEffect, useRef, useState } from "react";
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";

export default function Carousel(props: React.HTMLProps<HTMLDivElement>) {
	let { className, ...divProps } = props;
	const containerRef = useRef<HTMLDivElement>(null);
	const [firstVisible, setFirstVisible] = useState(false);
	const [lastVisible, setLastVisible] = useState(false);

	const handleIntersection = (entries: IntersectionObserverEntry[]) => {
		entries.forEach((entry) => {
			if (entry.target.classList.contains("first-el")) setFirstVisible(entry.isIntersecting);
			if (entry.target.classList.contains("last-el")) setLastVisible(entry.isIntersecting);
		});
	};

	useEffect(() => {
		if (!containerRef.current) return;
		const observer = new IntersectionObserver(handleIntersection, {
			threshold: 0.9,
			root: containerRef.current,
		});
		for (const child of containerRef.current.children) {
			observer.observe(child);
		}
		return () => observer.disconnect();
	}, [containerRef]);

	if (!lastVisible && !firstVisible) className = `${className} fade-both-edges`;
	else if (!firstVisible) className = `${className} fade-left-edge`;
	else if (!lastVisible) className = `${className} fade-right-edge`;
	className = `${className} overflow-x-scroll no-scrollbar`;

	return (
		<div className="relative">
			{!firstVisible && (
				<FaChevronLeft
					className="absolute left-0 top-1/2 -translate-y-1/2 text-3xl opacity-50 hover:opacity-100 transition-opacity cursor-pointer z-10"
					aria-hidden="true"
					onClick={() =>
						containerRef.current?.scrollBy({
							left: -containerRef.current.scrollWidth / containerRef.current.children.length,
							behavior: "smooth",
						})
					}
				/>
			)}
			<div className={className} {...divProps} ref={containerRef} />
			{!lastVisible && (
				<FaChevronRight
					className="absolute right-0 top-1/2 -translate-y-1/2 text-3xl opacity-50 hover:opacity-100 transition-opacity cursor-pointer z-10"
					aria-hidden="true"
					onClick={() =>
						containerRef.current?.scrollBy({
							left: containerRef.current.scrollWidth / containerRef.current.children.length,
							behavior: "smooth",
						})
					}
				/>
			)}
		</div>
	);
}
