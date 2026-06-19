import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, X } from "lucide-react";
import {
  PHONE_PRIMARY,
  PHONE_PRIMARY_LINK,
  PHONE_SECONDARY,
  PHONE_SECONDARY_LINK,
  WHATSAPP_NUMBER,
} from "../config";

export default function FloatingActions() {
  const [showCallOptions, setShowCallOptions] = useState(false);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C%20I%20found%20your%20website%20and%20I%27m%20interested%20in%20pest%20control%20services.`;

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
      initial={{ opacity: 0, scale: 0.5, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
    >
      {/* Call Options Popover */}
      <AnimatePresence>
        {showCallOptions && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="bg-white rounded-2xl shadow-2xl border border-charcoal-100 overflow-hidden mb-2"
          >
            <div className="p-3 space-y-1">
              <p className="text-xs font-semibold text-charcoal-400 uppercase tracking-wider px-3 pb-1">
                Call Us
              </p>
              {[
                { label: "Primary", phone: PHONE_PRIMARY, link: PHONE_PRIMARY_LINK },
                { label: "Secondary", phone: PHONE_SECONDARY, link: PHONE_SECONDARY_LINK },
              ].map((item, i) => (
                <motion.a
                  key={item.label}
                  href={`tel:${item.link}`}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-charcoal-50 transition-colors group"
                  whileHover={{ x: 3 }}
                >
                  <motion.div
                    className="w-8 h-8 bg-green-50 rounded-full flex items-center justify-center group-hover:bg-green-100 transition-colors"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Phone className="w-4 h-4 text-green-600" />
                  </motion.div>
                  <div>
                    <p className="text-xs text-charcoal-400">{item.label}</p>
                    <p className="text-sm font-semibold text-charcoal-900">{item.phone}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Buttons */}
      <div className="flex flex-col items-end gap-3">
        {/* WhatsApp Button */}
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative"
          aria-label="Chat on WhatsApp"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          {/* Tooltip */}
          <motion.span
            className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-charcoal-900 text-white text-xs font-medium px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none"
            initial={{ x: 5 }}
            whileHover={{ x: 0 }}
          >
            Chat on WhatsApp
          </motion.span>
          <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 pulse-green hover:scale-110 transition-transform duration-200">
            <MessageCircle className="w-7 h-7 text-white" />
          </div>
        </motion.a>

        {/* Call Button */}
        <motion.div
          className="group relative"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {/* Tooltip */}
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-charcoal-900 text-white text-xs font-medium px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Call Us
          </span>
          <motion.button
            onClick={() => setShowCallOptions(!showCallOptions)}
            className="w-14 h-14 bg-red-accent rounded-full flex items-center justify-center shadow-lg shadow-red-accent/30 pulse-red hover:scale-110 transition-transform duration-200"
            aria-label="Call us"
            animate={{ rotate: showCallOptions ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {showCallOptions ? (
              <X className="w-7 h-7 text-white" />
            ) : (
              <Phone className="w-7 h-7 text-white" />
            )}
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
}