import { promises as fs } from "fs";
import Project from "./Project";
import Carousel from "./Carousel";

type Project = {
	name: string;
	description: string;
	links: {
		type: string;
		url: string;
	}[];
	image: string;
	technologies_used: string[];
};
type ProjectsFile = {
	projects: {
		main: Project[];
		other: Project[];
	};
	technologies: {
		[id: string]: {
			name: string;
			icon: string;
		};
	};
};

export default async function Projects() {
	const projects_file = await fs.readFile(process.cwd() + "/content/projects.json", "utf-8");
	const projects_parsed: ProjectsFile = JSON.parse(projects_file);

	const flattenTech = (projects: Project[]) =>
		projects.map((project) => ({
			...project,
			technologies_used: project.technologies_used.map((technology) => projects_parsed.technologies[technology]),
		}));

	const main_projects = flattenTech(projects_parsed.projects.main);
	const other_projects = flattenTech(projects_parsed.projects.other);

	return (
		<section className="flex flex-row justify-center px-10 sm:px-20 mb-10" id="projects">
			<div className="max-w-[1000px] overflow-hidden">
				<div className="flex flex-row w-full items-center">
					<h3 className="text-md mr-5">Projects</h3>
					<hr className="h-[1px] grow bg-neutral-700" />
				</div>
				{/* <div className="flex flex-row h-[400px] gap-6 mt-8 mb-12 overflow-x-scroll">
					{main_projects.map((project) => (
						<div className="h-full flex-1 min-w-[290px]" key={project.name}>
							<Project {...project} />
						</div>
					))}
				</div> */}
				<Carousel className="flex flex-row h-[320px] xsm:h-[410px] gap-6 mt-8 scroll-smooth mb-12 snap-x">
					{main_projects.map((project, index) => (
						<div
							className={`h-full flex-1 min-w-[250px] lg:min-w-[230px] xsm:min-w-[290px] lg:grow snap-center xsm:snap-start ${
								index == 0 ? "first-el" : index == main_projects.length - 1 ? "last-el" : ""
							}`}
							key={project.name}
						>
							<Project {...project} />
						</div>
					))}
				</Carousel>
				<div className="flex flex-row w-full items-center">
					<h3 className="text-md mr-5">More</h3>
					<hr className="h-[1px] grow bg-neutral-700" />
				</div>
				<Carousel className="flex flex-row h-[240px] xsm:h-[300px] gap-[24px] mt-8 snap-x scroll-smooth">
					{other_projects.map((project, index) => (
						<div
							className={`h-full flex-1 min-w-[190px] xsm:min-w-[220px] snap-center xsm:snap-start ${
								index == 0 ? "first-el" : index == other_projects.length - 1 ? "last-el" : ""
							}`}
							key={project.name}
						>
							<Project {...project} />
						</div>
					))}
				</Carousel>
			</div>
		</section>
	);
}
