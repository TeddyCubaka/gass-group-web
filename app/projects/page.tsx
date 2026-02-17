"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useLocale } from "@/contexts/locale-context";
import { Building2, Monitor, Shield, Users, Calendar, Briefcase } from "lucide-react";

type Project = {
  id: string;
  titleFr: string;
  titleEn: string;
  descriptionFr: string;
  descriptionEn: string;
  imageUrl: string | null;
  category: string;
  client: string | null;
  year: number | null;
};

export default function ProjectsPage() {
  const { locale } = useLocale();
  const [projects, setProjects] = useState<Project[]>([]);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data?.projects ?? []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const categories = [
    { id: "all", name: locale === "fr" ? "Tous" : "All", icon: Briefcase },
    { id: "technologies", name: "Technologies", icon: Monitor },
    { id: "security", name: locale === "fr" ? "Sécurité" : "Security", icon: Shield },
    { id: "building", name: "Building", icon: Building2 },
    { id: "consulting", name: "Consulting", icon: Users },
  ];

  const filteredProjects = filter === "all" ? projects : projects?.filter((p) => p?.category === filter);

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
              {locale === "fr" ? "Nos Projets & Réalisations" : "Our Projects & Achievements"}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {locale === "fr"
                ? "Découvrez nos réalisations concrètes à travers nos différents domaines d'expertise."
                : "Discover our concrete achievements across our different areas of expertise."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories?.map((cat) => {
              const Icon = cat?.icon;
              return (
                <button
                  key={cat?.id}
                  onClick={() => setFilter(cat?.id ?? "all")}
                  className={`flex items-center space-x-2 px-5 py-2 rounded-full font-medium transition-all ${
                    filter === cat?.id
                      ? "bg-red-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {Icon && <Icon className="w-4 h-4" />}
                  <span>{cat?.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto"></div>
            </div>
          ) : filteredProjects?.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                {locale === "fr" ? "Aucun projet trouvé" : "No projects found"}
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects?.map((project, index) => (
                <motion.div
                  key={project?.id ?? index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="relative aspect-video bg-gray-200">
                    {project?.imageUrl && (
                      <Image
                        src={project.imageUrl}
                        alt={locale === "fr" ? project?.titleFr : project?.titleEn}
                        fill
                        className="object-cover"
                      />
                    )}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-red-600 text-white text-sm font-medium rounded-full capitalize">
                        {project?.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-blue-950 mb-2">
                      {locale === "fr" ? project?.titleFr : project?.titleEn}
                    </h3>
                    <p className="text-gray-700 mb-4 line-clamp-2">
                      {locale === "fr" ? project?.descriptionFr : project?.descriptionEn}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      {project?.client && (
                        <span className="flex items-center space-x-1">
                          <Briefcase className="w-4 h-4" />
                          <span>{project.client}</span>
                        </span>
                      )}
                      {project?.year && (
                        <span className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{project.year}</span>
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
