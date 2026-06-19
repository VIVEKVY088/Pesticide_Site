import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  MapPin,
  Send,
  Loader2,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import {
  PHONE_PRIMARY,
  PHONE_PRIMARY_LINK,
  PHONE_SECONDARY,
  WHATSAPP_NUMBER,
  COMPANY_ADDRESS,
  GOOGLE_MAPS_EMBED,
  SERVICES,
  PROPERTY_TYPES,
} from "../config";

interface FormData {
  name: string;
  phone: string;
  address: string;
  service: string;
  propertyType: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
}

const initialForm: FormData = {
  name: "",
  phone: "",
  address: "",
  service: "",
  propertyType: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) {
      newErrors.name = "Please enter your name";
    }
    if (!form.phone.trim()) {
      newErrors.phone = "Please enter your phone number";
    } else if (!/^[+]?[\d\s-]{10,15}$/.test(form.phone.trim())) {
      newErrors.phone = "Please enter a valid phone number";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);

    // Build WhatsApp message
    const message = [
      "New Inquiry — Urban Pest Dial Services Website",
      `Name: ${form.name.trim()}`,
      `Phone: ${form.phone.trim()}`,
      `Address: ${form.address.trim() || "Not provided"}`,
      `Service Needed: ${form.service || "Not specified"}`,
      `Property Type: ${form.propertyType || "Not specified"}`,
      `Details: ${form.message.trim() || "Not provided"}`,
    ].join("\n");

    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;

    // Simulate brief delay for UX, then redirect
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      window.open(whatsappUrl, "_blank");
    }, 800);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section id="contact" className="relative py-20 lg:py-28 bg-charcoal-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-accent/5 rounded-full text-red-accent text-sm font-semibold border border-red-accent/10 mb-4">
            Contact Us
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-900 leading-tight mt-4">
            Get Your Free Quote Today
          </h2>
          <p className="mt-4 text-lg text-charcoal-600">
            Fill out the form below and we'll get back to you within minutes via WhatsApp.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Form Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-2xl p-10 shadow-lg border border-charcoal-100 text-center"
              >
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-5">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-heading font-bold text-2xl text-charcoal-900 mb-2">
                  Message Sent!
                </h3>
                <p className="text-charcoal-600 mb-6">
                  WhatsApp should open with your inquiry pre-filled. Just hit send to reach us.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm(initialForm);
                  }}
                  className="px-6 py-3 bg-charcoal-100 text-charcoal-700 font-semibold rounded-full hover:bg-charcoal-200 transition-colors"
                >
                  Send Another Inquiry
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-charcoal-100 space-y-5"
                noValidate
              >
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-charcoal-700 mb-1.5">
                    Full Name <span className="text-red-accent">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.name ? "border-red-400 ring-2 ring-red-100" : "border-charcoal-200"
                    } bg-white text-charcoal-900 placeholder-charcoal-400 focus:outline-none focus:ring-2 focus:ring-red-accent/20 focus:border-red-accent transition-all`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-charcoal-700 mb-1.5">
                    Phone Number <span className="text-red-accent">*</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.phone ? "border-red-400 ring-2 ring-red-100" : "border-charcoal-200"
                    } bg-white text-charcoal-900 placeholder-charcoal-400 focus:outline-none focus:ring-2 focus:ring-red-accent/20 focus:border-red-accent transition-all`}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* Address */}
                <div>
                  <label htmlFor="address" className="block text-sm font-semibold text-charcoal-700 mb-1.5">
                    Address / Locality
                  </label>
                  <input
                    id="address"
                    name="address"
                    type="text"
                    value={form.address}
                    onChange={handleChange}
                    placeholder="Your address or locality"
                    className="w-full px-4 py-3 rounded-xl border border-charcoal-200 bg-white text-charcoal-900 placeholder-charcoal-400 focus:outline-none focus:ring-2 focus:ring-red-accent/20 focus:border-red-accent transition-all"
                  />
                </div>

                {/* Service + Property Type row */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-charcoal-700 mb-1.5">
                      Service Needed
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-charcoal-200 bg-white text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-red-accent/20 focus:border-red-accent transition-all appearance-none"
                    >
                      <option value="">Select a service</option>
                      {SERVICES.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                      <option value="Other / Custom">Other / Custom</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="propertyType" className="block text-sm font-semibold text-charcoal-700 mb-1.5">
                      Property Type
                    </label>
                    <select
                      id="propertyType"
                      name="propertyType"
                      value={form.propertyType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-charcoal-200 bg-white text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-red-accent/20 focus:border-red-accent transition-all appearance-none"
                    >
                      <option value="">Select property type</option>
                      {PROPERTY_TYPES.map((p) => (
                        <option key={p} value={p}>
                          {p}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-charcoal-700 mb-1.5">
                    Additional Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Describe your pest problem or any special requests..."
                    className="w-full px-4 py-3 rounded-xl border border-charcoal-200 bg-white text-charcoal-900 placeholder-charcoal-400 focus:outline-none focus:ring-2 focus:ring-red-accent/20 focus:border-red-accent transition-all resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-red-accent text-white font-semibold rounded-full hover:bg-red-accent-dark transition-all duration-200 shadow-lg shadow-red-accent/25 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send via WhatsApp
                    </>
                  )}
                </button>

                <p className="text-xs text-charcoal-400 text-center">
                  By submitting, you agree to receive a WhatsApp response from Urban Pest Dial Services.
                  Your data will not be shared with third parties.
                </p>
              </form>
            )}
          </motion.div>

          {/* Info Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Contact Info Cards */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-charcoal-100 space-y-5">
              <h3 className="font-heading font-bold text-lg text-charcoal-900">
                Reach Us Directly
              </h3>

              <a
                href={`tel:${PHONE_PRIMARY_LINK}`}
                className="flex items-center gap-4 p-3 rounded-xl hover:bg-charcoal-50 transition-colors group"
              >
                <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-red-100 transition-colors">
                  <Phone className="w-5 h-5 text-red-accent" />
                </div>
                <div>
                  <p className="text-xs text-charcoal-400 font-medium">Call Primary</p>
                  <p className="font-semibold text-charcoal-900">{PHONE_PRIMARY}</p>
                </div>
              </a>

              <a
                href={`tel:+918650113744`}
                className="flex items-center gap-4 p-3 rounded-xl hover:bg-charcoal-50 transition-colors group"
              >
                <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-red-100 transition-colors">
                  <Phone className="w-5 h-5 text-red-accent" />
                </div>
                <div>
                  <p className="text-xs text-charcoal-400 font-medium">Call Secondary</p>
                  <p className="font-semibold text-charcoal-900">{PHONE_SECONDARY}</p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-3 rounded-xl">
                <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-red-accent" />
                </div>
                <div>
                  <p className="text-xs text-charcoal-400 font-medium">Visit Us</p>
                  <p className="font-medium text-charcoal-700 text-sm leading-relaxed">
                    {COMPANY_ADDRESS}
                  </p>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="rounded-2xl overflow-hidden shadow-lg border border-charcoal-100">
              <iframe
                title="Urban Pest Dial Services Location"
                src={GOOGLE_MAPS_EMBED}
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Quick CTA */}
            <div className="bg-gradient-to-br from-red-accent to-red-accent-dark rounded-2xl p-6 text-white text-center">
              <p className="font-heading font-bold text-lg mb-1">Need Urgent Help?</p>
              <p className="text-white/80 text-sm mb-4">
                We offer same-day service in most areas.
              </p>
              <a
                href={`tel:${PHONE_PRIMARY_LINK}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-red-accent font-semibold rounded-full hover:bg-charcoal-50 transition-colors"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}