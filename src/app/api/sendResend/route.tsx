// Resend for sending mail here
// npm i resend

import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import { FormData } from "@/types/formdata";


const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const { name, email, message }: FormData = await req.json();

    // Validate inputs
    if (!name || typeof name !== "string") {
      console.error("Invalid name");
      return NextResponse.json({ error: "Invalid name" }, { status: 400 });
    }
    if (!email || typeof email !== "string") {
      console.error("Invalid email");
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }
    if (!message || typeof message !== "string") {
      console.error("Invalid message");
      return NextResponse.json({ error: "Invalid message" }, { status: 400 });
    }

    const htmlContent = `
  <div style="font-family: Arial, sans-serif; color: black;">
    <div style="background-color: #000; padding: 20px; text-align: center;">
      <h2 style="color: #fff;">New Message from ${name}</h2>
    </div>
    <div style="padding: 20px;">
      <p style="font-size: 16px;">Hello,</p>
      <p style="font-size: 16px;">You have received a new message from <strong>${name}</strong> (${email}):</p>
      <blockquote style="background-color: #000; padding: 10px 20px; border-left: 4px solid #0f0f0f;">
        <p style="font-size: 14px;color:#fff">${message}</p>
      </blockquote>
      <p style="font-size: 14px; color: white">Thank you,<br>Your Application Team</p>
    </div>
    <div style="background-color: #0f0f0f; padding: 10px; text-align: center; font-size: 12px; color: white">
      <p>© 2024 Contact Email. All rights reserved.</p>
    </div>
  </div>
`;

    const { data, error } = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: process.env.EMAIL, // Replace with your receiver mail (or) your mail to receive email
      subject: `Message from contact form ${name}`,
      replyTo: email,
      html: htmlContent,
    });

    if (error) {
      console.error("Error sending email:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    console.error("Unexpected error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
