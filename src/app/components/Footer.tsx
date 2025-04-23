export default function Footer() {
	return (
		<footer className="flex flex-row justify-center p-8 xsm:mt-30">
			<div className="flex grow flex-row justify-between text-sm opacity-80">
				<p>{`© ${new Date().getFullYear()} Jeb Nicholson`}</p>
				<p>
					Icons by{" "}
					<a href="https://icons8.com" className="underline">
						Icons8
					</a>
				</p>
			</div>
		</footer>
	);
}
