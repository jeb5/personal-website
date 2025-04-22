import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";

const CVURL = "https://images.pexels.com/photos/1319515/pexels-photo-1319515.jpeg?cs=srgb&dl=pexels-magda-ehlers-pexels-1319515.jpg&fm=jpg";

export default function Home() {
	return (
		<body>
			<NavBar CVURL={CVURL} />
			<Hero CVURL={CVURL} />
			<Projects />
		</body>
	);
}
