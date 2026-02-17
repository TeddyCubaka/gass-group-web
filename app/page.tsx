"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useLocale } from "@/contexts/locale-context";
import { ArrowRight, Monitor, Shield, Building2, Users, CheckCircle, Target, Eye, Heart } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

export default function HomePage() {
  const { t, locale } = useLocale();

  const services = [
    {
      icon: Monitor,
      name: t?.services?.technologies?.name,
      desc: t?.services?.technologies?.desc,
      href: "/services/technologies",
      image: "https://as2.ftcdn.net/jpg/04/74/45/97/1000_F_474459732_YlqlIWzhx3eCz7nIONzGjDVVoVkAxZ3n.jpg",
      color: "from-blue-600 to-blue-800",
    },
    {
      icon: Shield,
      name: t?.services?.security?.name,
      desc: t?.services?.security?.desc,
      href: "/services/security",
      image: "https://cdn.abacus.ai/images/cf50c509-911f-42e0-9e10-3efaaeb01794.png",
      color: "from-red-600 to-red-800",
    },
    {
      icon: Building2,
      name: t?.services?.building?.name,
      desc: t?.services?.building?.desc,
      href: "/services/building",
      image: "https://pbs.twimg.com/media/GVWhQZWWgAAclkJ.jpg",
      color: "from-amber-600 to-amber-800",
    },
    {
      icon: Users,
      name: t?.services?.consulting?.name,
      desc: t?.services?.consulting?.desc,
      href: "/services/consulting",
      image: "https://www.hayes-consultants.com/professional-african-business-team-meeting.jpg",
      color: "from-green-600 to-green-800",
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://thumbs.dreamstime.com/b/african-american-team-collaborating-project-modern-office-smiling-engaged-teamwork-collaboration-corporate-diversity-401544495.jpg"
            alt="GASS Group Team"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-950/70 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              {t?.hero?.title}
            </h1>
            <p className="text-xl md:text-2xl text-red-500 font-semibold mb-4">
              {t?.hero?.subtitle}
            </p>
            <p className="text-xl text-gray-200 mb-8">
              {t?.hero?.tagline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#services"
                className="inline-flex items-center justify-center px-8 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-all hover:scale-105 shadow-lg"
              >
                {t?.hero?.cta}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-all border border-white/30"
              >
                {t?.hero?.contact}
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1.5 h-3 bg-white/50 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mb-4">
              {t?.services?.title}
            </h2>
            <p className="text-xl text-gray-600">
              {t?.services?.subtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {services?.map((service, index) => (
              <ServiceCard key={service?.href ?? index} service={service} index={index} t={t} />
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mb-6">
                {t?.about?.title}
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                {t?.about?.subtitle}
              </p>

              <div className="space-y-6">
                <AboutItem icon={Target} title={t?.about?.mission} text={t?.about?.missionText} />
                <AboutItem icon={Eye} title={t?.about?.vision} text={t?.about?.visionText} />
              </div>

              <Link
                href="/about"
                className="inline-flex items-center mt-8 px-6 py-3 bg-blue-950 text-white font-semibold rounded-lg hover:bg-blue-900 transition-all"
              >
                {locale === "fr" ? "En savoir plus" : "Learn more"}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://cdn.abacus.ai/images/ac42b51c-4080-4c4e-b088-e63482f6e70a.png"
                  alt="GASS Team"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-red-600 text-white p-6 rounded-xl shadow-xl">
                <CountUp end={10} suffix="+" />
                <p className="text-sm font-medium">{locale === "fr" ? "Années d'expérience" : "Years of Experience"}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-blue-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t?.about?.values}
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {t?.about?.valuesList?.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center space-x-3 bg-white/10 p-6 rounded-xl backdrop-blur-sm"
              >
                <CheckCircle className="w-6 h-6 text-red-500 flex-shrink-0" />
                <span className="font-medium">{value}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              {locale === "fr" ? "Votre réussite est au cœur de notre engagement" : "Your success is at the heart of our commitment"}
            </h2>
            <p className="text-xl text-white/90 mb-8">
              {locale === "fr"
                ? "Contactez-nous pour découvrir comment nous pouvons vous accompagner"
                : "Contact us to discover how we can support you"}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-red-600 font-bold rounded-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-lg"
            >
              {t?.hero?.contact}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ service, index, t }: { service: any; index: number; t: any }) {
  const Icon = service?.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <Link href={service?.href ?? "#"} className="group block">
        <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={service?.image ?? ""}
            alt={service?.name ?? "Service"}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className={`absolute inset-0 bg-gradient-to-t ${service?.color ?? "from-blue-600 to-blue-800"} opacity-80 group-hover:opacity-90 transition-opacity`} />
          <div className="absolute inset-0 p-8 flex flex-col justify-end">
            <div className="flex items-center space-x-3 mb-3">
              {Icon && <Icon className="w-8 h-8 text-white" />}
              <h3 className="text-2xl font-bold text-white">{service?.name}</h3>
            </div>
            <p className="text-white/90 mb-4">{service?.desc}</p>
            <span className="inline-flex items-center text-white font-semibold group-hover:translate-x-2 transition-transform">
              {t?.services?.learnMore}
              <ArrowRight className="ml-2 w-5 h-5" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

function AboutItem({ icon: Icon, title, text }: { icon: any; title: string; text: string }) {
  return (
    <div className="flex items-start space-x-4">
      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
        <Icon className="w-6 h-6 text-red-600" />
      </div>
      <div>
        <h3 className="font-semibold text-blue-950 mb-1">{title}</h3>
        <p className="text-gray-600">{text}</p>
      </div>
    </div>
  );
}

function CountUp({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [inView, end]);

  return (
    <p ref={ref} className="text-4xl font-bold">
      {count}{suffix}
    </p>
  );
}
