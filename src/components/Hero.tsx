import Accent from "./Accent";

function Hero() {
	return (
		<div className="flex flex-col items-center gap-6 my-8">
			<h1 className="flex flex-row gap-4">
				Welcome to <Accent>Onion Ysws</Accent>
			</h1>
			<span className="text-xs italic opacity-50">
				Ship a project that makes every-day privacy easier, get cool
				prizes!
			</span>
		</div>
	);
}

export default Hero;
