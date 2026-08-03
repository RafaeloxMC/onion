import { ReactNode } from "react";

function Accent({ children }: { children: ReactNode }) {
	return (
		<span className="text-(--accent) font-(--font-delafield)">
			{children}
		</span>
	);
}

export default Accent;
