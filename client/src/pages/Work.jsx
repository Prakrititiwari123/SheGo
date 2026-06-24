import {
	FaCarSide,
	FaClock,
	FaLocationDot,
	FaArrowRight,
	FaArrowDown,
} from "react-icons/fa6";

const steps = [
	{
		number: "01",
		icon: FaArrowDown,
		title: "Download & Sign Up",
		text: "Get the SheGo app from App Store or Google Play. Create your account in seconds with just your email or phone number.",
		image:
			"https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=80",
		imageAlt: "A red car on an open road",
		reverse: false,
	},
	{
		number: "02",
		icon: FaClock,
		title: "Request Your Ride",
		text: "Enter your pickup and destination locations. Choose from available drivers and see the estimated fare before booking.",
		image:
			"https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1400&q=80",
		imageAlt: "A sporty car parked in a garage",
		reverse: true,
	},
	{
		number: "03",
		icon: FaLocationDot,
		title: "Enjoy Your Journey",
		text: "Meet your verified driver, track your journey in real-time, and enjoy a safe, comfortable ride to your destination.",
		image:
			"https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1400&q=80",
		imageAlt: "Women riding in a car",
		reverse: false,
	},
];

const Work = () => {
	return (
		<section className="relative overflow-hidden bg-white text-slate-900">
			<div className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-[radial-gradient(circle_at_top,rgba(244,114,182,0.14),transparent_48%),linear-gradient(180deg,#fff7fb_0%,#ffffff_72%)]" />
			<div className="pointer-events-none absolute -left-24 top-40 h-80 w-80 rounded-full bg-pink-100/30 blur-3xl" />
			<div className="pointer-events-none absolute -right-28 top-136 h-96 w-96 rounded-full bg-pink-200/20 blur-3xl" />

			<div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
				<header className="mx-auto max-w-4xl text-center animate-fade-up" style={{ animationDelay: "0ms" }}>
					<p className="mb-4 inline-flex items-center rounded-full border border-pink-100 bg-pink-50 px-4 py-2 text-xs font-medium text-pink-500 shadow-[0_10px_30px_rgba(244,114,182,0.08)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(244,114,182,0.14)] sm:text-sm">
						Simple, fast, and safe
					</p>
					<h1 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
						Get a <span className="text-pink-500">Ride in 3 Simple Steps</span>
					</h1>
					<p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base lg:text-lg">
						Getting from A to B has never been easier. Follow these simple steps to book your ride.
					</p>
				</header>

				<div className="mt-16 space-y-16 lg:space-y-20">
					{steps.map((step, index) => {
						const Icon = step.icon;
						const entryClass = step.reverse ? "animate-slide-in-right" : "animate-slide-in-left";

						return (
							<article
								key={step.number}
								className={`group grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${step.reverse ? "lg:[&>*:first-child]:order-2" : ""} ${entryClass} animate-lift-on-hover transition duration-500 hover:-translate-y-2 hover:shadow-[0_28px_80px_rgba(15,23,42,0.10)]`}
								style={{ animationDelay: `${120 + index * 180}ms` }}
							>
								<div className={`p-5  relative ${step.reverse ? "lg:order-2" : ""}`}>
									<div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-pink-500 text-3xl font-semibold text-white shadow-[0_18px_40px_rgba(244,114,182,0.28)] transition duration-300 group-hover:scale-105 group-hover:rotate-[-4deg] motion-safe:animate-float">
										{step.number}
									</div>
									<div className="mb-5 flex items-center gap-4">
										<div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-50 text-pink-500 shadow-[0_10px_24px_rgba(244,114,182,0.12)] transition duration-300 group-hover:rotate-6 group-hover:bg-pink-100">
											<Icon className="text-2xl" />
										</div>
										<h2 className="text-2xl font-semibold tracking-tight text-slate-950 transition duration-300 group-hover:translate-x-0.5 sm:text-3xl">
											{step.title}
										</h2>
									</div>
									<p className="max-w-xl text-sm leading-8 text-slate-600 transition duration-300 group-hover:text-slate-700 sm:text-base">
										{step.text}
									</p>

									<div className="mt-8 flex gap-4 transition duration-300 group-hover:translate-x-1">
										<div className="h-1 w-14 rounded-full bg-pink-400/80 transition-all duration-300 group-hover:w-16" />
										<div className="h-1 w-8 rounded-full bg-pink-300/70 transition-all duration-300 group-hover:w-10" />
										<div className="h-1 w-6 rounded-full bg-pink-200/70 transition-all duration-300 group-hover:w-8" />
									</div>
								</div>

								<div className={`relative ${step.reverse ? "lg:order-1" : ""}`}>
									<div className="relative overflow-hidden rounded-4xl shadow-[0_24px_70px_rgba(15,23,42,0.12)] transition duration-500 group-hover:scale-[1.01] group-hover:-translate-y-1 group-hover:shadow-[0_30px_80px_rgba(15,23,42,0.16)]">
										<img
											src={step.image}
											alt={step.imageAlt}
											className="h-80 w-full object-cover transition duration-700 group-hover:scale-[1.06] sm:h-100"
										/>
										<div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.04)_45%,rgba(244,114,182,0.16)_100%)] transition duration-500 group-hover:bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.02)_40%,rgba(244,114,182,0.24)_100%)]" />
									</div>

									<div className={`absolute bottom-[-1.35rem] ${step.reverse ? "left-90" : "right-6"} rounded-3xl border border-slate-100 bg-white px-5 py-4 shadow-[0_18px_45px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(15,23,42,0.12)] motion-safe:animate-fade-up`} style={{ animationDelay: `${260 + index * 180}ms` }}>
										<div className="flex items-center gap-4">
											<div className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-500 text-white text-lg font-semibold transition duration-300 group-hover:scale-105">
												{step.number.slice(1)}
											</div>
											<div>
												<p className="text-xs text-slate-500">Step {step.number.slice(1)}</p>
												<p className="text-sm font-semibold text-slate-950">Easy & Quick</p>
											</div>
										</div>
									</div>
								</div>
							</article>
						);
					})}
				</div>

				<div className="mt-20 flex justify-center">
					<a
							href="/download"
							className="group inline-flex items-center gap-2 rounded-full bg-pink-500 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_18px_50px_rgba(244,114,182,0.28)] transition duration-300 hover:scale-[1.02] hover:-translate-y-0.5 hover:bg-pink-600 sm:px-8 sm:py-4 sm:text-base"
					>
						Get the App
						<FaArrowRight className="text-sm transition duration-300 group-hover:translate-x-0.5 sm:text-base" />
					</a>
				</div>
			</div>
		</section>
	);
};

export default Work;
