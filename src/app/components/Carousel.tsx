"use client";
import { useEffect, useRef, useState } from "react";

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
			threshold: 1.0,
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

	return <div className={className} {...divProps} ref={containerRef}></div>;
}
