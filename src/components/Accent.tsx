import { ReactNode } from "react";

function Accent({ children }: { children: ReactNode }) {
	return (
		<span className="text-(--accent) font-delafield font-extrabold text-5xl not-italic translate-y-2">
			{children}
		</span>
	);
}

export default Accent;
