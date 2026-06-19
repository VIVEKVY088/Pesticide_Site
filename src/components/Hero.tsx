import { motion } from "framer-motion";
import { Phone, Shield, ChevronRight, Sparkles, ArrowDown } from "lucide-react";
import { PHONE_PRIMARY_LINK } from "../config";
import SEO from "./SEO";

// Floating particle component
function FloatingParticle({ delay = 0, size = 4, x = 0, y = 0, color = "rgba(255,255,255,0.1)" }) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        left: `${x}%`,
        top: `${y}%`,
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 0.6, 0.3, 0.8, 0],
        scale: [0, 1, 0.8, 1.2, 0],
        y: [0, -30, -60, -90, -120],
        x: [0, 15, -10, 20, 0],
      }}
      transition={{
        duration: 8,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

export default function Hero() {
  return (
    <>
      <SEO
        title="Home"
        description="Professional pest control in Mahavir Enclave, New Delhi. Anti-termite, cockroach, bed bugs, rodent, ant, lizard & mosquito control. Same-day service, eco-friendly treatments, 1-year warranty."
        canonicalUrl="https://urbanpestdialservices.in/"
      />
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-charcoal-900">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-charcoal-900 via-charcoal-900/95 to-red-accent/20 animate-gradient"
        animate={{
          background: [
            "linear-gradient(135deg, #1a1a1a 0%, #1a1a1a 50%, rgba(198,40,40,0.2) 100%)",
            "linear-gradient(135deg, #1a1a1a 0%, #1a1a1a 40%, rgba(198,40,40,0.3) 100%)",
            "linear-gradient(135deg, #1a1a1a 0%, #1a1a1a 50%, rgba(198,40,40,0.2) 100%)",
          ],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <FloatingParticle
            key={i}
            delay={i * 0.4}
            size={Math.random() * 6 + 2}
            x={Math.random() * 100}
            y={Math.random() * 100}
            color={`rgba(239, 83, 80, ${Math.random() * 0.15 + 0.05})`}
          />
        ))}
      </div>

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, white 1px, transparent 0)`,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Decorative glowing orb */}
      <motion.div
        className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #ef5350 0%, transparent 70%)" }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.08, 0.15, 0.08],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #f59e0b 0%, transparent 70%)" }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.05, 0.12, 0.05],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Hero image - above the fold, eager loaded for LCP */}
      <div className="absolute inset-0 lg:left-1/2 lg:right-0 opacity-30 lg:opacity-100 overflow-hidden">
        <motion.img
          src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&q=80"
          alt="Professional pest control technician at work in Mahavir Enclave, New Delhi"
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
          width="1200"
          height="800"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900 via-charcoal-900/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40 w-full">
        <div className="max-w-2xl">
          {/* Trust badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-sm font-medium mb-6 border border-white/10"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <Shield className="w-4 h-4 text-red-accent-light" />
            </motion.div>
            Trusted by Families Across Delhi NCR
          </motion.div>

          {/* Headline with typewriter-like effect */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.1] tracking-tight"
          >
            Protect Your Home & Workplace{" "}
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-red-accent-light to-amber-accent inline-block"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              style={{ backgroundSize: "200% 200%" }}
            >
              From Pests
            </motion.span>
            <br />
            <span className="text-charcoal-300">— Trusted, Safe, Fast</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-lg sm:text-xl text-charcoal-300 leading-relaxed max-w-lg"
          >
            Government-approved treatments, experienced technicians, and eco-friendly solutions.
            Serving Delhi NCR with same-day service available. Your safety is our priority.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <motion.a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-red-accent text-white font-semibold rounded-full shadow-xl shadow-red-accent/30 text-lg relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Shimmer overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                initial={{ x: "-100%" }}
                whileHover={{ x: "200%" }}
                transition={{ duration: 0.6 }}
              />
              <span className="relative z-10">Book Free Inspection</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
            </motion.a>
            <motion.a
              href={`tel:${PHONE_PRIMARY_LINK}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full text-lg relative overflow-hidden"
              whileHover={{ borderColor: "rgba(255,255,255,0.6)", scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Phone className="w-5 h-5" />
              Call Now
              <motion.span
                className="absolute inset-0 bg-white/5"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </motion.div>

          {/* Trust strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 flex flex-wrap gap-6 sm:gap-10"
          >
            {[
              { icon: Shield, text: "Eco-Friendly Treatments" },
              { icon: Sparkles, text: "Same-Day Service" },
              { icon: Shield, text: "Govt. Approved Chemicals" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2 text-charcoal-400 text-sm"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.75 + index * 0.1 }}
                whileHover={{ y: -2, color: "#e5e5e5" }}
              >
                <motion.div
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 2, delay: index * 0.3, repeat: Infinity, repeatDelay: 4 }}
                >
                  <item.icon className="w-4 h-4 text-red-accent-light" />
                </motion.div>
                <span>{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.span
          className="text-xs tracking-widest uppercase"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Scroll
        </motion.span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
    </>
  );
}
