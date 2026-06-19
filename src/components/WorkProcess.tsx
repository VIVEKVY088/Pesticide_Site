import { motion } from "framer-motion";
import { ClipboardCheck, SprayCan, ShieldCheck, Search, ArrowRight, Sparkles } from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    title: "Inspection & Assessment",
    description:
      "Our technician visits your property for a thorough inspection, identifies pest hotspots, and assesses the severity of the infestation.",
    color: "bg-red-50 text-red-600",
  },
  {
    icon: SprayCan,
    title: "Customized Treatment Plan",
    description:
      "Based on the inspection, we design a targeted treatment plan using the most effective and safest methods for your specific pest problem.",
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: ShieldCheck,
    title: "Safe Application",
    description:
      "Our trained team applies the treatment with precision, ensuring maximum effectiveness while keeping your family and pets completely safe.",
    color: "bg-green-50 text-green-600",
  },
  {
    icon: Search,
    title: "Follow-Up & Warranty Support",
    description:
      "We don't just leave after treatment. We schedule follow-up visits and honor our warranty to ensure long-lasting pest-free results.",
    color: "bg-blue-50 text-blue-600",
  },
];

function ProcessStep({ step, index }: { step: typeof steps[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative text-center group"
    >
      {/* Step number */}
      <div className="hidden lg:flex absolute -top-3 left-1/2 -translate-x-1/2 z-10">
        <motion.div
          className="w-8 h-8 bg-red-accent rounded-full flex items-center justify-center"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 + 0.3, type: "spring", stiffness: 200 }}
        >
          <span className="text-xs font-bold text-white">{index + 1}</span>
        </motion.div>
      </div>

      {/* Icon */}
      <motion.div
        className={`w-20 h-20 ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}
        whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
        transition={{ duration: 0.4 }}
      >
        <step.icon className="w-10 h-10" />
      </motion.div>

      {/* Content */}
      <motion.h3
        className="font-heading font-bold text-lg text-charcoal-900 mb-3 group-hover:text-red-accent transition-colors duration-300"
        whileHover={{ x: 3 }}
      >
        {step.title}
      </motion.h3>
      <p className="text-charcoal-500 text-sm leading-relaxed max-w-xs mx-auto">
        {step.description}
      </p>

      {/* Mobile arrow */}
      {index < steps.length - 1 && (
        <motion.div
          className="lg:hidden flex justify-center my-4"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.2 }}
        >
          <ArrowRight className="w-5 h-5 text-charcoal-300 rotate-90" />
        </motion.div>
      )}
    </motion.div>
  );
}

export default function WorkProcess() {
  return (
    <section className="relative py-20 lg:py-28 bg-white overflow-hidden">
      {/* Decorative elements */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(198,40,40,0.02) 0%, transparent 70%)" }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
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
            Our Process
          </motion.span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-900 leading-tight mt-4">
            How We Work
          </h2>
          <p className="mt-4 text-lg text-charcoal-600">
            A simple, transparent 4-step process from inspection to long-term protection.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Desktop connecting line with animated pulse */}
          <div className="hidden lg:block absolute top-24 left-[calc(12.5%+2rem)] right-[calc(12.5%+2rem)] h-0.5 bg-charcoal-200">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-red-accent via-amber-accent to-blue-500"
              initial={{ scaleX: 0, transformOrigin: "left" }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5 }}
              style={{ transformOrigin: "left" }}
            />
            {/* Animated dots along the line */}
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-red-accent rounded-full"
              animate={{
                left: ["0%", "100%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
                repeatDelay: 1,
              }}
            />
          </div>

          <div className="grid lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <ProcessStep key={step.title} step={step} index={index} />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
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
            <span className="relative z-10">Start Your Pest-Free Journey</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}