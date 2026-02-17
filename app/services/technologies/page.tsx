"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/contexts/locale-context";
import { Monitor, Code, Cloud, Database, Shield, Smartphone, ArrowRight, CheckCircle } from "lucide-react";

export default function TechnologiesPage() {
  const { locale } = useLocale();

  const services = [
    {
      icon: Code,
      title: locale === "fr" ? "Développement sur mesure" : "Custom Development",
      desc: locale === "fr" ? "Applications web et mobiles adaptées à vos besoins" : "Web and mobile applications tailored to your needs",
    },
    {
      icon: Cloud,
      title: locale === "fr" ? "Solutions Cloud" : "Cloud Solutions",
      desc: locale === "fr" ? "Infrastructure cloud sécurisée et évolutive" : "Secure and scalable cloud infrastructure",
    },
    {
      icon: Database,
      title: locale === "fr" ? "Gestion de données" : "Data Management",
      desc: locale === "fr" ? "Solutions de base de données et analytics" : "Database solutions and analytics",
    },
    {
      icon: Shield,
      title: locale === "fr" ? "Cybersécurité" : "Cybersecurity",
      desc: locale === "fr" ? "Protection de vos systèmes et données" : "Protection of your systems and data",
    },
    {
      icon: Smartphone,
      title: locale === "fr" ? "Transformation digitale" : "Digital Transformation",
      desc: locale === "fr" ? "Accompagnement vers le numérique" : "Support towards digital",
    },
    {
      icon: Monitor,
      title: locale === "fr" ? "Maintenance IT" : "IT Maintenance",
      desc: locale === "fr" ? "Support technique et maintenance continue" : "Technical support and ongoing maintenance",
    },
  ];

  const benefits = [
    locale === "fr" ? "Solutions personnalisées selon vos besoins" : "Customized solutions for your needs",
    locale === "fr" ? "Équipe d'experts certifiés" : "Team of certified experts",
    locale === "fr" ? "Support 24/7 disponible" : "24/7 support available",
    locale === "fr" ? "Technologies de pointe" : "Cutting-edge technologies",
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-blue-900 to-blue-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <Monitor className="w-10 h-10 text-red-500" />
                <span className="text-red-500 font-semibold text-lg">GASS Technologies</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {locale === "fr" ? "Solutions IT et Digitales Innovantes" : "Innovative IT and Digital Solutions"}
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                {locale === "fr"
                  ? "Accompagnez votre transformation numérique avec nos solutions technologiques sur mesure."
                  : "Support your digital transformation with our tailored technology solutions."}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-all"
              >
                {locale === "fr" ? "Demander un devis" : "Request a quote"}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative aspect-square rounded-2xl overflow-hidden"
            >
              <Image
                src="https://as2.ftcdn.net/jpg/04/74/45/97/1000_F_474459732_YlqlIWzhx3eCz7nIONzGjDVVoVkAxZ3n.jpg"
                alt="GASS Technologies"
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
              {locale === "fr" ? "Nos Services" : "Our Services"}
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
                    <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-blue-600" />
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

      {/* Benefits */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-blue-950 mb-8">
                {locale === "fr" ? "Pourquoi nous choisir?" : "Why choose us?"}
              </h2>
              <div className="space-y-4">
                {benefits?.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-video rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="https://techcrunch.com/wp-content/uploads/2023/05/1EF0E6DC-0C23-4DA9-B072-5B7CE97738D4.jpeg?w=1024"
                alt="IT Solutions"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-blue-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {locale === "fr" ? "Prêt à transformer votre entreprise?" : "Ready to transform your business?"}
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              {locale === "fr"
                ? "Contactez-nous pour une évaluation gratuite de vos besoins technologiques."
                : "Contact us for a free assessment of your technology needs."}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-all"
            >
              {locale === "fr" ? "Contactez-nous" : "Contact us"}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
