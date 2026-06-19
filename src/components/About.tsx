import { motion, useScroll, useTransform } from "framer-motion";
import { Award, Leaf, Clock, CheckCircle, ArrowRight } from "lucide-react";
import { useRef } from "react";
import pestImage from "../assets/PestImage.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" as const },
  }),
};

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [0.95, 1.05]);
  const imageY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section id="about" ref={sectionRef} className="relative py-20 lg:py-28 bg-white overflow-hidden">
      {/* Decorative background elements */}
      <motion.div
        className="absolute top-20 right-0 w-64 h-64 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(198,40,40,0.03) 0%, transparent 70%)" }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 left-0 w-48 h-48 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(245,158,11,0.03) 0%, transparent 70%)" }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-2xl"
              style={{ scale: imageScale, y: imageY }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/30 to-transparent z-10" />
              <img
                src={pestImage}
                alt="Professional pest control technician with equipment"
                className="w-full h-[400px] lg:h-[500px] object-cover"
                loading="lazy"
              />
              {/* Shimmer overlay on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 z-20"
                initial={{ x: "-100%" }}
                whileInView={{ x: "200%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.5 }}
              />
            </motion.div>

            {/* Floating badge with counter animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5, x: 20, y: -20 }}
              whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6, type: "spring", stiffness: 200 }}
              className="absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-6 bg-white rounded-2xl shadow-xl p-4 lg:p-5"
              whileHover={{ scale: 1.05, rotate: 2 }}
            >
              <div className="flex items-center gap-3">
                <motion.div
                  className="w-12 h-12 lg:w-14 lg:h-14 bg-red-accent/10 rounded-full flex items-center justify-center"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                >
                  <Award className="w-6 h-6 lg:w-7 lg:h-7 text-red-accent" />
                </motion.div>
                <div>
                  <motion.p
                    className="font-heading font-bold text-lg lg:text-xl text-charcoal-900"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                  >
                    10K+
                  </motion.p>
                  <p className="text-xs lg:text-sm text-charcoal-500">Treatments Done</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Column */}
          <div className="space-y-8">
            <motion.div
              custom={0}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-accent/5 rounded-full text-red-accent text-sm font-semibold border border-red-accent/10">
                About Us
              </span>
            </motion.div>

            <motion.h2
              custom={1}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-900 leading-tight"
            >
              Your Trusted Partner for{" "}
              <motion.span
                className="text-red-accent inline-block"
                animate={{
                  scale: [1, 1.02, 1],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                Pest-Free Living
              </motion.span>
            </motion.h2>

            <motion.p
              custom={2}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-charcoal-600 text-lg leading-relaxed"
            >
              At Urban Pest Dial Services, we believe everyone deserves a safe and comfortable
              living environment. With modern equipment, trained field technicians, and
              government-approved chemicals, we deliver effective pest control solutions that
              protect your family, your home, and your peace of mind.
            </motion.p>

            {/* Differentiators */}
            <motion.div
              custom={3}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {[
                { icon: Leaf, text: "Eco-Friendly & Safe Chemicals — child and pet safe" },
                { icon: Award, text: "Trained & Certified Technicians" },
                { icon: Clock, text: "Modern Equipment — effective, fast, lasting results" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 + index * 0.15 }}
                  whileHover={{ x: 5 }}
                >
                  <motion.div
                    className="mt-1 w-6 h-6 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0"
                    animate={index === 0 ? { scale: [1, 1.2, 1] } : {}}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  >
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </motion.div>
                  <span className="text-charcoal-700 font-medium">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              custom={4}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-red-accent text-white font-semibold rounded-full shadow-lg shadow-red-accent/25 relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "200%" }}
                  transition={{ duration: 0.6 }}
                />
                <span className="relative z-10">Schedule an Inspection</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}