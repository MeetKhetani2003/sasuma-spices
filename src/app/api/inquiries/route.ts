import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const clean = (v: unknown, max = 500) =>
  typeof v === "string" ? v.replace(/[\u0000-\u001F]/g, " ").trim().slice(0, max) : "";

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  // Honeypot — bots fill hidden "website" field
  if (clean(body.website, 50)) {
    return NextResponse.json({ ok: true });
  }

  const fullName = clean(body.fullName, 160);
  const company = clean(body.company, 200);
  const phone = clean(body.phone, 40);
  const email = clean(body.email, 160).toLowerCase();
  const spice = clean(body.spice, 80);
  const message = clean(body.message, 2000);

  const errors: Record<string, string> = {};
  if (!fullName || fullName.length < 2) errors.fullName = "Please share your full name.";
  if (!/^[\d+\-\s()]{8,20}$/.test(phone)) errors.phone = "Enter a valid mobile number.";
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "Email looks incorrect.";
  if (!spice) errors.spice = "Select a spice so we can quote accurately.";

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  try {
    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || "smtp.gmail.com",
        port: parseInt(process.env.SMTP_PORT || "465", 10),
        secure: true,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      const mailOptions = {
        from: process.env.SMTP_USER,
        to: process.env.SMTP_USER,
        subject: `New Inquiry from ${fullName} - Shasuma Spices`,
        text: `
New Inquiry Received from Website:

Name: ${fullName}
Company: ${company || "N/A"}
Phone: ${phone}
Email: ${email || "N/A"}
Product: ${spice}

Message:
${message || "No message provided."}
        `,
      };

      await transporter.sendMail(mailOptions);
    } catch (mailErr) {
      console.error("[inquiries] email send failed:", mailErr);
    }

    return NextResponse.json({
      ok: true,
      message: "Inquiry received. Our Unjha desk will call you back within one business day.",
    });
  } catch (err) {
    console.error("[inquiries] insert failed:", err);
    return NextResponse.json(
      { ok: false, error: "Could not record your inquiry. Please call the desk directly." },
      { status: 500 }
    );
  }
}
