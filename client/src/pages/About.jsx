import {
	FaArrowUp,
	FaBullseye,
	FaCarSide,
	FaHeart,
	FaMedal,
	FaQuoteLeft,
	FaUsers,
} from "react-icons/fa6";
import { HiOutlineSparkles } from "react-icons/hi2";

const storySteps = [
	{
		number: "1",
		title: "The Reality We Faced",
		text: "SheGO Rides was founded by a South African woman who, like millions of others across the country, experienced firsthand the deep-rooted crisis of women's safety. South Africa consistently ranks among the highest in the world for gender-based violence, harassment, and crime against women — a reality that affects even the most ordinary aspects of daily life, including the simple act of travelling from one place to another.",
	},
	{
		number: "2",
		title: "Stories That Demanded Change",
		text: "For years, she listened to stories from friends, family members, and colleagues who shared their fears about using public transport or ride-hailing services. Many women had endured uncomfortable, intimidating, or even dangerous encounters during their journeys. These were not isolated incidents — they were part of a national pattern. The founder realised that traditional transport solutions were not designed with women's safety as the priority. Something urgently needed to change.",
	},
	{
		number: "3",
		title: "A Vision Takes Shape",
		text: "Motivated by this reality, she envisioned a service built entirely around women's lived experiences. SheGO was born from a commitment to create a secure, empowering, and reliable alternative — a ride-hailing platform designed by women, for women. Her mission was not only to protect women during transit but to give them the dignity, peace of mind, and control they deserve.",
	},
];

const values = [
	{
		icon: FaBullseye,
		title: "Mission",
		text: "To provide safe, reliable, and affordable transportation to everyone, everywhere, while making everyday commutes easier and more convenient.",
	},
	{
		icon: FaCarSide,
		title: "Innovation",
		text: "We continuously refine the platform to deliver a better experience with thoughtful features, stronger safety, and practical technology.",
	},
	{
		icon: FaMedal,
		title: "Excellence",
		text: "We aim for consistently excellent service so passengers and drivers both enjoy a trusted, seamless, and high-quality experience.",
	},
	{
		icon: FaUsers,
		title: "Community",
		text: "We believe in building a strong community of drivers and riders who trust, support, and uplift one another.",
	},
];

