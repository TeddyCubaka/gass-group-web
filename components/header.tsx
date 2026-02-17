"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
import { useLocale } from "@/contexts/locale-context";
import { Menu, X, Globe, ChevronDown, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const { data: session } = useSession() || {};
  const { locale, setLocale, t } = useLocale();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    { href: "/services/technologies", name: "GASS Technologies" },
    { href: "/services/security", name: "GASS Security" },
    { href: "/services/building", name: "GASS Building" },
    { href: "/services/consulting", name: "GASS Consulting" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative w-16 h-16">
              <Image
                src="/logo.jpg"
                alt="GASS Group Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <NavLink href="/">{t?.nav?.home}</NavLink>
            <NavLink href="/about">{t?.nav?.about}</NavLink>
            
            <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
              <button className="flex items-center px-4 py-2 text-gray-700 hover:text-red-600 font-medium transition-colors">
                {t?.nav?.services}
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 w-56 bg-white rounded-lg shadow-xl py-2 border"
                  >
                    {services?.map((service) => (
                      <Link
                        key={service?.href}
                        href={service?.href ?? "#"}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-red-600 transition-colors"
                      >
                        {service?.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <NavLink href="/projects">{t?.nav?.projects}</NavLink>
            <NavLink href="/blog">{t?.nav?.blog}</NavLink>
            <NavLink href="/contact">{t?.nav?.contact}</NavLink>
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={() => setLocale(locale === "fr" ? "en" : "fr")}
              className="flex items-center space-x-1 px-3 py-2 text-gray-600 hover:text-red-600 transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span className="uppercase font-medium">{locale}</span>
            </button>

            {session?.user ? (
              <div className="flex items-center space-x-3">
                <Link
                  href="/dashboard"
                  className="flex items-center space-x-2 px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors"
                >
                  <User className="w-4 h-4" />
                  <span>{t?.nav?.dashboard}</span>
                </Link>
                <button
                  onClick={() => signOut()}
                  className="px-4 py-2 text-gray-600 hover:text-red-600 font-medium transition-colors"
                >
                  {t?.nav?.logout}
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link
                  href="/login"
                  className="px-4 py-2 text-gray-700 hover:text-red-600 font-medium transition-colors"
                >
                  {t?.nav?.login}
                </Link>
                <Link
                  href="/signup"
                  className="px-5 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 font-medium transition-colors"
                >
                  {t?.nav?.signup}
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t"
          >
            <div className="px-4 py-4 space-y-2">
              <MobileNavLink href="/" onClick={() => setIsOpen(false)}>{t?.nav?.home}</MobileNavLink>
              <MobileNavLink href="/about" onClick={() => setIsOpen(false)}>{t?.nav?.about}</MobileNavLink>
              {services?.map((service) => (
                <MobileNavLink key={service?.href} href={service?.href ?? "#"} onClick={() => setIsOpen(false)}>
                  {service?.name}
                </MobileNavLink>
              ))}
              <MobileNavLink href="/projects" onClick={() => setIsOpen(false)}>{t?.nav?.projects}</MobileNavLink>
              <MobileNavLink href="/blog" onClick={() => setIsOpen(false)}>{t?.nav?.blog}</MobileNavLink>
              <MobileNavLink href="/contact" onClick={() => setIsOpen(false)}>{t?.nav?.contact}</MobileNavLink>
              
              <div className="pt-4 border-t space-y-2">
                <button
                  onClick={() => setLocale(locale === "fr" ? "en" : "fr")}
                  className="flex items-center space-x-2 w-full px-4 py-2 text-gray-600"
                >
                  <Globe className="w-4 h-4" />
                  <span>{locale === "fr" ? "English" : "Français"}</span>
                </button>
                {session?.user ? (
                  <>
                    <MobileNavLink href="/dashboard" onClick={() => setIsOpen(false)}>{t?.nav?.dashboard}</MobileNavLink>
                    <button onClick={() => signOut()} className="w-full text-left px-4 py-2 text-red-600">{t?.nav?.logout}</button>
                  </>
                ) : (
                  <>
                    <MobileNavLink href="/login" onClick={() => setIsOpen(false)}>{t?.nav?.login}</MobileNavLink>
                    <MobileNavLink href="/signup" onClick={() => setIsOpen(false)}>{t?.nav?.signup}</MobileNavLink>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="px-4 py-2 text-gray-700 hover:text-red-600 font-medium transition-colors"
    >
      {children}
    </Link>
  );
}

function MobileNavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
    >
      {children}
    </Link>
  );
}
