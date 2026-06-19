import { motion } from "framer-motion";
import { Phone, MapPin, ArrowUp } from "lucide-react";
import pestLogo from "../assets/pestLogo.jpg";
import {
  COMPANY_NAME,
  COMPANY_TAGLINE,
  PHONE_PRIMARY,
  PHONE_PRIMARY_LINK,
  PHONE_SECONDARY,
  COMPANY_ADDRESS,
  SERVICES,
  SOCIAL_LINKS,
} from "../config";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Why Us", href: "#why-us" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact", href: "#contact" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-charcoal-900 text-white overflow-hidden">
      {/* Animated gradient border accent */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-1"
        style={{
          background: "linear-gradient(90deg, #c62828, #f59e0b, #c62828)",
          backgroundSize: "200% 100%",
        }}
        animate={{ backgroundPosition: ["0% 0%", "200% 0%"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />

      {/* Decorative background glow */}
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(198,40,40,0.05) 0%, transparent 70%)" }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12"
        >
          {/* Brand */}
          <motion.div variants={itemVariants} className="sm:col-span-2 lg:col-span-1">
            <motion.a
              href="#home"
              className="flex items-center gap-2 mb-4 group"
              whileHover={{ x: 3 }}
            >
              <div className="flex flex-col items-center">
                <div className="relative w-8 h-8 overflow-hidden rounded-lg bg-white flex items-center justify-center border border-white/20 shadow-sm">
                  <img src={pestLogo} alt="Urban Pest Dial Logo" className="w-full h-full object-cover" />
                </div>
                <span className="text-[8px] font-bold tracking-wider text-charcoal-400 mt-1 leading-none">
                  UPDS
                </span>
              </div>
              <span className="font-heading font-bold text-lg">Urban Pest Dial Services</span>
            </motion.a>
            <p className="text-charcoal-400 text-sm leading-relaxed mb-6">
              {COMPANY_TAGLINE}
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              {[
                { href: SOCIAL_LINKS.facebook, label: "Facebook" },
                { href: SOCIAL_LINKS.instagram, label: "Instagram" },
                { href: "https://www.youtube.com/@URBANPESTDIAL", label: "YouTube" },
              ].map((social, i) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-red-accent transition-colors"
                  aria-label={social.label}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  {i === 0 && (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  )}
                  {i === 1 && (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  )}
                  {i === 2 && (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.516 3.545 12 3.545 12 3.545s-7.516 0-9.388.508a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.872.508 9.388.508 9.388.508s7.516 0 9.388-.508a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  )}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-charcoal-400 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <motion.li key={link.href} whileHover={{ x: 5 }}>
                  <a
                    href={link.href}
                    className="text-charcoal-300 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-charcoal-400 mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {SERVICES.map((service) => (
                <motion.li key={service} whileHover={{ x: 5 }}>
                  <a
                    href="#services"
                    className="text-charcoal-300 hover:text-white text-sm transition-colors"
                  >
                    {service}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-charcoal-400 mb-4">
              Contact Info
            </h4>
            <ul className="space-y-4">
              <motion.li whileHover={{ x: 5 }}>
                <a
                  href={`tel:${PHONE_PRIMARY_LINK}`}
                  className="flex items-start gap-3 text-charcoal-300 hover:text-white text-sm transition-colors group"
                >
                  <motion.div
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                    animate={{ rotate: [0, 15, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  >
                    <Phone className="w-4 h-4" />
                  </motion.div>
                  <span>{PHONE_PRIMARY}</span>
                </a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <a
                  href={`tel:+918650113744`}
                  className="flex items-start gap-3 text-charcoal-300 hover:text-white text-sm transition-colors group"
                >
                  <motion.div
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                    animate={{ rotate: [0, 15, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, delay: 0.5 }}
                  >
                    <Phone className="w-4 h-4" />
                  </motion.div>
                  <span>{PHONE_SECONDARY}</span>
                </a>
              </motion.li>
              <motion.li className="flex items-start gap-3 text-charcoal-300 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="leading-relaxed">{COMPANY_ADDRESS}</span>
              </motion.li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-charcoal-500 text-sm">
            &copy; 2026 {COMPANY_NAME}. All Rights Reserved.
          </p>
          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-charcoal-400 hover:text-white text-sm transition-colors group"
            aria-label="Scroll to top"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            Back to top
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowUp className="w-4 h-4" />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
}