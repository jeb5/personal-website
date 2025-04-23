import Image from "next/image";
import { FaGithub } from "react-icons/fa6";
import { HiOutlineExternalLink } from "react-icons/hi";
import { IoExtensionPuzzle } from "react-icons/io5";

type ProjectProps = {
	name: string;
	description: string;
	links: {
		type: string;
		url: string;
	}[];
	image: string;
	technologies_used: {
		name: string;
		icon: string;
	}[];
};

const linkIcons = {
	github: FaGithub,
	external: HiOutlineExternalLink,
	addon: IoExtensionPuzzle,
};

export default function Project(props: ProjectProps) {
	const links = props.links.map((link) => {
		const Icon = linkIcons[link.type as keyof typeof linkIcons];
		return (
			<a href={link.url} target="_blank" rel="noopener" key={link.type} className="text-2xl cursor-pointer ml-2" aria-label={link.type}>
				<Icon className="h-5 w-5" aria-hidden />
			</a>
		);
	});

	return (
		<div className="h-full w-full grid grid-rows-[34%_auto_1fr_auto] xsm:grid-rows-[48%_auto_1fr_auto] border rounded-xl overflow-hidden">
			<div className="relative">
				<Image src={props.image} alt={props.name} className="object-cover" fill={true} />
			</div>
			<div className="mx-3 mt-1.5 xsm:mt-3 flex flex-row items-start justify-between">
				<h4 className="xsm:text-lg text-[1.08rem] leading-[130%] font-semibold">{props.name}</h4>
				<div className="flex flex-row">{...links}</div>
			</div>
			<p className="text-[0.75rem] xsm:text-sm overflow-y-hidden no-scrollbar mx-3 mt-1 xsm:mt-2">{props.description}</p>
			<div className="flex flex-row p-3">
				{props.technologies_used.map((technology) => (
					<div className="flex select-none flex-row items-center mr-1" key={technology.name} title={technology.name}>
						<Image src={technology.icon} alt={technology.name} className="mr-1" width={25} height={25} unoptimized={true} />
					</div>
				))}
			</div>
		</div>
	);
}
