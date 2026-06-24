import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-[#020817] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-7 py-16">
        {/* Logo */}
        <div className="flex flex-col items-center">
          <img
            src="Logo.png"
            alt="SheGo Logo"
            className="w-50 max-w-full object-contain"
          />
        </div>

        {/* Description */}
        <div className="max-w-4xl mx-auto text-center mt-10">
          <p className="text-gray-300 text-l leading-8">
            Your trusted partner for safe, reliable, and affordable rides.
            Experience convenience,<br /> affordability, and exceptional service with every journey.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap justify-center gap-10 mt-10 text-[15px] text-gray-300">
          <a href="#" className="hover:text-pink-400 transition">
            Home
          </a>
          <a href="#" className="hover:text-pink-400 transition">
            Features
          </a>
          <a href="#" className="hover:text-pink-400 transition">
            How It Works
          </a>
          <a href="#" className="hover:text-pink-400 transition">
            Download
          </a>
          <a href="#" className="hover:text-pink-400   transition">
            About Us
          </a>
          <a href="#" className="hover:text-pink-400 transition">
            Contact Us
          </a>
          <a href="#" className="hover:text-pink-400 transition">
            Terms
          </a>
          <a href="#" className="hover:text-pink-400 transition">
            Privacy
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 mt-14  ">
          {[
            <FaFacebookF />,
            <FaTwitter />,
            <FaInstagram />,
            <FaLinkedinIn />,
            <FaYoutube />,
          ].map((icon, index) => (
            <a
              key={index}
              href="#"
              className="w-12 h-12 rounded-full bg-[#1A2742] hover:bg-pink-400 flex items-center justify-center text-2xl text-gray-300 hover:-translate-y-1 transition duration-300"
            >
              {icon}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-[#1A2742] mt-14 position-relative"></div>

        {/* Copyright */}
        <div className="text-center mt-6">
          <p className="text-gray-300 text-sm position-relative mt-10 ">
            © 2026 SheGo. All rights reserved.
          </p>
        </div>
      </div>

      {/* Scroll Top Button */}
      <button
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        className="fixed bottom-8 right-8 w-16 h-16 rounded-full bg-pink-500 hover:bg-pink-600 text-white text-2xl shadow-lg flex items-center justify-center transition-all duration-300"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default Footer;
