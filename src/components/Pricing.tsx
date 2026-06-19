import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Check, ArrowRight, Info } from "lucide-react";

interface PriceRow {
  label: string;
  price: string;
}

interface PriceGroup {
  id: string;
  name: string;
  subtitle: string;
  warranty: string;
  warrantyColor: string;
  rows: PriceRow[];
}

const priceGroups: PriceGroup[] = [
  {
    id: "termite",
    name: "Anti-Termite Treatment",
    subtitle: "Comprehensive soil & wood treatment",
    warranty: "1 Year Warranty",
    warrantyColor: "bg-green-50 text-green-700 border-green-200",
    rows: [
      { label: "1 BHK Flat", price: "₹2,999" },
      { label: "2 BHK Flat", price: "₹3,999" },
      { label: "3 BHK Flat", price: "₹4,999" },
      { label: "4 BHK Flat", price: "₹5,999" },
      { label: "5 BHK Flat", price: "₹6,999" },
      { label: "Bungalow", price: "₹8,500" },
    ],
  },
  {
    id: "combo",
    name: "Combo Pest Control",
    subtitle: "Cockroach, Ants, Lizards, Mosquitos & Rodents",
    warranty: "3 Months Warranty",
    warrantyColor: "bg-blue-50 text-blue-700 border-blue-200",
    rows: [
      { label: "1 BHK Flat", price: "₹1,199" },
      { label: "2 BHK Flat", price: "₹1,299" },
      { label: "3 BHK Flat", price: "₹1,399" },
      { label: "4 BHK Flat", price: "₹1,499" },
      { label: "5 BHK Flat", price: "₹1,599" },
      { label: "Kitchen Only", price: "₹1,099" },
    ],
  },
  {
    id: "bedbugs",
    name: "Bed Bugs Treatment",
    subtitle: "Deep mattress & furniture treatment",
    warranty: "3 Months Warranty",
    warrantyColor: "bg-purple-50 text-purple-700 border-purple-200",
    rows: [
      { label: "1 BHK", price: "₹1,899" },
      { label: "2 BHK", price: "₹2,099" },
      { label: "3 BHK", price: "₹2,399" },
      { label: "4 BHK", price: "₹2,499" },
    ],
  },
];

const tabVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Pricing() {
  const [activeTab, setActiveTab] = useState(priceGroups[0].id);

  const activeGroup = priceGroups.find((g) => g.id === activeTab)!;

  return (
    <section id="pricing" className="relative py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-accent/5 rounded-full text-red-accent text-sm font-semibold border border-red-accent/10 mb-4">
            Pricing
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-900 leading-tight mt-4">
            Transparent, Affordable Pricing
          </h2>
          <p className="mt-4 text-lg text-charcoal-600">
            No hidden charges. Choose your service and property type for an instant quote.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {priceGroups.map((group) => (
            <button
              key={group.id}
              onClick={() => setActiveTab(group.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 border ${
                activeTab === group.id
                  ? "bg-red-accent text-white border-red-accent shadow-lg shadow-red-accent/25"
                  : "bg-white text-charcoal-600 border-charcoal-200 hover:border-red-accent/50 hover:text-red-accent"
              }`}
            >
              {group.name}
            </button>
          ))}
        </div>

        {/* Pricing Table */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={tabVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="max-w-2xl mx-auto"
          >
            <div className="bg-white rounded-2xl border border-charcoal-100 overflow-hidden shadow-lg">
              {/* Header */}
              <div className="p-6 sm:p-8 bg-gradient-to-br from-charcoal-50 to-white border-b border-charcoal-100">
                <div className="flex items-start justify-between flex-wrap gap-3">
                  <div>
                    <h3 className="font-heading font-bold text-xl text-charcoal-900">
                      {activeGroup.name}
                    </h3>
                    <p className="text-charcoal-500 text-sm mt-1">{activeGroup.subtitle}</p>
                  </div>
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold border ${activeGroup.warrantyColor}`}
                  >
                    <Shield className="w-3.5 h-3.5" />
                    {activeGroup.warranty}
                  </span>
                </div>
              </div>

              {/* Rows */}
              <div className="divide-y divide-charcoal-50">
                {activeGroup.rows.map((row, index) => (
                  <motion.div
                    key={row.label}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center justify-between px-6 sm:px-8 py-4 hover:bg-charcoal-50/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3.5 h-3.5 text-green-600" />
                      </div>
                      <span className="font-medium text-charcoal-700">
                        {row.label}
                      </span>
                    </div>
                    <span className="font-heading font-bold text-lg text-charcoal-900">
                      {row.price}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-8">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-8 py-3.5 bg-red-accent text-white font-semibold rounded-full hover:bg-red-accent-dark transition-all duration-200 shadow-lg shadow-red-accent/25"
              >
                Get a Custom Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-charcoal-400 mt-8 flex items-center justify-center gap-1.5"
        >
          <Info className="w-4 h-4" />
          Prices may vary based on property size and infestation severity. Contact us for an exact quote.
        </motion.p>
      </div>
    </section>
  );
}