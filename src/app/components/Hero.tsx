import { GoDownload } from "react-icons/go";
import { FaLinkedin, FaGithub } from "react-icons/fa6";

import Button from "./Button";
export default function Hero() {
	return (
		<div className="w-full px-20 py-20 flex justify-center">
			<div className="flex flex-row justify-between">
				<div className="pr-25 flex flex-col justify-between">
					<div>
						<h1 className="text-4xl font-medium mb-4 mt-4">Jeb Nicholson</h1>
						<div className="text-lg">
							<p className="pb-4">Software Engineer, Full-stack Web Developer</p>
							<p>
								BSc Computer Science at The University of Otago
								<br />
								Currently working towards an Honours degree
							</p>
						</div>
					</div>
					<div className="flex flex-row justify-between items-end mt-4 mb-4">
						<div className="flex flex-row gap-4">
							<Button
								className=""
								href="https://images.pexels.com/photos/1319515/pexels-photo-1319515.jpeg?cs=srgb&dl=pexels-magda-ehlers-pexels-1319515.jpg&fm=jpg"
								download
							>
								CV <GoDownload className="ml-2" />
							</Button>
							<Button href="mailto:contact@jebnicholson.com">Email me</Button>
						</div>
						<div className="flex flex-row gap-4 mb-1 text-3xl opacity-85">
							<a href="https://github.com/jeb5" target="_blank" rel="noopener">
								<FaGithub />
							</a>
							<a href="https://www.linkedin.com/in/jeb5/" target="_blank" rel="noopener">
								<FaLinkedin />
							</a>
						</div>
					</div>
				</div>
				<div id="globe-anchor" className="h-[320px] w-[320px] bg-neutral-300 rounded-full"></div>
			</div>
		</div>
	);
}
