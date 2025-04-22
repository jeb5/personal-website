import { GoDownload } from "react-icons/go";
import { FaLinkedin, FaGithub } from "react-icons/fa6";

import Button from "./Button";
export default function Hero({ CVURL }: { CVURL: string }) {
	return (
		<div
			id="about"
			className="w-full pb-[80px] px-20 flex flex-row justify-center h-[calc(90vh-100px)] items-center max-h-[700px] min-w-[900px] min-h-[420px]"
		>
			<div className="flex flex-row justify-between w-full max-w-[980px]">
				<div className="pr-25 flex flex-col justify-between grow max-w-[580px]">
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
							<Button className="" href={CVURL} download>
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
				<div id="globe-anchor" className="h-[320px] w-[320px] min-h-[320px] min-w-[320px] bg-neutral-300 rounded-full"></div>
			</div>
		</div>
	);
}
