import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const { name, email, phone, company, service, message, budget, timeline } = await request.json();

    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { success: false, error: "Champs requis manquants" },
        { status: 400 }
      );
    }

    const quoteRequest = await prisma.quoteRequest.create({
      data: {
        name,
        email,
        phone: phone || null,
        company: company || null,
        service,
        description: message,
        budget: budget || null,
        timeline: timeline || null,
        status: "pending",
      },
    });

    // Send notification email
    try {
      const appUrl = process.env.NEXTAUTH_URL || "";
      const appName = appUrl ? new URL(appUrl).hostname.split(".")[0] : "GASS Group";

      const htmlBody = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e3a5f; border-bottom: 2px solid #dc2626; padding-bottom: 10px;">
            Nouvelle demande de devis - GASS Group
          </h2>
          <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Nom:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            ${phone ? `<p style="margin: 10px 0;"><strong>Téléphone:</strong> ${phone}</p>` : ""}
            ${company ? `<p style="margin: 10px 0;"><strong>Entreprise:</strong> ${company}</p>` : ""}
            <p style="margin: 10px 0;"><strong>Service demandé:</strong> ${service}</p>
            ${budget ? `<p style="margin: 10px 0;"><strong>Budget estimé:</strong> ${budget}</p>` : ""}
            ${timeline ? `<p style="margin: 10px 0;"><strong>Délai souhaité:</strong> ${timeline}</p>` : ""}
            <p style="margin: 10px 0;"><strong>Description du projet:</strong></p>
            <div style="background: white; padding: 15px; border-radius: 4px; border-left: 4px solid #dc2626;">
              ${message}
            </div>
          </div>
          <p style="color: #666; font-size: 12px;">
            Envoyé le: ${new Date().toLocaleString("fr-FR")}
          </p>
        </div>
      `;

      await fetch("https://apps.abacus.ai/api/sendNotificationEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          deployment_token: process.env.ABACUSAI_API_KEY,
          app_id: process.env.WEB_APP_ID,
          notification_id: process.env.NOTIF_ID_QUOTE_REQUEST,
          subject: `Nouvelle demande de devis: ${service} - ${name}`,
          body: htmlBody,
          is_html: true,
          recipient_email: "contact@gass-group.com",
          sender_alias: appName,
        }),
      });
    } catch (emailError) {
      console.error("Email notification failed:", emailError);
    }

    return NextResponse.json({ success: true, id: quoteRequest.id });
  } catch (error) {
    console.error("Quote error:", error);
    return NextResponse.json(
      { success: false, error: "Erreur lors de l'envoi" },
      { status: 500 }
    );
  }
}
