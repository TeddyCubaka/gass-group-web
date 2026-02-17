"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/contexts/locale-context";
import { Building2, PenTool, HardHat, Ruler, ClipboardCheck, Home, ArrowRight, CheckCircle } from "lucide-react";

export default function BuildingPage() {
  const { locale } = useLocale();

  const services = [
    {
      icon: PenTool,
      title: locale === "fr" ? "Architecture" : "Architecture",
      desc: locale === "fr" ? "Conception architecturale innovante" : "Innovative architectural design",
    },
    {
      icon: HardHat,
      title: locale === "fr" ? "Construction" : "Construction",
      desc: locale === "fr" ? "Réalisation de projets clé en main" : "Turnkey project delivery",
    },
    {
      icon: Ruler,
      title: locale === "fr" ? "Ingénierie" : "Engineering",
      desc: locale === "fr" ? "Études techniques et structurelles" : "Technical and structural studies",
    },
    {
      icon: Building2,
      title: locale === "fr" ? "Aménagement urbain" : "Urban Planning",
      desc: locale === "fr" ? "Projets d'aménagement et urbanisme" : "Development and urban projects",
    },
    {
      icon: ClipboardCheck,
      title: locale === "fr" ? "Gestion de projets" : "Project Management",
      desc: locale === "fr" ? "Suivi et coordination complète" : "Complete monitoring and coordination",
    },
    {
      icon: Home,
      title: locale === "fr" ? "Rénovation" : "Renovation",
      desc: locale === "fr" ? "Réhabilitation et modernisation" : "Rehabilitation and modernization",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-amber-700 to-amber-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <Building2 className="w-10 h-10 text-white" />
                <span className="text-white font-semibold text-lg">GASS Building</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {locale === "fr" ? "Ingénierie et Construction" : "Engineering and Construction"}
              </h1>
              <p className="text-xl text-gray-100 mb-8">
                {locale === "fr"
                  ? "Projets de construction et d'aménagement urbain de qualité supérieure."
                  : "Superior quality construction and urban development projects."}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-amber-700 font-semibold rounded-lg hover:bg-gray-100 transition-all"
              >
                {locale === "fr" ? "Démarrer un projet" : "Start a project"}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative aspect-square rounded-2xl overflow-hidden"
            >
              <Image
                src="https://pbs.twimg.com/media/GVWhQZWWgAAclkJ.jpg"
                alt="GASS Building"
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
              {locale === "fr" ? "Nos Expertises" : "Our Expertise"}
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
                    <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-amber-700" />
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

      {/* Realizations */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-blue-950 mb-4">
              {locale === "fr" ? "Réalisations Concrètes" : "Concrete Achievements"}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <CheckCircle className="w-10 h-10 text-amber-600 mb-4" />
              <h3 className="text-xl font-bold text-blue-950 mb-3">
                {locale === "fr" ? "Projets résidentiels" : "Residential Projects"}
              </h3>
              <p className="text-gray-600">
                {locale === "fr"
                  ? "Construction de complexes résidentiels modernes et fonctionnels."
                  : "Construction of modern and functional residential complexes."}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <CheckCircle className="w-10 h-10 text-amber-600 mb-4" />
              <h3 className="text-xl font-bold text-blue-950 mb-3">
                {locale === "fr" ? "Infrastructures commerciales" : "Commercial Infrastructure"}
              </h3>
              <p className="text-gray-600">
                {locale === "fr"
                  ? "Gestion complète de projets de construction commerciale et industrielle."
                  : "Complete management of commercial and industrial construction projects."}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-amber-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {locale === "fr" ? "Concrétisez votre projet de construction" : "Make your construction project a reality"}
            </h2>
            <p className="text-xl text-white/90 mb-8">
              {locale === "fr"
                ? "Notre équipe d'experts vous accompagne de la conception à la livraison."
                : "Our team of experts supports you from design to delivery."}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-amber-700 font-bold rounded-lg hover:bg-gray-100 transition-all"
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
