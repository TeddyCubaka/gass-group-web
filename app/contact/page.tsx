"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLocale } from "@/contexts/locale-context";
import { Phone, Mail, MapPin, Send, CheckCircle, AlertCircle, Clock } from "lucide-react";

export default function ContactPage() {
  const { locale, t } = useLocale();
  const [formType, setFormType] = useState<"contact" | "quote">("contact");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
    service: "",
    budget: "",
    timeline: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const endpoint = formType === "contact" ? "/api/contact" : "/api/quote";
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data?.success) {
        setSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          subject: "",
          message: "",
          service: "",
          budget: "",
          timeline: "",
        });
      } else {
        setError(data?.error || "Une erreur est survenue");
      }
    } catch {
      setError("Une erreur est survenue");
    } finally {
      setLoading(false);
    }
  };

  const services = [
    "GASS Technologies",
    "GASS Security",
    "GASS Building",
    "GASS Consulting",
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-blue-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {t?.contact?.title}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t?.contact?.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1 space-y-8"
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold text-blue-950 mb-6">
                  {locale === "fr" ? "Informations de contact" : "Contact Information"}
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-blue-950">{locale === "fr" ? "Téléphone" : "Phone"}</h3>
                      <p className="text-gray-600">+243 822 790 420</p>
                      <p className="text-gray-600">+243 898 900 907</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-blue-950">Email</h3>
                      <a href="mailto:contact@gass-group.com" className="text-gray-600 hover:text-red-600">
                        contact@gass-group.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-blue-950">{locale === "fr" ? "Adresse" : "Address"}</h3>
                      <p className="text-gray-600">
                        63, Avenue Colonel Mondjiba,<br />
                        Ngaliema Concession Cotex,<br />
                        Kinshasa, RDC
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-blue-950">{locale === "fr" ? "Horaires" : "Hours"}</h3>
                      <p className="text-gray-600">
                        {locale === "fr" ? "Lun - Ven: 8h00 - 17h00" : "Mon - Fri: 8:00 AM - 5:00 PM"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                {/* Form Type Toggle */}
                <div className="flex space-x-4 mb-8">
                  <button
                    onClick={() => setFormType("contact")}
                    className={`flex-1 py-3 rounded-lg font-semibold transition-all ${
                      formType === "contact"
                        ? "bg-red-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {locale === "fr" ? "Message" : "Message"}
                  </button>
                  <button
                    onClick={() => setFormType("quote")}
                    className={`flex-1 py-3 rounded-lg font-semibold transition-all ${
                      formType === "quote"
                        ? "bg-red-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {locale === "fr" ? "Demande de devis" : "Quote Request"}
                  </button>
                </div>

                {success ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-blue-950 mb-2">
                      {locale === "fr" ? "Message envoyé!" : "Message sent!"}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {locale === "fr"
                        ? "Nous vous répondrons dans les plus brefs délais."
                        : "We will respond to you as soon as possible."}
                    </p>
                    <button
                      onClick={() => setSuccess(false)}
                      className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                    >
                      {locale === "fr" ? "Envoyer un autre message" : "Send another message"}
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {t?.contact?.name} *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {t?.contact?.email} *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {t?.contact?.phone}
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {t?.contact?.company}
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t?.contact?.service}
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      >
                        <option value="">{locale === "fr" ? "Sélectionnez un service" : "Select a service"}</option>
                        {services?.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    {formType === "contact" && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {t?.contact?.subject} *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        />
                      </div>
                    )}

                    {formType === "quote" && (
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            {locale === "fr" ? "Budget estimé" : "Estimated Budget"}
                          </label>
                          <input
                            type="text"
                            value={formData.budget}
                            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            {locale === "fr" ? "Délai souhaité" : "Desired Timeline"}
                          </label>
                          <input
                            type="text"
                            value={formData.timeline}
                            onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                          />
                        </div>
                      </div>
                    )}

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t?.contact?.message} *
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
                      />
                    </div>

                    {error && (
                      <div className="flex items-center space-x-2 text-red-600">
                        <AlertCircle className="w-5 h-5" />
                        <span>{error}</span>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50 flex items-center justify-center space-x-2"
                    >
                      {loading ? (
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span>{t?.contact?.send}</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
