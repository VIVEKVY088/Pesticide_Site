import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";

const faqs = [
  {
    question: "Why choose Urban Pest Dial Services?",
    answer:
      "We bring years of hands-on experience, fully trained technicians, government-approved chemical treatments, and a customer-first approach. Unlike generic pest control providers, we take time to understand your specific pest problem and customize a solution for your home or business. Our transparent pricing and warranty-backed service give you complete peace of mind.",
  },
  {
    question: "Are your treatments safe for kids and pets?",
    answer:
      "Absolutely. We prioritize the safety of your family above everything else. All the chemicals we use are approved by government authorities and are applied with precision to target only the pests. Our team ensures that treated areas are safe to re-enter within a designated time, and we provide clear post-treatment instructions.",
  },
  {
    question: "How often should pest control be done?",
    answer:
      "For general pest prevention, we recommend a treatment every 3-4 months. However, the frequency depends on the type of pest, the severity of the infestation, and your property's location. For termites, an annual treatment with follow-up checks is usually sufficient. We'll advise you on the best schedule after a free inspection.",
  },
  {
    question: "Do you offer residential and commercial service?",
    answer:
      "Yes, we serve both residential and commercial clients. Whether you need a single apartment treated or a multi-property commercial contract, we have the capacity and expertise to handle it. Our team is experienced in treating homes, restaurants, offices, warehouses, hotels, and more.",
  },
  {
    question: "How long does a treatment take?",
    answer:
      "A standard pest control treatment for a 2-3 BHK flat typically takes 30-45 minutes. Termite treatment may take longer depending on the size of the property and extent of infestation. We'll give you a clear time estimate when you book an appointment.",
  },
  {
    question: "Do you provide a warranty?",
    answer:
      "Yes! Our anti-termite treatment comes with a full 1-year warranty. Combo pest control and bed bug treatments come with a 3-month warranty. If the pest issue returns within the warranty period, we will re-treat at no extra cost.",
  },
  {
    question: "How do I book a free inspection?",
    answer:
      "Simply fill out the contact form on this page, call us directly at +91 70111 16113, or send us a WhatsApp message. We'll schedule a convenient time for one of our technicians to visit your property and provide a detailed assessment and free quote — no obligations.",
  },
  {
    question: "What pests do you treat?",
    answer:
      "We treat a wide range of common and stubborn pests including termites, cockroaches, bed bugs, rats & mice, ants, lizards, and mosquitoes. If you have a pest not listed here, just reach out — we'll let you know if we can help.",
  },
];

const questionVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0 },
};

const answerVariants = {
  hidden: { height: 0, opacity: 0 },
  visible: {
    height: "auto",
    opacity: 1,
    transition: { duration: 0.3, ease: "easeInOut" as const },
  },
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="relative py-20 lg:py-28 bg-white overflow-hidden">
      {/* Decorative elements */}
      <motion.div
        className="absolute top-10 left-10 w-72 h-72 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(198,40,40,0.02) 0%, transparent 70%)" }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-14"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-accent/5 rounded-full text-red-accent text-sm font-semibold border border-red-accent/10 mb-4"
            >
              <Sparkles className="w-4 h-4" />
              FAQs
            </motion.span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-900 leading-tight mt-4">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-charcoal-600">
              Everything you need to know about our pest control services.
            </p>
          </motion.div>

          {/* Accordion */}
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`bg-white rounded-xl border overflow-hidden transition-all duration-300 ${
                  openIndex === index
                    ? "border-red-accent/30 shadow-lg shadow-red-accent/5"
                    : "border-charcoal-100 hover:border-charcoal-200"
                }`}
              >
                <motion.button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={openIndex === index}
                  whileHover={{ backgroundColor: "rgba(0,0,0,0.01)" }}
                >
                  <motion.span
                    className={`font-heading font-semibold text-base sm:text-lg pr-4 transition-colors duration-300 ${
                      openIndex === index ? "text-red-accent" : "text-charcoal-900"
                    }`}
                    variants={questionVariants}
                    initial="hidden"
                    whileInView="visible"
                  >
                    {faq.question}
                  </motion.span>
                  <motion.div
                    animate={{
                      rotate: openIndex === index ? 180 : 0,
                      backgroundColor: openIndex === index ? "rgba(198,40,40,0.1)" : "transparent",
                    }}
                    transition={{ duration: 0.3 }}
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                  >
                    <ChevronDown
                      className={`w-5 h-5 transition-colors duration-300 ${
                        openIndex === index ? "text-red-accent" : "text-charcoal-400"
                      }`}
                    />
                  </motion.div>
                </motion.button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      variants={answerVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      className="overflow-hidden"
                    >
                      <motion.div
                        className="px-6 pb-5 text-charcoal-600 leading-relaxed border-t border-charcoal-50 pt-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                      >
                        {faq.answer}
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Still have questions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center p-8 bg-charcoal-50 rounded-2xl border border-charcoal-100 relative overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-red-accent/5 to-transparent -skew-x-12"
              initial={{ x: "-100%" }}
              whileInView={{ x: "200%" }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 0.5 }}
            />
            <div className="relative z-10">
              <motion.div
                animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
              >
                <HelpCircle className="w-10 h-10 text-red-accent mx-auto mb-4" />
              </motion.div>
              <h3 className="font-heading font-bold text-xl text-charcoal-900 mb-2">
                Still Have Questions?
              </h3>
              <p className="text-charcoal-600 mb-6">
                Can't find the answer you're looking for? We'd love to help.
              </p>
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-red-accent text-white font-semibold rounded-full relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "200%" }}
                  transition={{ duration: 0.6 }}
                />
                <span className="relative z-10">Get in Touch</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}