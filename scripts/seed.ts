import { PrismaClient } from "@prisma/client";
import { PrismaLibSql } from "@prisma/adapter-libsql";
import bcrypt from "bcryptjs";

const adapter = new PrismaLibSql({
  url: process.env.DATABASE_URL!,
  authToken: process.env.TURSO_AUTH_TOKEN,
});
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("Seeding database...");

  // Create test admin user
  const hashedPassword = await bcrypt.hash("johndoe123", 10);
  await prisma.user.upsert({
    where: { email: "john@doe.com" },
    update: {},
    create: {
      email: "john@doe.com",
      password: hashedPassword,
      name: "Admin GASS",
      role: "admin",
    },
  });

  // Create sample projects
  const projects = [
    {
      titleFr: "Digitalisation Institution Publique",
      titleEn: "Public Institution Digitalization",
      descriptionFr: "Digitalisation intégrale d'institutions publiques au travers de solutions technologiques personnalisées.",
      descriptionEn: "Complete digitalization of public institutions through customized technological solutions.",
      imageUrl: "https://cdn.abacus.ai/images/73dbef13-3028-4da0-954d-6dd49ea0d322.png",
      category: "technologies",
      client: "Gouvernement RDC",
      year: 2024,
      featured: true,
    },
    {
      titleFr: "Sécurisation Complexe Industriel",
      titleEn: "Industrial Complex Security",
      descriptionFr: "Mise en place d'un système de sécurité intégré pour un complexe industriel majeur.",
      descriptionEn: "Implementation of an integrated security system for a major industrial complex.",
      imageUrl: "https://cdn.abacus.ai/images/fafa5ac4-5f23-4ae2-a7eb-f9c78b7e82f8.png",
      category: "security",
      client: "Entreprise Privée",
      year: 2024,
      featured: true,
    },
    {
      titleFr: "Construction Centre Commercial",
      titleEn: "Shopping Center Construction",
      descriptionFr: "Gestion complète d'un projet de construction de centre commercial moderne.",
      descriptionEn: "Complete management of a modern shopping center construction project.",
      imageUrl: "https://2marchitecture.com/wp-content/uploads/2025/01/neidzeilski-10-1920x1080-1.webp",
      category: "building",
      client: "Promoteur Immobilier",
      year: 2023,
      featured: true,
    },
    {
      titleFr: "Accompagnement PME",
      titleEn: "SME Support",
      descriptionFr: "Accompagnement stratégique pour le développement commercial et la croissance de PME.",
      descriptionEn: "Strategic support for commercial development and growth of SMEs.",
      imageUrl: "https://brandauditors.com/wp-content/uploads/bb-plugin/cache/Growth-Strategy-Consulting-Services-square-afc99ee9b0315ab1b894e40aecaf52d4-ji981marf5tw.jpg",
      category: "consulting",
      client: "PME Locale",
      year: 2024,
      featured: true,
    },
  ];

  for (const project of projects) {
    await prisma.project.upsert({
      where: { id: project.titleFr.toLowerCase().replace(/\s+/g, "-") },
      update: project,
      create: {
        ...project,
        id: project.titleFr.toLowerCase().replace(/\s+/g, "-"),
      },
    });
  }

  // Create sample blog posts
  const blogPosts = [
    {
      titleFr: "GASS Group lance ses nouveaux services de sécurité",
      titleEn: "GASS Group launches new security services",
      slugFr: "gass-group-lance-nouveaux-services-securite",
      slugEn: "gass-group-launches-new-security-services",
      contentFr: "<p>GASS Security, la division spécialisée de GASS SARL, est fière d'annoncer le lancement de ses nouveaux services de gardiennage et sécurité privée.</p><p>Notre mission: assurer la protection des biens et des personnes avec efficacité, technologie et fiabilité.</p>",
      contentEn: "<p>GASS Security, the specialized division of GASS SARL, is proud to announce the launch of its new security and private guarding services.</p><p>Our mission: to ensure the protection of assets and people with efficiency, technology and reliability.</p>",
      excerptFr: "GASS Security annonce le lancement de ses nouveaux services de gardiennage et sécurité privée.",
      excerptEn: "GASS Security announces the launch of its new security and private guarding services.",
      imageUrl: "https://cdn.abacus.ai/images/fafa5ac4-5f23-4ae2-a7eb-f9c78b7e82f8.png",
      category: "security",
      published: true,
    },
    {
      titleFr: "La transformation digitale au cœur de notre stratégie",
      titleEn: "Digital transformation at the heart of our strategy",
      slugFr: "transformation-digitale-strategie",
      slugEn: "digital-transformation-strategy",
      contentFr: "<p>GASS Technologies accompagne les entreprises dans leur transformation numérique avec des solutions sur mesure.</p><p>De la digitalisation des processus à l'ingénierie informatique, nous offrons un accompagnement complet.</p>",
      contentEn: "<p>GASS Technologies supports businesses in their digital transformation with tailored solutions.</p><p>From process digitalization to IT engineering, we offer comprehensive support.</p>",
      excerptFr: "GASS Technologies accompagne les entreprises dans leur transformation numérique.",
      excerptEn: "GASS Technologies supports businesses in their digital transformation.",
      imageUrl: "https://cdn.abacus.ai/images/73dbef13-3028-4da0-954d-6dd49ea0d322.png",
      category: "technologies",
      published: true,
    },
  ];

  for (const post of blogPosts) {
    await prisma.blogPost.upsert({
      where: { slugFr: post.slugFr },
      update: post,
      create: post,
    });
  }

  console.log("Database seeded successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
