import { motion } from "framer-motion";
import {
  Bug,
  Rat,
  Bed,
  Antenna,
  Laptop,
  Worm,
  Skull,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const serviceData = [
  {
    id: "anti-termite",
    name: "Anti-Termite Treatment",
    description:
      "Protect the structural integrity of your property with our comprehensive anti-termite solutions. We create a chemical barrier around foundations, treat soil, and apply wood treatments to eliminate termites and prevent reinfestation. Backed by a 1-year warranty for your peace of mind.",
    icon: Bug,
    color: "bg-amber-50 text-amber-600",
    hoverColor: "group-hover:bg-amber-100",
  },
  {
    id: "cockroach",
    name: "Cockroach Control",
    description:
      "Eliminate cockroach infestations at their source using targeted gel baits, growth regulators, and residual sprays. Our approach targets hiding spots in kitchens, bathrooms, and dark corners — leaving your home clean and roach-free.",
    icon: Worm,
    color: "bg-orange-50 text-orange-600",
    hoverColor: "group-hover:bg-orange-100",
  },
  {
    id: "bedbugs",
    name: "Bed Bugs Control",
    description:
      "Get restful sleep again with our thorough bed bug treatment. We use steam treatment, chemical spray, and deep mattress inspection to eradicate bed bugs from your bedroom furniture, upholstery, and crevices. 3-month warranty included.",
    icon: Bed,
    color: "bg-red-50 text-red-600",
    hoverColor: "group-hover:bg-red-100",
  },
  {
    id: "rodent",
    name: "Rodent Control",
    description:
      "Keep rats and mice away from your home with our integrated rodent management. We seal entry points, set bait stations strategically, and provide ongoing monitoring to prevent these disease-carrying pests from returning.",
    icon: Rat,
    color: "bg-gray-100 text-gray-600",
    hoverColor: "group-hover:bg-gray-200",
  },
  {
    id: "ants",
    name: "Ants Control",
    description:
      "From common black ants to red fire ants, our treatment targets ant colonies and trails. We apply barrier sprays around doorways, windows, and kitchen perimeters, plus recommend simple hygiene tips to keep ants out for good.",
    icon: Antenna,
    color: "bg-blue-50 text-blue-600",
    hoverColor: "group-hover:bg-blue-100",
  },
  {
    id: "lizard",
    name: "Lizard Control",
    description:
      "Unwanted lizards on your walls? Our lizard control treatment uses non-toxic repellent sprays and natural deterrents that encourage lizards to leave without harming them. Perfect for keeping your interiors clean and pest-free.",
    icon: Laptop,
    color: "bg-green-50 text-green-600",
    hoverColor: "group-hover:bg-green-100",
  },
  {
    id: "mosquito",
    name: "Mosquito Control",
    description:
      "Protect your family from mosquito-borne diseases with our fogging and residual spray treatments. We target breeding areas, dark corners, and outdoor spaces to significantly reduce the mosquito population around your home.",
    icon: Skull,
    color: "bg-teal-50 text-teal-600",
    hoverColor: "group-hover:bg-teal-100",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
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

function ServiceCard({ service, index }: { service: typeof serviceData[0]; index: number }) {
  return (
    <motion.div
      variants={cardVariants}
      className="group relative bg-white rounded-2xl p-6 border border-charcoal-100 transition-all duration-500 overflow-hidden"
      whileHover={{
        y: -8,
        boxShadow: "0 20px 40px rgba(198, 40, 40, 0.1)",
        borderColor: "rgba(198, 40, 40, 0.3)",
      }}
    >
      {/* Decorative top gradient bar */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-accent via-amber-accent to-red-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ backgroundSize: "200% 100%" }}
        animate={{ backgroundPosition: ["0% 0%", "200% 0%"] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />

      {/* Background shine effect on hover */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 0%, rgba(198,40,40,0.03) 0%, transparent 70%)",
        }}
      />

      {/* Icon */}
      <motion.div
        className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center mb-5 relative z-10`}
        whileHover={{ scale: 1.2, rotate: [0, -10, 10, -5, 0] }}
        transition={{ duration: 0.4 }}
      >
        <service.icon className="w-7 h-7" />
      </motion.div>

      {/* Name */}
      <h3 className="font-heading font-bold text-lg text-charcoal-900 mb-3 relative z-10 group-hover:text-red-accent transition-colors duration-300">
        {service.name}
      </h3>

      {/* Description */}
      <p className="text-charcoal-500 text-sm leading-relaxed mb-5 line-clamp-3 group-hover:line-clamp-none transition-all duration-500 relative z-10">
        {service.description}
      </p>

      {/* CTA */}
      <motion.a
        href={`#contact`}
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-red-accent relative z-10"
        whileHover={{ gap: "0.75rem" }}
      >
        Get Quote
        <motion.div
          animate={{ x: [0, 4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
        >
          <ArrowRight className="w-4 h-4" />
        </motion.div>
      </motion.a>

      {/* Corner decoration */}
      <motion.div
        className="absolute -bottom-6 -right-6 w-16 h-16 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-500"
        style={{ background: "radial-gradient(circle, #c62828 0%, transparent 70%)" }}
      />
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative py-20 lg:py-28 bg-charcoal-50 overflow-hidden">
      {/* Background decorative elements */}
      <motion.div
        className="absolute top-10 left-10 w-72 h-72 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(198,40,40,0.02) 0%, transparent 70%)" }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(245,158,11,0.02) 0%, transparent 70%)" }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Our Services
          </motion.span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-900 leading-tight mt-4">
            Comprehensive Pest Control Solutions
          </h2>
          <p className="mt-4 text-lg text-charcoal-600">
            From termites to mosquitoes, we treat every pest with precision and care.
            All treatments use government-approved, family-safe chemicals.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {serviceData.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-red-accent text-white font-semibold rounded-full shadow-lg shadow-red-accent/25 relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
              initial={{ x: "-100%" }}
              whileHover={{ x: "200%" }}
              transition={{ duration: 0.6 }}
            />
            <span className="relative z-10">Need a Different Service?</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}