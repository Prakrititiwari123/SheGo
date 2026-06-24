import {
	FaCarSide,
	FaClock,
	FaMoneyBillWave,
	FaHeadset,
	FaCreditCard,
	FaLocationDot,
	FaArrowRight,
} from "react-icons/fa6";

const features = [
	{
		icon: FaCarSide,
		title: "Wide Network of Drivers",
		text: "Access thousands of professional, verified drivers ready to take you anywhere in the city.",
	},
	{
		icon: FaClock,
		title: "Instant Booking",
		text: "Book your perfect ride in seconds with our streamlined process. Your ride is just a tap away.",
	},
	{
		icon: FaMoneyBillWave,
		title: "Affordable Pricing",
		text: "Transparent pricing with no hidden fees. Get the best rates and exclusive deals on every ride.",
	},
	{
		icon: FaHeadset,
		title: "24/7 Customer Support",
		text: "Our dedicated support team is always ready to assist you, anytime, anywhere.",
	},
	{
		icon: FaCreditCard,
		title: "Easy Payment Options",
		text: "Multiple secure payment methods including cards, digital wallets, and cash.",
	},
	{
		icon: FaLocationDot,
		title: "Real-time Tracking",
		text: "Track your driver in real-time with integrated GPS and navigation features.",
	},
];

const Features = () => {
	return (
		<section className="relative overflow-hidden bg-white text-slate-900">
			<div className="pointer-events-none absolute inset-x-0 top-0 h-90 bg-[radial-gradient(circle_at_top,rgba(244,114,182,0.14),transparent_50%),linear-gradient(180deg,#fff6fa_0%,#ffffff_70%)]" />

			<div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
				<header className="mx-auto max-w-4xl text-center">
					<p className="mb-4 inline-flex items-center rounded-full border border-pink-100 bg-pink-50 px-3.5 py-1.5 text-xs font-medium text-pink-500 shadow-[0_10px_30px_rgba(244,114,182,0.08)] sm:text-sm">
						Built for smoother, safer travel
					</p>
					<h1 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
						Why Choose <span className="text-pink-500">SheGo?</span>
					</h1>
					<p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
						Experience the future of transportation with features designed for your convenience and safety.
					</p>
				</header>

				<div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
					{features.map((feature, index) => {
						const Icon = feature.icon;

						return (
							<article
								key={feature.title}
								className="group relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_12px_40px_rgba(15,23,42,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_55px_rgba(15,23,42,0.08)]"
								style={{ animationDelay: `${120 + index * 70}ms` }}
							>
								<div className="absolute inset-y-0 left-0 w-1 bg-pink-500 opacity-70 transition duration-300 group-hover:opacity-100" />
								<div className="mb-5 flex h-16 w-16 items-center justify-center rounded-[1.1rem] bg-pink-500 text-white shadow-[0_16px_36px_rgba(244,114,182,0.25)] transition duration-300 group-hover:scale-105 group-hover:rotate-[-4deg]">
									<Icon className="text-2xl" />
								</div>
								<h2 className="text-xl font-semibold tracking-tight text-slate-950 sm:text-[1.35rem]">
									{feature.title}
								</h2>
								<p className="mt-4 max-w-sm text-xs leading-7 text-slate-600 sm:text-sm">
									{feature.text}
								</p>
							</article>
						);
					})}
				</div>

				<div className="mt-14 flex justify-center">
					<a
						href="#"
						className="inline-flex items-center gap-2 rounded-full bg-pink-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_50px_rgba(244,114,182,0.28)] transition duration-300 hover:scale-[1.02] hover:bg-pink-600 sm:px-7 sm:py-3.5 sm:text-base"
					>
						Explore All Features
						<FaArrowRight className="text-sm sm:text-base" />
					</a>
				</div>
			</div>
		</section>
	);
};

export default Features;
