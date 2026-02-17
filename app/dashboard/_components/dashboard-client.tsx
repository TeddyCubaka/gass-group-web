"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLocale } from "@/contexts/locale-context";
import { User, FileText, MessageSquare, Clock, Shield, Building2, Monitor, Users } from "lucide-react";

type QuoteRequest = {
  id: string;
  service: string;
  status: string;
  createdAt: string;
};

type ContactRequest = {
  id: string;
  subject: string;
  status: string;
  createdAt: string;
};

export default function DashboardClient() {
  const { data: session, status } = useSession() || {};
  const router = useRouter();
  const { locale } = useLocale();
  const [quotes, setQuotes] = useState<QuoteRequest[]>([]);
  const [contacts, setContacts] = useState<ContactRequest[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/login");
    }
  }, [status, router]);

  useEffect(() => {
    if (session?.user) {
      Promise.all([
        fetch("/api/user/quotes").then((res) => res.json()),
        fetch("/api/user/contacts").then((res) => res.json()),
      ])
        .then(([quotesData, contactsData]) => {
          setQuotes(quotesData?.quotes ?? []);
          setContacts(contactsData?.contacts ?? []);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [session]);

  if (status === "loading" || !session) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
      </div>
    );
  }

  const services = [
    { icon: Monitor, name: "GASS Technologies", color: "bg-blue-500" },
    { icon: Shield, name: "GASS Security", color: "bg-red-500" },
    { icon: Building2, name: "GASS Building", color: "bg-amber-500" },
    { icon: Users, name: "GASS Consulting", color: "bg-green-500" },
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString(locale === "fr" ? "fr-FR" : "en-US");
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "new":
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "in_progress":
        return "bg-blue-100 text-blue-800";
      case "completed":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-blue-950 to-blue-900 rounded-2xl p-8 text-white mb-8"
        >
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <User className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">
                {locale === "fr" ? "Bienvenue" : "Welcome"}, {session?.user?.name || session?.user?.email}
              </h1>
              <p className="text-blue-200">
                {locale === "fr" ? "Votre espace client GASS Group" : "Your GASS Group client portal"}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
        >
          {services?.map((service, index) => {
            const Icon = service?.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className={`w-12 h-12 ${service?.color ?? "bg-gray-500"} rounded-xl flex items-center justify-center mb-4`}>
                  {Icon && <Icon className="w-6 h-6 text-white" />}
                </div>
                <h3 className="font-semibold text-blue-950">{service?.name}</h3>
              </div>
            );
          })}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Quote Requests */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl p-6 shadow-sm"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <FileText className="w-6 h-6 text-red-600" />
                <h2 className="text-xl font-bold text-blue-950">
                  {locale === "fr" ? "Mes demandes de devis" : "My quote requests"}
                </h2>
              </div>
            </div>

            {loading ? (
              <div className="text-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-600 mx-auto"></div>
              </div>
            ) : quotes?.length === 0 ? (
              <p className="text-gray-500 text-center py-8">
                {locale === "fr" ? "Aucune demande de devis" : "No quote requests"}
              </p>
            ) : (
              <div className="space-y-4">
                {quotes?.slice(0, 5)?.map((quote) => (
                  <div key={quote?.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-blue-950">{quote?.service}</p>
                      <p className="text-sm text-gray-500 flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {formatDate(quote?.createdAt ?? "")}
                      </p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(quote?.status ?? "")}`}>
                      {quote?.status}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </motion.div>

          {/* Contact Messages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl p-6 shadow-sm"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <MessageSquare className="w-6 h-6 text-red-600" />
                <h2 className="text-xl font-bold text-blue-950">
                  {locale === "fr" ? "Mes messages" : "My messages"}
                </h2>
              </div>
            </div>

            {loading ? (
              <div className="text-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-600 mx-auto"></div>
              </div>
            ) : contacts?.length === 0 ? (
              <p className="text-gray-500 text-center py-8">
                {locale === "fr" ? "Aucun message" : "No messages"}
              </p>
            ) : (
              <div className="space-y-4">
                {contacts?.slice(0, 5)?.map((contact) => (
                  <div key={contact?.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-blue-950">{contact?.subject}</p>
                      <p className="text-sm text-gray-500 flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {formatDate(contact?.createdAt ?? "")}
                      </p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(contact?.status ?? "")}`}>
                      {contact?.status}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
