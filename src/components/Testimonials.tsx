import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles } from "lucide-react";

/*
  PLACEHOLDER TESTIMONIALS — replace with real client reviews before launch.
  These are fictional but realistic names and quotes for India.
  Source real testimonials from Google Business or client feedback.
*/
const testimonials = [
  {
    name: "Arun Mehta",
    location: "Dwarka, New Delhi",
    rating: 5,
    text: "Excellent service! The team came on time, explained the entire treatment process, and the follow-up visit was really thorough. No sign of termites since the treatment.",
    initials: "AM",
  },
  {
    name: "Priya Sharma",
    location: "Janakpuri, New Delhi",
    rating: 5,
    text: "We had a severe cockroach problem in our kitchen. After one session with Urban Pest Dial, the difference was night and day. Very professional and reasonably priced.",
    initials: "PS",
  },
  {
    name: "Vikram Singh",
    location: "Mahavir Enclave, New Delhi",
    rating: 5,
    text: "Bed bugs were giving us sleepless nights. The technician was very understanding and did a detailed mattress and furniture treatment. Highly recommended for home pest issues.",
    initials: "VS",
  },
  {
    name: "Sneha Patel",
    location: "Najafgarh, New Delhi",
    rating: 5,
    text: "I appreciate how they use pet-safe products. Our dog is always running around the house, so this was a major concern. Effective treatment and no side effects. Great team!",
    initials: "SP",
  },
  {
    name: "Rajesh Kumar",
    location: "Uttam Nagar, New Delhi",
    rating: 5,
    text: "Regular pest control is so important for restaurants. Urban Pest Dial has been servicing our eatery for 6 months now. Always on time, very professional, and the results speak for themselves.",
    initials: "RK",
  },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 200 : -200,
    opacity: 0,
    scale: 0.95,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -200 : 200,
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.3, ease: "easeIn" as const },
  }),
};

export default function Testimonials() {
  const [[current, direction], setCurrent] = useState([0, 0]);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const paginate = useCallback((newDirection: number) => {
    setCurrent(([prev]) => {
      const next = prev + newDirection;
      if (next < 0) return [testimonials.length - 1, newDirection];
      if (next >= testimonials.length) return [0, newDirection];
      return [next, newDirection];
    });
    setIsAutoPlaying(false);
    // Resume auto-play after 5 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 5000);
  }, []);

  const goTo = (index: number) => {
    const dir = index > current ? 1 : -1;
    setCurrent([index, dir]);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  // Auto-play
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      paginate(1);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, paginate]);

  return (
    <section className="relative py-20 lg:py-28 bg-charcoal-50 overflow-hidden">
      {/* Decorative background */}
      <motion.div
        className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(198,40,40,0.03) 0%, transparent 70%)" }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-64 h-64 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(245,158,11,0.02) 0%, transparent 70%)" }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
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
            Testimonials
          </motion.span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-900 leading-tight mt-4">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg text-charcoal-600">
            Real feedback from homeowners and businesses across Delhi NCR.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="bg-white rounded-2xl p-8 sm:p-10 shadow-lg border border-charcoal-100"
              >
                {/* Quote icon */}
                <motion.div
                  initial={{ scale: 0, rotate: -20 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
                >
                  <Quote className="w-10 h-10 text-red-accent/20 mb-6" />
                </motion.div>

                {/* Stars */}
                <motion.div
                  className="flex gap-1 mb-5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.15 }}
                >
                  {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2 + i * 0.1, type: "spring" }}
                    >
                      <Star className="w-5 h-5 fill-amber-accent text-amber-accent" />
                    </motion.div>
                  ))}
                </motion.div>

                {/* Text */}
                <motion.p
                  className="text-charcoal-700 text-lg leading-relaxed italic mb-8"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  "{testimonials[current].text}"
                </motion.p>

                {/* Author */}
                <motion.div
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <motion.div
                    className="w-12 h-12 bg-red-accent/10 rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(198,40,40,0.2)" }}
                  >
                    <span className="font-heading font-bold text-red-accent">
                      {testimonials[current].initials}
                    </span>
                  </motion.div>
                  <div>
                    <p className="font-heading font-bold text-charcoal-900">
                      {testimonials[current].name}
                    </p>
                    <p className="text-charcoal-400 text-sm">
                      {testimonials[current].location}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <motion.button
                onClick={() => paginate(-1)}
                className="w-10 h-10 rounded-full bg-white border border-charcoal-200 flex items-center justify-center hover:bg-charcoal-50 hover:border-red-accent/50 transition-colors"
                aria-label="Previous testimonial"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="w-5 h-5 text-charcoal-600" />
              </motion.button>

              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <motion.button
                    key={i}
                    onClick={() => goTo(i)}
                    className={`rounded-full transition-all duration-300 ${
                      i === current ? "bg-red-accent" : "bg-charcoal-300"
                    }`}
                    style={{ width: i === current ? 24 : 10, height: 10 }}
                    aria-label={`Go to testimonial ${i + 1}`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                    layout
                  />
                ))}
              </div>

              <motion.button
                onClick={() => paginate(1)}
                className="w-10 h-10 rounded-full bg-white border border-charcoal-200 flex items-center justify-center hover:bg-charcoal-50 hover:border-red-accent/50 transition-colors"
                aria-label="Next testimonial"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="w-5 h-5 text-charcoal-600" />
              </motion.button>
            </div>

            {/* Auto-play indicator */}
            <motion.div
              className="flex justify-center mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <div className="flex gap-1">
                {testimonials.map((_, i) => (
                  <motion.div
                    key={i}
                    className="h-1 rounded-full bg-charcoal-200 overflow-hidden"
                    style={{ width: i === current ? 40 : 8 }}
                  >
                    {i === current && isAutoPlaying && (
                      <motion.div
                        className="h-full bg-red-accent rounded-full"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 4, ease: "linear" }}
                        key={current}
                      />
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}