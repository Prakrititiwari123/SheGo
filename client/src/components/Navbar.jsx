import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const isHome = location.pathname === "/";
  const elevated = scrolled || !isHome;

  const navClasses = elevated
    ? "bg-pink-500 text-white shadow-[0_12px_40px_rgba(244,114,182,0.22)] backdrop-blur-xl"
    : "bg-transparent text-white shadow-none";
  const linkClasses = elevated
    ? "text-white hover:text-white/85 transition"
    : "text-white hover:text-white/80 transition";
  const buttonClasses = elevated
    ? "bg-white text-pink-500 shadow-[0_12px_30px_rgba(15,23,42,0.12)]"
    : "bg-white text-pink-500 shadow-[0_12px_30px_rgba(15,23,42,0.12)]";

  return (
    <nav
      className={`fixed top-0 left-0 z-50 flex h-20 w-full items-center transition-all duration-500 ${navClasses}`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-8">
        {/* Logo */}
        <Link to="/" className="shrink-0">
  <img
    src="Logo.png"
    alt="SheGo Logo"
    className="w-42.5 object-contain cursor-pointer"
  />
</Link>

        {/* Nav Links */}
        <ul className="hidden grow items-center justify-center gap-10 font-medium text-[15px] lg:flex">
          <li>
            <Link to="/" className={linkClasses}>
              Home
            </Link>
          </li>

          <li>
            <Link to="/features" className={linkClasses}>
              Features
            </Link>
          </li>

          <li>
            <Link to="/work" className={linkClasses}>
              How It Works
            </Link>
          </li>

          <li>
            <Link to="/download" className={linkClasses}>
              Download
            </Link>
          </li>

          <li>
            <Link to="/about" className={linkClasses}>
              About Us
            </Link>
          </li>

          <li>
            <Link to="/contact" className={linkClasses}>
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Button */}
        <Link
          to="/download"
          className={`shrink-0 rounded-full px-7 py-2 text-[15px] font-semibold transition-all duration-300 hover:scale-105 ${buttonClasses}`}
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
