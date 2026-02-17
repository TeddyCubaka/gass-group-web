"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/contexts/locale-context";
import { Users, Briefcase, TrendingUp, FileText, Target, Handshake, ArrowRight, CheckCircle } from "lucide-react";

export default function ConsultingPage() {
  const { locale } = useLocale();

  const services = [
    {
      icon: Briefcase,
      title: locale === "fr" ? "Création d'entreprise" : "Business Creation",
      desc: locale === "fr" ? "Accompagnement complet pour lancer votre activité" : "Complete support to launch your business",
    },
    {
      icon: FileText,
      title: locale === "fr" ? "Business Plans" : "Business Plans",
      desc: locale === "fr" ? "Élaboration de plans d'affaires solides" : "Development of solid business plans",
    },
    {
      icon: TrendingUp,
      title: locale === "fr" ? "Études de marché" : "Market Studies",
      desc: locale === "fr" ? "Analyse approfondie de votre marché cible" : "In-depth analysis of your target market",
    },
    {
      icon: Target,
      title: locale === "fr" ? "Stratégie d'affaires" : "Business Strategy",
      desc: locale === "fr" ? "Conseils stratégiques pour votre croissance" : "Strategic advice for your growth",
    },
    {
      icon: Handshake,
      title: locale === "fr" ? "Club d'affaires" : "Business Club",
      desc: locale === "fr" ? "Réseau d'entrepreneurs et opportunités" : "Network of entrepreneurs and opportunities",
    },
    {
      icon: Users,
      title: locale === "fr" ? "Formation en entrepreneuriat" : "Entrepreneurship Training",
      desc: locale === "fr" ? "Formations adaptées aux entrepreneurs" : "Training adapted to entrepreneurs",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-green-700 to-green-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <Users className="w-10 h-10 text-white" />
                <span className="text-white font-semibold text-lg">GASS Consulting</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {locale === "fr" ? "Cabinet de Conseil pour Entrepreneurs" : "Consulting Firm for Entrepreneurs"}
              </h1>
              <p className="text-xl text-gray-100 mb-8">
                {locale === "fr"
                  ? "Accompagnement stratégique pour le développement et la croissance de votre entreprise."
                  : "Strategic support for the development and growth of your business."}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-green-700 font-semibold rounded-lg hover:bg-gray-100 transition-all"
              >
                {locale === "fr" ? "Prendre rendez-vous" : "Book an appointment"}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative aspect-square rounded-2xl overflow-hidden"
            >
              <Image
                src="https://www.hayes-consultants.com/professional-african-business-team-meeting.jpg"
                alt="GASS Consulting"
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
              {locale === "fr" ? "Nos Services de Conseil" : "Our Consulting Services"}
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
                    <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-green-700" />
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

      {/* Approach */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-video rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="https://thumbs.dreamstime.com/b/satisfied-professional-african-american-businessman-ceo-shaking-hands-asian-male-business-partner-meeting-287924810.jpg"
                alt="Business Partnership"
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-blue-950 mb-6">
                {locale === "fr" ? "Notre Approche" : "Our Approach"}
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-600">
                    {locale === "fr"
                      ? "Accompagnement stratégique pour le développement commercial et la croissance de PME"
                      : "Strategic support for commercial development and SME growth"}
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-600">
                    {locale === "fr"
                      ? "Conseils en affaires et investissements personnalisés"
                      : "Personalized business and investment advice"}
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-600">
                    {locale === "fr"
                      ? "Mise en place de programmes de formation adaptés aux besoins spécifiques"
                      : "Implementation of training programs adapted to specific needs"}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-green-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {locale === "fr" ? "Développez votre entreprise avec nos experts" : "Grow your business with our experts"}
            </h2>
            <p className="text-xl text-white/90 mb-8">
              {locale === "fr"
                ? "Bénéficiez d'un accompagnement personnalisé pour atteindre vos objectifs."
                : "Benefit from personalized support to achieve your goals."}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-green-700 font-bold rounded-lg hover:bg-gray-100 transition-all"
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
