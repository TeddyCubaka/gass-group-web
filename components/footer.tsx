"use client";

import Link from "next/link";
import Image from "next/image";
import { useLocale } from "@/contexts/locale-context";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  const { t } = useLocale();

  return (
    <footer className="bg-blue-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="relative w-24 h-24 bg-white rounded-lg p-2">
              <Image
                src="/logo.jpg"
                alt="GASS Group"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              {t?.footer?.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-red-500">{t?.footer?.quickLinks}</h3>
            <ul className="space-y-2">
              <li><FooterLink href="/about">{t?.nav?.about}</FooterLink></li>
              <li><FooterLink href="/services/technologies">GASS Technologies</FooterLink></li>
              <li><FooterLink href="/services/security">GASS Security</FooterLink></li>
              <li><FooterLink href="/services/building">GASS Building</FooterLink></li>
              <li><FooterLink href="/services/consulting">GASS Consulting</FooterLink></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-red-500">{t?.nav?.services}</h3>
            <ul className="space-y-2">
              <li><FooterLink href="/projects">{t?.nav?.projects}</FooterLink></li>
              <li><FooterLink href="/blog">{t?.nav?.blog}</FooterLink></li>
              <li><FooterLink href="/contact">{t?.nav?.contact}</FooterLink></li>
              <li><FooterLink href="/dashboard">{t?.nav?.clientPortal}</FooterLink></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-red-500">{t?.footer?.contact}</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-red-500 mt-0.5" />
                <div className="text-gray-300 text-sm">
                  <p>+243 822 790 420</p>
                  <p>+243 898 900 907</p>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-red-500" />
                <a href="mailto:contact@gass-group.com" className="text-gray-300 text-sm hover:text-white transition-colors">
                  contact@gass-group.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-red-500 mt-0.5" />
                <p className="text-gray-300 text-sm">
                  63, Avenue Colonel Mondjiba,<br />
                  Ngaliema Concession Cotex,<br />
                  Kinshasa, RDC
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-blue-900">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} GASS Group. {t?.footer?.rights}
            </p>
            <div className="text-gray-400 text-xs">
              <p>ID NAT: 01-H5300-N80266K | RCCM: CD/KNG/RCCM/25-B-02987</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-gray-300 text-sm hover:text-white transition-colors">
      {children}
    </Link>
  );
}
