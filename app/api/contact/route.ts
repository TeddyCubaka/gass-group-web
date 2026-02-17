import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const { name, email, phone, company, subject, message, service } = await request.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, error: "Champs requis manquants" },
        { status: 400 }
      );
    }

    const contactRequest = await prisma.contactRequest.create({
      data: {
        name,
        email,
        phone: phone || null,
        company: company || null,
        subject,
        message,
        service: service || null,
        status: "new",
      },
    });

    // Send notification email
    try {
      const appUrl = process.env.NEXTAUTH_URL || "";
      const appName = appUrl ? new URL(appUrl).hostname.split(".")[0] : "GASS Group";

      const htmlBody = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e3a5f; border-bottom: 2px solid #dc2626; padding-bottom: 10px;">
            Nouveau message de contact - GASS Group
          </h2>
          <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Nom:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            ${phone ? `<p style="margin: 10px 0;"><strong>Téléphone:</strong> ${phone}</p>` : ""}
            ${company ? `<p style="margin: 10px 0;"><strong>Entreprise:</strong> ${company}</p>` : ""}
            ${service ? `<p style="margin: 10px 0;"><strong>Service:</strong> ${service}</p>` : ""}
            <p style="margin: 10px 0;"><strong>Sujet:</strong> ${subject}</p>
            <p style="margin: 10px 0;"><strong>Message:</strong></p>
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
          notification_id: process.env.NOTIF_ID_CONTACT_FORM_SUBMISSION,
          subject: `Nouveau message de ${name} - ${subject}`,
          body: htmlBody,
          is_html: true,
          recipient_email: "contact@gass-group.com",
          sender_alias: appName,
        }),
      });
    } catch (emailError) {
      console.error("Email notification failed:", emailError);
    }

    return NextResponse.json({ success: true, id: contactRequest.id });
  } catch (error) {
    console.error("Contact error:", error);
    return NextResponse.json(
      { success: false, error: "Erreur lors de l'envoi" },
      { status: 500 }
    );
  }
}
