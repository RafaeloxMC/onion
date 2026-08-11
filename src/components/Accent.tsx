import { ReactNode } from "react";

function Accent({ children }: { children: ReactNode }) {
	return (
		<span
			style={{
				color: "var(--accent)",
				fontFamily: "var(--font-delafield)",
			}}
		>
			{children}
		</span>
	);
}

export default Accent;
