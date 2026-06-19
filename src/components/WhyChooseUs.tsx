import { motion, useScroll, useTransform } from "framer-motion";
import { Leaf, BadgeCheck, Clock, Award, Sparkles } from "lucide-react";
import { useRef } from "react";

const features = [
  {
    icon: Award,
    title: "Certified & Experienced Team",
    description:
      "Our technicians are thoroughly trained and experienced in handling all types of pest infestations safely and effectively.",
    color: "bg-red-50 text-red-600",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly & Safe Chemicals",
    description:
      "We use only government-approved, eco-friendly chemicals that are safe for your family, pets, and the environment.",
    color: "bg-green-50 text-green-600",
  },
  {
    icon: BadgeCheck,
    title: "Transparent Pricing",
    description:
      "What you see is what you pay. No hidden costs, no last-minute surprises. Get an upfront quote before we start.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Clock,
    title: "On-Time Reliable Service",
    description:
      "We value your time. Our team arrives promptly at the scheduled time and completes the job efficiently.",
    color: "bg-amber-50 text-amber-600",
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

// Animated counter component
function AnimatedCounter({ value }: { value: string }) {
  return (
    <motion.span
      className="font-heading font-bold text-2xl sm:text-3xl text-red-accent inline-flex items-center gap-1"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {value}
    </motion.span>
  );
}

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const statsY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section id="why-us" ref={sectionRef} className="relative py-20 lg:py-28 bg-charcoal-50 overflow-hidden">
      {/* Decorative background */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
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
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-accent/5 rounded-full text-red-accent text-sm font-semibold border border-red-accent/10 mb-4"
          >
            <Sparkles className="w-4 h-4" />
            Why Urban Pest Dial Services
          </motion.span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-900 leading-tight mt-4">
            Why Choose Us?
          </h2>
          <motion.p
            className="mt-4 text-lg text-charcoal-600"
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            We don't just treat pests — we protect your peace of mind.
            Here's what sets us apart.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              className="group bg-white rounded-2xl p-8 border border-charcoal-100 text-center relative overflow-hidden"
              whileHover={{
                y: -8,
                boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
                borderColor: "rgba(198, 40, 40, 0.2)",
              }}
            >
              {/* Hover glow */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: "radial-gradient(ellipse at 50% 0%, rgba(198,40,40,0.04) 0%, transparent 70%)",
                }}
              />

              {/* Icon with bounce animation on hover */}
              <motion.div
                className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 relative z-10`}
                whileHover={{ scale: 1.15, rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.4 }}
              >
                <feature.icon className="w-8 h-8" />
              </motion.div>

              <h3 className="font-heading font-bold text-lg text-charcoal-900 mb-3 relative z-10 group-hover:text-red-accent transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-charcoal-500 text-sm leading-relaxed relative z-10">
                {feature.description}
              </p>

              {/* Bottom accent line */}
              <motion.div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-red-accent group-hover:w-3/4 transition-all duration-500"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ y: statsY }}
          className="mt-16 bg-white rounded-2xl border border-charcoal-100 p-8 shadow-sm relative overflow-hidden"
        >
          {/* Animated background line */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-red-accent via-amber-accent to-red-accent opacity-30"
            style={{ backgroundSize: "200% 100%" }}
            animate={{ backgroundPosition: ["0% 0%", "200% 0%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative z-10">
            {[
              { number: "10K+", label: "Treatments Done" },
              { number: "7+", label: "Services Offered" },
              { number: "99%", label: "Client Satisfaction" },
              { number: "4.8★", label: "Google Rating" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, type: "spring", stiffness: 150 }}
                whileHover={{ y: -5 }}
              >
                <AnimatedCounter value={stat.number} />
                <p className="text-charcoal-500 text-sm mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}