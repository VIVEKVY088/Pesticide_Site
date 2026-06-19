import { motion } from "framer-motion";
import {
  Building2,
  Hotel,
  Warehouse,
  Store,
  UtensilsCrossed,
  Hospital,
  GraduationCap,
  House,
  ArrowRight,
} from "lucide-react";

const sectors = [
  {
    icon: House,
    title: "Residential Homes",
    description:
      "Complete pest protection for apartments, independent houses, and villas. Safe treatments for your family and pets.",
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: Building2,
    title: "Commercial Offices",
    description:
      "Keep your workplace hygienic and pest-free. Discreet treatments during non-business hours to avoid disruptions.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurants & Food Industry",
    description:
      "FSSAI-compliant pest management for kitchens, dining areas, and food storage. Zero chemical residue guarantee.",
    color: "bg-orange-50 text-orange-600",
  },
  {
    icon: Hotel,
    title: "Hotels & Hospitality",
    description:
      "Comprehensive pest control for guest rooms, lobbies, kitchens, and banquet halls. Maintain your brand reputation.",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: Hospital,
    title: "Healthcare Facilities",
    description:
      "Sterile-grade pest management for clinics, nursing homes, and hospitals. Infection control compliant protocols.",
    color: "bg-red-50 text-red-600",
  },
  {
    icon: GraduationCap,
    title: "Educational Institutions",
    description:
      "Safe, low-toxicity treatments for schools, colleges, and hostels. Scheduled during holidays or after hours.",
    color: "bg-green-50 text-green-600",
  },
  {
    icon: Store,
    title: "Retail & Shopping Centers",
    description:
      "Pest-free shopping environments with minimal foot-traffic disruption. Tailored plans for malls and standalone stores.",
    color: "bg-pink-50 text-pink-600",
  },
  {
    icon: Warehouse,
    title: "Industrial & Warehousing",
    description:
      "Large-scale fumigation and monitoring for factories, godowns, and warehouses. Protecting your inventory 24/7.",
    color: "bg-teal-50 text-teal-600",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

function SectorCard({ sector, index }: { sector: typeof sectors[0]; index: number }) {
  return (
    <motion.div
      variants={cardVariants}
      className="group relative bg-charcoal-50 rounded-2xl p-6 border border-charcoal-100 overflow-hidden"
      whileHover={{
        y: -6,
        boxShadow: "0 15px 30px rgba(0,0,0,0.08)",
        borderColor: "rgba(198, 40, 40, 0.2)",
      }}
    >
      {/* Hover background effect */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 0%, rgba(198,40,40,0.03) 0%, transparent 70%)",
        }}
      />

      {/* Icon */}
      <motion.div
        className={`w-14 h-14 ${sector.color} rounded-xl flex items-center justify-center mb-5 relative z-10`}
        whileHover={{ scale: 1.15, rotate: 5 }}
        transition={{ duration: 0.3 }}
      >
        <sector.icon className="w-7 h-7" />
      </motion.div>

      {/* Title */}
      <h3 className="font-heading font-bold text-lg text-charcoal-900 mb-3 relative z-10 group-hover:text-red-accent transition-colors duration-300">
        {sector.title}
      </h3>

      {/* Description */}
      <p className="text-charcoal-500 text-sm leading-relaxed relative z-10">
        {sector.description}
      </p>

      {/* Hover indicator arrow */}
      <motion.div
        className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        animate={{ x: [0, 3, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <ArrowRight className="w-4 h-4 text-red-accent" />
      </motion.div>
    </motion.div>
  );
}

export default function ServiceSectors() {
  return (
    <section id="sectors" className="relative py-20 lg:py-28 bg-white overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-red-accent/[0.02] rounded-full blur-3xl" />
      </div>

      {/* Decorative floating elements */}
      <motion.div
        className="absolute top-20 right-20 w-16 h-16 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(198,40,40,0.04) 0%, transparent 70%)" }}
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-24 h-24 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(245,158,11,0.03) 0%, transparent 70%)" }}
        animate={{
          y: [0, 15, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
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
            Industries We Serve
          </motion.span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-900 leading-tight mt-4">
            Pest Control for Every Sector
          </h2>
          <p className="mt-4 text-lg text-charcoal-600">
            Tailored pest management solutions across residential, commercial, and
            industrial sectors — because every space is different.
          </p>
        </motion.div>

        {/* Sectors Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {sectors.map((sector, index) => (
            <SectorCard key={sector.title} sector={sector} index={index} />
          ))}
        </motion.div>

        {/* Bottom CTA Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-gradient-to-r from-red-accent to-red-700 rounded-2xl p-8 sm:p-12 text-white text-center shadow-xl relative overflow-hidden"
        >
          {/* Animated gradient overlay */}
          <motion.div
            className="absolute inset-0 opacity-20"
            style={{
              background: "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)",
              backgroundSize: "200% 200%",
            }}
            animate={{ backgroundPosition: ["0% 0%", "200% 200%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />

          <div className="relative z-10">
            <motion.h3
              className="font-heading text-2xl sm:text-3xl font-bold mb-3"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              Don't See Your Sector?
            </motion.h3>
            <p className="text-white/80 max-w-2xl mx-auto mb-6">
              We provide customized pest control solutions for every type of property.
              Get in touch and we'll design a plan that fits your specific needs.
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white text-red-accent font-semibold px-8 py-3.5 rounded-xl shadow-lg relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-red-50 to-transparent -skew-x-12"
                initial={{ x: "-100%" }}
                whileHover={{ x: "200%" }}
                transition={{ duration: 0.6 }}
              />
              <span className="relative z-10">Contact Us for a Custom Plan</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}