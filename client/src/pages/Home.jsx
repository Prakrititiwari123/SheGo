import { useEffect, useState } from "react";
import { FaApple, FaGooglePlay, FaArrowRight } from "react-icons/fa";
import Features from "./Features";
import Work from "./Work";
import Download from "./Download";
import About from "./About";
import Contact from "./Contact";

import {
  FaStar,
  FaShieldAlt,
  FaBolt,
} from "react-icons/fa";


const heroSlides = [
	{
		image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80",
		title: "Get Your Perfect",
		emphasis: "Ride",
		subtitle: "Instantly",
		description:
			"Experience the easiest way to book rides with our fast, reliable, and affordable ride-hailing service. Download Shego and enjoy safe, comfortable transportation at your fingertips.",
	},
	{
		image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1600&q=80",
		title: "Travel With",
		emphasis: "Confidence",
		subtitle: "Every Day",
		description:
			"Choose a smoother ride with verified drivers, clear pricing, and a booking flow designed for convenience from start to finish.",
	},
	{
		image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1600&q=80",
		title: "Comfort That",
		emphasis: "Moves",
		subtitle: "With You",
		description:
			"Feel the difference of a platform built for comfort, speed, and peace of mind on every trip you book.",
	},
	{
		image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1600&q=80",
		title: "A Smarter Way",
		emphasis: "To Ride",
		subtitle: "Anywhere",
		description:
			"Book in seconds, ride with ease, and enjoy a modern transport experience designed around you.",
	},
];

