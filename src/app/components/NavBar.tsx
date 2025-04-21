import ThemeToggle from "../ThemeToggle";

export default function NavBar() {
	// Seperators are h-6, width 1px
	return (
		<header className="flex flex-row justify-between p-8">
			<ThemeToggle />
			<nav>
				<ul className="flex flex-row gap-4">
					<li>
						<div>About</div>
					</li>
					<div className="h-6 w-[1px] bg-gray-500" />
					<li>
						<div>Projects</div>
					</li>
					<div className="h-6 w-[1px] bg-gray-500" />
					<li>
						<div>CV</div>
					</li>
				</ul>
			</nav>
		</header>
	);
}
