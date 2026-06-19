import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";
import { PHONE_PRIMARY, PHONE_PRIMARY_LINK } from "../config";

import pestLogo from "../assets/pestLogo.jpg";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Why Us", href: "#why-us" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact", href: "#contact" },
];

const linkVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.3 },
  }),
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on link click
  const handleNavClick = () => setIsOpen(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent backdrop-blur-sm"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.a
            href="#home"
            className="flex items-center gap-2 group"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex flex-col items-center">
              <div className="relative w-9 h-9 lg:w-10 lg:h-10 overflow-hidden rounded-lg bg-white flex items-center justify-center border border-charcoal-100/50 shadow-sm">
                <img src={pestLogo} alt="Urban Pest Dial Logo" className="w-full h-full object-cover" />
              </div>
              <span className={`text-[9px] font-bold tracking-wider leading-none mt-1 transition-colors duration-300 ${scrolled ? "text-charcoal-800" : "text-white/80"}`}>
                UPDS
              </span>
            </div>
            <div className="flex flex-col">
              <span className={`font-heading font-bold text-sm lg:text-base leading-tight transition-colors duration-300 ${scrolled ? "text-charcoal-900" : "text-white"}`}>
                Urban Pest Dial
              </span>
              <span className={`font-heading font-bold text-sm lg:text-base leading-tight -mt-0.5 transition-colors duration-300 ${scrolled ? "text-charcoal-900" : "text-white"}`}>
                Services
              </span>
            </div>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                custom={i}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 relative group ${
                  scrolled ? "text-charcoal-600 hover:text-red-accent" : "text-white/80 hover:text-white"
                }`}
                whileHover={{ y: -1 }}
              >
                {link.label}
                <motion.span
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-red-accent group-hover:w-3/4 transition-all duration-300"
                />
              </motion.a>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <motion.a
              href={`tel:${PHONE_PRIMARY_LINK}`}
              className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-full border-2 transition-all duration-200 ${
                scrolled
                  ? "text-red-accent border-red-accent hover:bg-red-accent hover:text-white"
                  : "text-white border-white/50 hover:border-white hover:bg-white/10"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-4 h-4" />
              Call Now
            </motion.a>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold text-white bg-red-accent rounded-full hover:bg-red-accent-dark transition-all duration-200 shadow-lg shadow-red-accent/25 relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                initial={{ x: "-100%" }}
                whileHover={{ x: "200%" }}
                transition={{ duration: 0.6 }}
              />
              <span className="relative z-10">Book Now</span>
            </motion.a>
          </div>

          {/* Mobile Menu Toggle */}
          <motion.button
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled
                ? "text-charcoal-600 hover:text-red-accent hover:bg-charcoal-50"
                : "text-white hover:text-red-accent-light hover:bg-white/10"
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-white border-t border-charcoal-100 overflow-hidden shadow-xl"
          >
            <div className="px-4 py-4 space-y-1">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={handleNavClick}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="block px-4 py-3 text-base font-medium text-charcoal-600 hover:text-red-accent hover:bg-charcoal-50 rounded-xl transition-colors"
                  whileHover={{ x: 5 }}
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="pt-3 space-y-3">
                <motion.a
                  href={`tel:${PHONE_PRIMARY_LINK}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 text-base font-semibold text-red-accent border-2 border-red-accent rounded-full hover:bg-red-accent hover:text-white transition-colors"
                  whileHover={{ scale: 1.02 }}
                >
                  <Phone className="w-5 h-5" />
                  {PHONE_PRIMARY}
                </motion.a>
                <motion.a
                  href="#contact"
                  onClick={handleNavClick}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 text-base font-semibold text-white bg-red-accent rounded-full hover:bg-red-accent-dark transition-colors"
                  whileHover={{ scale: 1.02 }}
                >
                  Book Free Inspection
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}