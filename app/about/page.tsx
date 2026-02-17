"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLocale } from "@/contexts/locale-context";
import { Target, Eye, Heart, CheckCircle, Users, Award, Globe, Zap } from "lucide-react";

export default function AboutPage() {
  const { locale, t } = useLocale();

  const values = [
    { icon: Zap, name: locale === "fr" ? "Innovation constante" : "Constant Innovation" },
    { icon: Award, name: locale === "fr" ? "Excellence dans le service" : "Service Excellence" },
    { icon: Users, name: locale === "fr" ? "Partenariat durable" : "Lasting Partnership" },
    { icon: Heart, name: locale === "fr" ? "Écoute et adaptabilité" : "Listening and Adaptability" },
  ];

  const achievements = [
    { number: "10+", label: locale === "fr" ? "Années d'expérience" : "Years of Experience" },
    { number: "50+", label: locale === "fr" ? "Projets réalisés" : "Completed Projects" },
    { number: "100+", label: locale === "fr" ? "Clients satisfaits" : "Satisfied Clients" },
    { number: "4", label: locale === "fr" ? "Domaines d'expertise" : "Areas of Expertise" },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-blue-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {t?.about?.title}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t?.about?.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6">
                {locale === "fr" ? "Qui sommes-nous?" : "Who are we?"}
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  {locale === "fr"
                    ? "Chez GASS, nous sommes plus qu'un incubateur multiservices: nous sommes un catalyseur de réussite. Notre groupe fédère plusieurs entités spécialisées, offrant une gamme complète de solutions adaptées à vos besoins."
                    : "At GASS, we are more than a multi-service incubator: we are a catalyst for success. Our group brings together several specialized entities, offering a complete range of solutions adapted to your needs."}
                </p>
                <p>
                  {locale === "fr"
                    ? "Depuis la facilitation des affaires et le commerce général jusqu'aux services digitaux, à l'ingénierie informatique, et à la formation professionnelle, nous couvrons tous les aspects essentiels pour votre croissance."
                    : "From business facilitation and general trade to digital services, IT engineering, and professional training, we cover all essential aspects for your growth."}
                </p>
                <p className="font-semibold text-blue-950">
                  {locale === "fr"
                    ? "Votre succès n'est pas une simple ambition, c'est la raison même de notre existence."
                    : "Your success is not just an ambition, it's the very reason for our existence."}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="https://thumbs.dreamstime.com/b/african-american-team-collaborating-project-modern-office-smiling-engaged-teamwork-collaboration-corporate-diversity-401544495.jpg"
                alt="GASS Team"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-2xl shadow-lg"
            >
              <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-blue-950 mb-4">{t?.about?.mission}</h3>
              <p className="text-gray-600">
                {locale === "fr"
                  ? "Fournir à nos clients des conseils stratégiques, des formations adaptées, et un accompagnement opérationnel novateur, qui favorisent leur développement et assurent un avantage compétitif pérenne."
                  : "Provide our clients with strategic advice, adapted training, and innovative operational support that promotes their development and ensures a lasting competitive advantage."}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-10 rounded-2xl shadow-lg"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-blue-950 mb-4">{t?.about?.vision}</h3>
              <p className="text-gray-600">
                {locale === "fr"
                  ? "Nous visons à devenir le partenaire de confiance incontournable pour les professionnels et entreprises désireux d'évoluer et d'exceller, en offrant un savoir-faire unique, une écoute attentive, et un engagement sans faille."
                  : "We aim to become the essential trusted partner for professionals and businesses looking to evolve and excel, offering unique expertise, attentive listening, and unwavering commitment."}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-blue-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">{t?.about?.values}</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values?.map((value, index) => {
              const Icon = value?.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm p-8 rounded-xl text-center"
                >
                  {Icon && <Icon className="w-12 h-12 text-red-500 mx-auto mb-4" />}
                  <h3 className="font-semibold text-lg">{value?.name}</h3>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements?.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 bg-gray-50 rounded-2xl"
              >
                <p className="text-5xl font-bold text-red-600 mb-2">{item?.number}</p>
                <p className="text-gray-600 font-medium">{item?.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Domains */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-blue-950 mb-4">
              {locale === "fr" ? "Nos Domaines d'Activité" : "Our Business Areas"}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              locale === "fr" ? "Facilitation d'affaires" : "Business Facilitation",
              locale === "fr" ? "Commerce général (import/export)" : "General Trade (import/export)",
              locale === "fr" ? "Consulting et accompagnement" : "Consulting and Support",
              locale === "fr" ? "Ingénierie et construction" : "Engineering and Construction",
              locale === "fr" ? "Formation professionnelle" : "Professional Training",
              locale === "fr" ? "Solutions digitales" : "Digital Solutions",
              locale === "fr" ? "Ingénierie informatique" : "IT Engineering",
            ]?.map((domain, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center space-x-3 bg-white p-5 rounded-xl shadow-sm"
              >
                <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                <span className="font-medium text-gray-700">{domain}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
