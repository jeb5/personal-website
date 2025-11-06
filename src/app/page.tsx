import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Projects from "./components/Projects";

const RESUME_URL = "Jeb Nicholson Resume.pdf";

export default function Home() {
  return (
    <body>
      <Header RESUME_URL={RESUME_URL} />
      <Hero RESUME_URL={RESUME_URL} />
      <Projects />
      <Footer />
    </body>
  );
}
