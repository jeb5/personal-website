import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Projects from "./components/Projects";

const CVURL = "Jeb CV.pdf";

export default function Home() {
	return (
		<body>
			<Header CVURL={CVURL} />
			<Hero CVURL={CVURL} />
			<Projects />
			<Footer />
		</body>
	);
}
