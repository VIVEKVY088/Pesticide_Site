import { motion } from "framer-motion";
import { Building2 } from "lucide-react";
import { useRef } from "react";

const brands = [
  {
    name: "JMD",
    logo: (
      <svg viewBox="0 0 120 60" className="w-full h-full">
        <defs>
          <linearGradient id="jmdGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E40AF" />
            <stop offset="100%" stopColor="#DC2626" />
          </linearGradient>
        </defs>
        {/* Curved swoosh design */}
        <path
          d="M15 30 Q25 10 40 15 Q55 20 50 35 Q45 50 30 45 Q15 40 20 25"
          fill="none"
          stroke="url(#jmdGradient)"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M20 30 Q30 15 42 20"
          fill="none"
          stroke="#1E40AF"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M42 20 Q50 25 48 35"
          fill="none"
          stroke="#DC2626"
          strokeWidth="3"
          strokeLinecap="round"
        />
        {/* JMD text */}
        <text
          x="55"
          y="38"
          fontFamily="serif"
          fontSize="28"
          fontWeight="bold"
          fill="#DC2626"
        >
          JMD
        </text>
      </svg>
    ),
  },
  {
    name: "Reliance SMART",
    logo: (
      <svg viewBox="0 0 140 60" className="w-full h-full">
        {/* Flame icon above i */}
        <path
          d="M55 8 Q58 2 61 8 Q64 14 60 18 Q56 14 55 8"
          fill="#DC2626"
        />
        {/* Reliance text */}
        <text
          x="10"
          y="35"
          fontFamily="sans-serif"
          fontSize="18"
          fontWeight="600"
          fill="#DC2626"
        >
          Reliance
        </text>
        {/* SMART text */}
        <text
          x="10"
          y="55"
          fontFamily="sans-serif"
          fontSize="22"
          fontWeight="800"
          fill="#1E3A8A"
        >
          SMART
        </text>
      </svg>
    ),
  },
  {
    name: "DLF",
    logo: (
      <svg viewBox="0 0 100 60" className="w-full h-full">
        {/* Triangular pattern */}
        <polygon points="15,15 25,35 5,35" fill="none" stroke="#1a1a1a" strokeWidth="2" />
        <polygon points="20,20 28,35 12,35" fill="#1a1a1a" />
        <polygon points="25,25 32,38 18,38" fill="none" stroke="#1a1a1a" strokeWidth="1.5" />
        {/* DLF text */}
        <text
          x="40"
          y="38"
          fontFamily="sans-serif"
          fontSize="26"
          fontWeight="800"
          fill="#1a1a1a"
        >
          DLF
        </text>
      </svg>
    ),
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function Brands() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section id="brands" ref={sectionRef} className="relative py-16 lg:py-24 bg-white overflow-hidden">
      {/* Decorative background */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(198,40,40,0.03) 0%, transparent 70%)" }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-accent/5 rounded-full text-red-accent text-sm font-semibold border border-red-accent/10 mb-4"
          >
            <Building2 className="w-4 h-4" />
            Trusted Partners
          </motion.span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-900 leading-tight mt-4">
            Companies We Have Worked With
          </h2>
          <motion.p
            className="mt-4 text-lg text-charcoal-600"
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Proud to serve industry leaders and trusted brands.
          </motion.p>
        </motion.div>

        {/* Brands Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-3 gap-8"
        >
          {brands.map((brand) => (
            <motion.div
              key={brand.name}
              variants={cardVariants}
              className="group bg-white rounded-2xl p-8 border-2 border-charcoal-200 flex items-center justify-center relative overflow-hidden shadow-sm"
              whileHover={{
                y: -8,
                boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
                borderColor: "rgba(198, 40, 40, 0.4)",
                borderWidth: "2px",
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Hover glow */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: "radial-gradient(ellipse at 50% 0%, rgba(198,40,40,0.04) 0%, transparent 70%)",
                }}
              />

              {/* Logo */}
              <div className="relative z-10 w-32 h-16 flex items-center justify-center">
                {brand.logo}
              </div>

              {/* Bottom accent line */}
              <motion.div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-red-accent group-hover:w-3/4 transition-all duration-500"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full border border-charcoal-200 shadow-sm">
            <div className="flex -space-x-2">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-red-accent to-red-accent-dark border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                >
                  {i + 1}
                </div>
              ))}
            </div>
            <span className="text-charcoal-600 text-sm font-medium">
              Trusted by leading businesses across Delhi NCR
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