const Home = () => {
	const [activeIndex, setActiveIndex] = useState(0);

	useEffect(() => {
		const interval = window.setInterval(() => {
			setActiveIndex((current) => (current + 1) % heroSlides.length);
		}, 2000);

		return () => window.clearInterval(interval);
	}, []);

	const activeSlide = heroSlides[activeIndex];

	return (
        <>
		<section className="relative min-h-screen overflow-hidden bg-[#140b14] text-white">
			<div className="absolute inset-0">
				<img
					src={activeSlide.image}
					alt="Shego hero background"
					className="h-full w-full object-cover transition-opacity duration-700"
				/>
				<div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,10,10,0.78)_0%,rgba(18,14,18,0.58)_42%,rgba(18,14,18,0.25)_100%)]" />
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(244,114,182,0.20),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.10),transparent_34%)]" />
			</div>

			<div className="relative mx-auto flex min-h-screen max-w-7xl  items-center px-6 pt-24 sm:px-8 lg:px-12">
				<div className="max-w-3xl animate-fade-up">
					<div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm font-medium text-white/90 backdrop-blur-md">
						<span className="h-2.5 w-2.5  rounded-full bg-pink-500" />
						Your Ride Is Just a Tap Away
					</div>

					<h1 className="mt-8 text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-[5.2rem]">
						{activeSlide.title} <span className="text-pink-400">{activeSlide.emphasis}</span>
						<br />
						<span className="text-pink-400">{activeSlide.subtitle}</span>
					</h1>

					<p className="mt-8 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
						{activeSlide.description}
					</p>

					<div className="mt-10 flex flex-col gap-4 sm:flex-row">
						<a
							href="/download"
							className="inline-flex items-center gap-4 rounded-[1.4rem] bg-white px-6 py-4 text-slate-900 shadow-[0_16px_40px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-1 hover:scale-[1.01]"
						>
							<FaApple className="text-3xl" />
							<div className="text-left">
								<p className="text-xs font-medium text-slate-500">Download on</p>
								<p className="text-xl font-semibold">App Store</p>
							</div>
							<FaArrowRight className="ml-auto text-lg" />
						</a>

						<a
							href="/download"
							className="inline-flex items-center gap-4 rounded-[1.4rem] bg-pink-500 px-6 py-4 text-white shadow-[0_16px_40px_rgba(244,114,182,0.28)] transition duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:bg-pink-600"
						>
							<FaGooglePlay className="text-3xl" />
							<div className="text-left">
								<p className="text-xs font-medium text-white/80">Get it on</p>
								<p className="text-xl font-semibold">Google Play</p>
							</div>
							<FaArrowRight className="ml-auto text-lg" />
						</a>
					</div>

					<div className="mt-12 flex items-center gap-3 flex justify-center ml-100">
						{heroSlides.map((_, index) => (
							<button
								key={index}
								onClick={() => setActiveIndex(index)}
								aria-label={`Go to slide ${index + 1}`}
								className={`h-2.5 rounded-full transition-all duration-300 ${
									index === activeIndex ? "w-10 bg-pink-400" : "w-2.5 bg-white/50 hover:bg-white/75"
								}`}
							/>
						))}
					</div>
				</div>
			</div>
            
		</section>

        <Features />
        <Work />


    <section className="relative mb-15 overflow-hidden bg-white  text-slate-900">
      <div
        className="pointer-events-none absolute inset-0 opacity-35"
        style={{
          backgroundImage: "radial-gradient(#e5e7eb 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="pointer-events-none absolute left-0 top-0 h-64 w-64 rounded-full bg-pink-100/30 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-24 h-72 w-72 rounded-full bg-pink-50/60 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="text-center animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full bg-pink-50 px-4 py-2 text-xs font-medium text-pink-500 shadow-[0_8px_24px_rgba(244,114,182,0.08)] sm:text-sm">
            📱 Mobile App Preview
          </div>

          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-[3.35rem]">
            Experience the <span className="text-pink-500">SheGo App</span>
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base lg:text-lg">
            A seamless, intuitive interface designed for effortless ride booking
          </p>
        </div>

        <div className="mt-16 grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          <div className="flex justify-center lg:justify-start">
            <div className="group relative animate-slide-in-left">
              <div className="absolute -top-4 right-0 z-30 rounded-2xl bg-white px-4 py-3 shadow-[0_18px_40px_rgba(15,23,42,0.10)] transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_24px_55px_rgba(15,23,42,0.14)]">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-500 text-white transition duration-300 group-hover:scale-105">
                    <FaStar />
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-500">Rating</p>
                    <p className="text-lg font-semibold leading-none text-slate-900">4.9/5.0</p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-6 -left-6 z-20 rounded-2xl bg-white px-4 py-3 shadow-[0_18px_40px_rgba(15,23,42,0.10)] transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_24px_55px_rgba(15,23,42,0.14)]">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-500 text-white transition duration-300 group-hover:scale-105">
                    <FaShieldAlt />
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-500">Security</p>
                    <p className="text-lg font-semibold leading-none text-slate-900">Verified</p>
                  </div>
                </div>
              </div>

              <div className="absolute -left-10 top-20 h-125 w-62.5 rounded-[40px] border-8 border-slate-300/80 opacity-70 transition duration-500 group-hover:-translate-x-1 group-hover:-translate-y-1" />

              <div className="relative w-70 rounded-[45px] bg-slate-900 p-3 shadow-[0_20px_80px_rgba(0,0,0,0.18)] transition duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_28px_90px_rgba(0,0,0,0.22)] motion-safe:animate-float">
                <div className="absolute left-1/2 top-0 z-20 h-6 w-32 -translate-x-1/2 rounded-b-3xl bg-slate-900" />
                <div className="h-135 w-full overflow-hidden rounded-[35px]">
                  <img
                    src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80"
                    alt="App Preview"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="animate-slide-in-right">
            <h3 className="max-w-xl text-4xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-5xl">
              Designed for Your Convenience
            </h3>

            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:text-base lg:text-lg">
              Our app combines powerful features with an intuitive interface to give you the best ride-hailing experience.
            </p>

            <div className="mt-8 space-y-4">
              {[
                {
                  icon: FaStar,
                  title: "4.9 Rating",
                  text: "Trusted by thousands of users",
                },
                {
                  icon: FaShieldAlt,
                  title: "Secure",
                  text: "100% safe payments & rides",
                },
                {
                  icon: FaBolt,
                  title: "Fast",
                  text: "Ride in minutes",
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group flex items-center gap-4 rounded-3xl border border-slate-100 bg-white p-5 shadow-[0_10px_28px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.08)] animate-fade-up"
                    style={{ animationDelay: `${120 + index * 90}ms` }}
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-pink-500 text-white text-lg transition duration-300 group-hover:scale-105 group-hover:rotate-[-4deg]">
                      <Icon />
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold text-slate-900 transition duration-300 group-hover:translate-x-0.5 sm:text-[1.15rem]">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-sm text-slate-500 sm:text-[0.95rem]">
                        {item.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  



  <Download />
  <About />
  <Contact />
        

       </> 
	);
    
};

export default Home;
