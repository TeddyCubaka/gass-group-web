"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/contexts/locale-context";
import { Calendar, ArrowRight, Tag } from "lucide-react";

type BlogPost = {
  id: string;
  titleFr: string;
  titleEn: string;
  slugFr: string;
  slugEn: string;
  excerptFr: string | null;
  excerptEn: string | null;
  imageUrl: string | null;
  category: string;
  published: boolean;
  createdAt: string;
};

export default function BlogPage() {
  const { locale } = useLocale();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/blog")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data?.posts ?? []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(locale === "fr" ? "fr-FR" : "en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

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
              {locale === "fr" ? "Actualités & Blog" : "News & Blog"}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {locale === "fr"
                ? "Restez informé des dernières actualités et tendances du secteur."
                : "Stay informed about the latest news and industry trends."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto"></div>
            </div>
          ) : posts?.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                {locale === "fr" ? "Aucun article publié pour le moment" : "No articles published yet"}
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts?.map((post, index) => (
                <motion.article
                  key={post?.id ?? index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  <Link href={`/blog/${locale === "fr" ? post?.slugFr : post?.slugEn}`}>
                    <div className="relative aspect-video bg-gray-200">
                      {post?.imageUrl && (
                        <Image
                          src={post.imageUrl}
                          alt={locale === "fr" ? post?.titleFr : post?.titleEn}
                          fill
                          className="object-cover"
                        />
                      )}
                    </div>
                    <div className="p-6">
                      <div className="flex items-center space-x-4 mb-3 text-sm text-gray-500">
                        <span className="flex items-center space-x-1">
                          <Tag className="w-4 h-4" />
                          <span className="capitalize">{post?.category}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{formatDate(post?.createdAt ?? "")}</span>
                        </span>
                      </div>
                      <h2 className="text-xl font-bold text-blue-950 mb-2 line-clamp-2">
                        {locale === "fr" ? post?.titleFr : post?.titleEn}
                      </h2>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {locale === "fr" ? post?.excerptFr : post?.excerptEn}
                      </p>
                      <span className="inline-flex items-center text-red-600 font-semibold hover:text-red-700">
                        {locale === "fr" ? "Lire la suite" : "Read more"}
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