const About = () => {
	return (
		<div className="relative overflow-hidden bg-white text-slate-900">
			<div className="pointer-events-none absolute inset-x-0 top-0 h-107.5 bg-[radial-gradient(circle_at_top,rgba(244,114,182,0.20),transparent_45%),linear-gradient(180deg,#fff4f9_0%,#fff8fb_58%,rgba(255,255,255,0)_100%)]" />
			<div className="pointer-events-none absolute -left-24 top-72 h-72 w-72 rounded-full bg-pink-200/35 blur-3xl" />
			<div className="pointer-events-none absolute -right-32 top-176 h-96 w-96 rounded-full bg-pink-100/45 blur-3xl" />

			<section className="relative  mx-auto flex min-h-[34vh] bg-pink-100 flex-col items-center justify-center px-6 py-14 text-center sm:px-8 lg:px-12">
				<div className="mb-5 inline-flex items-center gap-3 rounded-full border border-pink-200/80 bg-white/85 px-5 py-2 text-sm font-medium text-pink-500 shadow-[0_8px_24px_rgba(244,114,182,0.10)] backdrop-blur animate-fade-up" style={{ animationDelay: "0ms" }}>
					<HiOutlineSparkles className="text-base" />
					<span>Our story, safety, and purpose</span>
				</div>

				<h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-[4.2rem] lg:leading-[1.02] animate-fade-up" style={{ animationDelay: "110ms" }}>
					About <span className="text-pink-500">SheGo</span>
				</h1>

				<p className="mt-6 max-w-4xl text-base leading-7 text-slate-600 sm:text-lg lg:text-[1.08rem] animate-fade-up" style={{ animationDelay: "220ms" }}>
					We are rethinking urban mobility with a ride-hailing platform that places women’s safety, comfort, and confidence at the center of every journey.
				</p>
			</section>

			<section id="story" className="relative mt-15 mx-auto px-6 pb-24 sm:px-8 lg:px-12 lg:pb-28">
				<div className="mb-10 flex justify-center">
					<div className="inline-flex items-center gap-3 rounded-full bg-pink-50 px-5 py-3 text-pink-500 shadow-[0_10px_30px_rgba(244,114,182,0.08)] animate-fade-up" style={{ animationDelay: "40ms" }}>
						<FaHeart className="text-base" />
						<span className="text-sm  font-medium">Our Beginning</span>
					</div>
				</div>

				<div className="text-center animate-fade-up" style={{ animationDelay: "120ms" }}>
					<h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
						The <span className="text-pink-500">Founder&apos;s Story</span>
					</h2>
				</div>

				<div className="mt-14 grid gap-10 lg:grid-cols-[1.04fr_0.96fr] lg:items-start">
					<div className="space-y-8 animate-slide-in-left">
						<div className="relative animate-slide-in-left" style={{ animationDelay: "180ms" }}>
							<div className="overflow-hidden rounded-4xl border border-white bg-white shadow-[0_26px_80px_rgba(15,23,42,0.14)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_34px_90px_rgba(15,23,42,0.18)]">
								<img
									src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=80"
									alt="A woman driving a car at sunset"
									className="h-100 w-full object-cover sm:h-117.5"
								/>
							</div>

							<div className="absolute -bottom-6 right-6 w-55 rounded-[1.7rem] border border-pink-100 bg-white px-6 py-3 shadow-[0_24px_60px_rgba(15,23,42,0.12)] animate-slide-in-left transition duration-300 hover:-translate-y-1 hover:scale-[1.01]" style={{ animationDelay: "420ms" }}>
								<div className="flex items-center gap-4">
									<div className="flex h-12 w-12 items-center justify-center rounded-[1.1rem] bg-pink-50 text-pink-500">
										<HiOutlineSparkles className="text-xl" />
									</div>
									<div>
										<div className="text-2xl font-semibold leading-none text-slate-950">1st</div>
										<div className="mt-1 text-xs leading-5 text-slate-600">Female-only ride service in SA</div>
									</div>
								</div>
							</div>
						</div>

						<div className="relative overflow-hidden rounded-4xl bg-linear-to-br from-[#ff4fa3] via-[#f75fa4] to-[#ff79bf] px-8 py-9 text-white shadow-[0_30px_70px_rgba(244,114,182,0.30)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_36px_90px_rgba(244,114,182,0.38)] animate-slide-in-left" style={{ animationDelay: "260ms" }}>
							<FaQuoteLeft className="absolute right-8 top-6 text-6xl text-white/15" />
							<p className="max-w-2xl text-sm leading-8 sm:text-base">
								"SheGO was born from a commitment to create a secure, empowering, and reliable alternative, a ride-hailing platform designed by women, for women."
							</p>
							<p className="mt-5 text-sm text-white/85">- SheGO Founder</p>
						</div>

					</div>

					<div className="space-y-6 animate-slide-in-right">
						{storySteps.map((step, index) => (
							<article
								key={step.number}
								className="relative overflow-hidden rounded-4xl border border-pink-100 bg-white p-7 pl-8 shadow-[0_20px_55px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_65px_rgba(15,23,42,0.10)] animate-slide-in-right animate-lift-on-hover before:absolute before:inset-y-0 before:left-0 before:w-1 before:rounded-l-4xl before:bg-pink-500 before:content-['']"
								style={{ animationDelay: `${220 + index * 140}ms` }}
							>
								<div className="mb-5 flex items-start gap-3">
									<div className="flex h-11 w-11 items-center justify-center rounded-full bg-pink-50 text-base font-semibold text-pink-500">
										{step.number}
									</div>
									<h3 className="pt-1 text-xl font-semibold tracking-tight text-slate-950">
										{step.title}
									</h3>
								</div>
								<p className="text-sm leading-7 text-slate-600">{step.text}</p>
							</article>
						))}
					</div>
				</div>

				<div className="grid mt-15 gap-5 md:grid-cols-2">
							{[
								{
									icon: FaHeart,
									title: "The Journey",
									text: "Building SheGO required determination, resilience, and a belief in women-led innovation. From early challenges to forming the right team, the mission stayed fixed on safer everyday travel.",
								},
								{
									icon: FaMedal,
									title: "SheGO Today",
									text: "Today, SheGO stands as more than a transport service. It empowers women on both sides of the journey by offering safe rides for passengers and meaningful opportunities for female drivers.",
								},
							].map((item, index) => {
								const Icon = item.icon;

								return (
									<article
										key={item.title}
										className="rounded-4xl  border border-slate-100 bg-white p-3 text-center shadow-[0_18px_44px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.12)] animate-slide-in-left"
										style={{ animationDelay: `${320 + index * 120}ms` }}
									>
										<div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-[1.1rem] bg-pink-500 text-white shadow-[0_16px_30px_rgba(244,114,182,0.25)]">
												<Icon className="text-xl" />
										</div>
										<h3 className="text-xl font-semibold tracking-tight text-slate-950">{item.title}</h3>
										<p className="mx-auto mt-5 max-w-136 text-[0.9rem] leading-7 text-slate-600">{item.text}</p>
									</article>
								);
							})}
						</div>
			</section>

			<section id="values" className="relative mx-auto max-w-7xl px-6 pb-28 sm:px-8 lg:px-12">
				<div className="text-center animate-fade-up" style={{ animationDelay: "120ms" }}>
					<h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
						Our <span className="text-pink-500">Values</span>
					</h2>
					<p className="mx-auto mt-4 max-w-4xl text-sm leading-7 text-slate-600 sm:text-base">
						These core principles guide everything we do and help us build a better transportation experience for everyone.
					</p>
				</div>

				<div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
					{values.map((value, index) => {
						const Icon = value.icon;

						return (
							<article
								key={value.title}
								className="rounded-4xl border border-slate-100 bg-white p-7 shadow-[0_20px_50px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_28px_70px_rgba(15,23,42,0.12)] animate-fade-up"
								style={{ animationDelay: `${200 + index * 110}ms` }}
							>
								<div className="mb-6 flex h-16 w-16 items-center justify-center rounded-[1.35rem] bg-pink-500 text-white shadow-[0_18px_36px_rgba(244,114,182,0.25)]">
									<Icon className="text-2xl" />
								</div>
								<h3 className="text-2xl font-semibold tracking-tight text-slate-950">{value.title}</h3>
								<p className="mt-5 text-sm leading-7 text-slate-600">{value.text}</p>
							</article>
						);
					})}
				</div>
			</section>

			
		</div>
	);
};

export default About;
