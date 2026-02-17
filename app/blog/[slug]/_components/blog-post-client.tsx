"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/contexts/locale-context";
import { Calendar, Tag, ArrowLeft } from "lucide-react";

type Post = {
  id: string;
  titleFr: string;
  titleEn: string;
  contentFr: string;
  contentEn: string;
  excerptFr: string | null;
  excerptEn: string | null;
  imageUrl: string | null;
  category: string;
  createdAt: Date;
};

export default function BlogPostClient({ post }: { post: Post }) {
  const { locale } = useLocale();

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString(locale === "fr" ? "fr-FR" : "en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-blue-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link
              href="/blog"
              className="inline-flex items-center text-gray-300 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              {locale === "fr" ? "Retour aux articles" : "Back to articles"}
            </Link>
            <div className="flex items-center space-x-4 mb-4 text-sm text-gray-300">
              <span className="flex items-center space-x-1">
                <Tag className="w-4 h-4" />
                <span className="capitalize">{post?.category}</span>
              </span>
              <span className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(post?.createdAt)}</span>
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white">
              {locale === "fr" ? post?.titleFr : post?.titleEn}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {post?.imageUrl && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative aspect-video rounded-2xl overflow-hidden shadow-xl mb-12 -mt-24"
            >
              <Image
                src={post.imageUrl}
                alt={locale === "fr" ? post?.titleFr : post?.titleEn}
                fill
                className="object-cover"
              />
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            <div
              dangerouslySetInnerHTML={{
                __html: locale === "fr" ? post?.contentFr : post?.contentEn,
              }}
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
