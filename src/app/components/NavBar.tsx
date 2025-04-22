"use client";
import ThemeToggle from "./ThemeToggle";

export default function NavBar({ CVURL }: { CVURL: string }) {
	const scrollToId = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};
	return (
		<header className="flex flex-row justify-between p-8 sticky top-0 z-10">
			<ThemeToggle />
			<nav>
				<ul className="flex flex-row gap-4">
					<li>
						<button className="cursor-pointer" onClick={() => scrollToId("about")}>
							About
						</button>
					</li>
					<div className="h-6 w-[1px] bg-gray-500" />
					<li>
						<button className="cursor-pointer" onClick={() => scrollToId("projects")}>
							Projects
						</button>
					</li>
					<div className="h-6 w-[1px] bg-gray-500" />
					<li>
						<a href={CVURL} download>
							CV
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}
