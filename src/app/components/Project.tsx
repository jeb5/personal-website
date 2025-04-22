import Image from "next/image";

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

export default function Project(props: ProjectProps) {
	return (
		<div className="h-full w-full grid grid-rows-[48%_auto_1fr_auto] border rounded-xl overflow-hidden">
			<div className="relative">
				<Image src={props.image} alt={props.name} className="object-cover" fill={true} />
			</div>
			<h4 className="text-lg leading-[130%] font-semibold mx-3 mt-3">{props.name}</h4>
			<p className="text-sm overflow-y-scroll no-scrollbar mx-3 mt-2">{props.description}</p>
			<div className="flex flex-row p-3">
				{props.technologies_used.map((technology) => (
					<div className="flex flex-row items-center mr-1" key={technology.name} title={technology.name}>
						<Image src={technology.icon} alt={technology.name} className="mr-1" width={25} height={25} unoptimized={true} />
					</div>
				))}
			</div>
		</div>
	);
}
