import {
  FaApple,
  FaGooglePlay,
  FaArrowRight,
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";
const CTASection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#3a2444] via-[#2a223c] to-[#3d2748] py-24 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,105,180,0.18),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(255,105,180,0.16),_transparent_28%)]" />

      {/* Top Left Circle */}
      <div className="absolute top-0 left-10 w-24 h-24 border border-pink-400/35 rounded-full"></div>

      {/* Bottom Right Circle */}
      <div className="absolute bottom-10 right-24 w-40 h-40 border border-pink-400/25 rounded-full"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-3 border border-white/15 rounded-full px-6 md:px-8 py-3 text-white mb-12 bg-white/8 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.12)]">
          <HiSparkles className="text-pink-400 text-lg md:text-xl" />
          <span className="text-sm md:text-lg tracking-wide">Start Your Journey Today</span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-semibold text-white leading-[1.05] tracking-tight">
          Ready to{" "}
          <span className="text-pink-400">
            Get a Ride?
          </span>
        </h2>

        {/* Description */}
        <p className="max-w-4xl mx-auto mt-8 md:mt-10 text-white/75 text-base sm:text-lg md:text-[1.35rem] leading-relaxed">
          Join thousands of satisfied customers and experience the future of
          transportation. Download the Shego app now and get exclusive offers!
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-8 mt-12 md:mt-16">

          {/* App Store */}
          <button className="bg-white text-black px-5 md:px-6 py-4 md:py-5 rounded-[1.4rem] flex items-center gap-3 md:gap-4 hover:scale-[1.03] transition duration-300 min-w-[260px] md:min-w-[280px] shadow-[0_14px_40px_rgba(0,0,0,0.16)]">
            <FaApple className="text-3xl md:text-4xl" />

            <div className="text-left">
              <p className="text-xs md:text-sm font-medium text-slate-500">
                Download on
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-slate-900">
                App Store
              </h3>
            </div>

            <FaArrowRight className="ml-auto text-lg md:text-2xl text-slate-900" />
          </button>

          {/* Google Play */}
          <button className="bg-[#f15ca8] text-white px-5 md:px-6 py-4 md:py-5 rounded-[1.4rem] flex items-center gap-3 md:gap-4 hover:scale-[1.03] transition duration-300 min-w-[260px] md:min-w-[280px] shadow-[0_14px_40px_rgba(255,92,168,0.22)]">
            <FaGooglePlay className="text-3xl md:text-4xl" />

            <div className="text-left">
              <p className="text-xs md:text-sm font-medium text-white/90">
                Get it on
              </p>

              <h3 className="text-xl md:text-2xl font-bold">
                Google Play
              </h3>
            </div>

            <FaArrowRight className="ml-auto text-lg md:text-2xl" />
          </button>

        </div>
      </div>
    </section>
  );
};

export default CTASection;