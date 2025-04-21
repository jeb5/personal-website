import React from "react";
export default function Button({
	children,
	className,
	...anchorAttributes
}: Readonly<
	{
		children: React.ReactNode;
		className?: string;
	} & React.AnchorHTMLAttributes<HTMLAnchorElement>
>) {
	return (
		<a className={`rounded-full border-1 text-md flex flex-row items-center px-6 py-1.5 ${className}`} {...anchorAttributes}>
			{children}
		</a>
	);
}
