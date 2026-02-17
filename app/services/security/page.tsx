"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/contexts/locale-context";
import { Shield, Camera, Users, Clock, Car, Dog, ArrowRight, CheckCircle } from "lucide-react";

export default function SecurityPage() {
  const { locale } = useLocale();

  const services = [
    {
      icon: Shield,
      title: locale === "fr" ? "Gardiennage résidentiel & commercial" : "Residential & Commercial Guarding",
      desc: locale === "fr" ? "Protection permanente de vos locaux" : "Permanent protection of your premises",
    },
    {
      icon: Users,
      title: locale === "fr" ? "Sécurité événementielle" : "Event Security",
      desc: locale === "fr" ? "Gestion sécuritaire de vos événements" : "Security management for your events",
    },
    {
      icon: Shield,
      title: locale === "fr" ? "Protection rapprochée VIP" : "VIP Close Protection",
      desc: locale === "fr" ? "Accompagnement sécuritaire personnalisé" : "Personalized security escort",
    },
    {
      icon: Car,
      title: locale === "fr" ? "Rondes de surveillance" : "Surveillance Patrols",
      desc: locale === "fr" ? "Intervention rapide et rondes régulières" : "Quick response and regular patrols",
    },
    {
      icon: Camera,
      title: locale === "fr" ? "Sécurité technologique" : "Technology Security",
      desc: locale === "fr" ? "Contrôle d'accès et vidéosurveillance" : "Access control and video surveillance",
    },
    {
      icon: Dog,
      title: locale === "fr" ? "Unités cynophiles" : "K-9 Units",
      desc: locale === "fr" ? "Maîtres-chiens et unités spécialisées" : "Dog handlers and specialized units",
    },
  ];

  const advantages = [
    { icon: CheckCircle, text: locale === "fr" ? "Agents formés et certifiés" : "Trained and certified agents" },
    { icon: CheckCircle, text: locale === "fr" ? "Équipements modernes et adaptés" : "Modern and adapted equipment" },
    { icon: CheckCircle, text: locale === "fr" ? "Sécurité fiable 24h/24 - 7j/7" : "Reliable security 24/7" },
    { icon: CheckCircle, text: locale === "fr" ? "Solutions personnalisées" : "Customized solutions" },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-red-900 to-red-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <Shield className="w-10 h-10 text-white" />
                <span className="text-white font-semibold text-lg">GASS Security</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {locale === "fr" ? "Votre Sécurité, Notre Mission" : "Your Security, Our Mission"}
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                {locale === "fr"
                  ? "Protection des biens et des personnes avec efficacité, technologie et fiabilité."
                  : "Protection of assets and people with efficiency, technology and reliability."}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-red-600 font-semibold rounded-lg hover:bg-gray-100 transition-all"
              >
                {locale === "fr" ? "Demander une évaluation" : "Request an assessment"}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative aspect-square rounded-2xl overflow-hidden"
            >
              <Image
                src="https://cdn.abacus.ai/images/cf50c509-911f-42e0-9e10-3efaaeb01794.png"
                alt="GASS Security"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-blue-950 mb-4">
              {locale === "fr" ? "Nos Domaines d'Intervention" : "Our Areas of Intervention"}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services?.map((service, index) => {
              const Icon = service?.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow"
                >
                  {Icon && (
                    <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-red-600" />
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-blue-950 mb-3">{service?.title}</h3>
                  <p className="text-gray-600">{service?.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-24 bg-blue-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              {locale === "fr" ? "Nos Atouts" : "Our Strengths"}
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages?.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center space-x-3 bg-white/10 p-6 rounded-xl"
              >
                <CheckCircle className="w-6 h-6 text-red-500 flex-shrink-0" />
                <span className="font-medium">{item?.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-blue-950 mb-6">
                {locale === "fr" ? "Nos Engagements" : "Our Commitments"}
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Clock className="w-8 h-8 text-red-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-blue-950 mb-1">
                      {locale === "fr" ? "Sécurité fiable 24h/24 - 7j/7" : "Reliable security 24/7"}
                    </h3>
                    <p className="text-gray-600">
                      {locale === "fr" ? "Disponibilité permanente pour votre protection" : "Permanent availability for your protection"}
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Shield className="w-8 h-8 text-red-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-blue-950 mb-1">
                      {locale === "fr" ? "Prévention proactive" : "Proactive Prevention"}
                    </h3>
                    <p className="text-gray-600">
                      {locale === "fr" ? "Anticiper les risques avant qu'ils ne surviennent" : "Anticipating risks before they occur"}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-video rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="https://c8.alamy.com/comp/2XTBTDJ/african-american-male-security-operator-or-dispatch-in-uniform-uses-tablet-computer-looks-at-screens-sitting-at-the-workplace-in-monitoring-center-during-night-shift-surveillance-system-and-cctv-2XTBTDJ.jpg"
                alt="Security Operations"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {locale === "fr" ? "Évaluation gratuite et devis sur mesure" : "Free assessment and custom quote"}
            </h2>
            <p className="text-xl text-white/90 mb-8">
              {locale === "fr"
                ? "GASS SECURITY bénéficie de la force d'un groupe multiservices actif dans la technologie, l'ingénierie et le consulting."
                : "GASS SECURITY benefits from the strength of a multi-service group active in technology, engineering and consulting."}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-red-600 font-bold rounded-lg hover:bg-gray-100 transition-all"
            >
              {locale === "fr" ? "Demander un devis" : "Request a quote"}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
