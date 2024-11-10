// email sent through -->  smtp  --> register app password
// npm i nodemailer needed

import nodemailer from "nodemailer";

export async function POST(req) {
  const { name, email, message } = await req.json();

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

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,    // e.g., smtp.gmail.com
    port: process.env.SMTP_PORT,    // e.g., 465
    auth: {
      user: process.env.SMTP_USER,  // registered email
      pass: process.env.SMTP_PASS,  // app password 
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL, // Replace with your receiver mail (or) your mail to receive email
      subject: `New message from ${name}`,
      html: htmlContent,
      replyTo: email,
    });

    return new Response(
      JSON.stringify({ message: "Email sent successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "Failed to send email" }), {
      status: 500,
    });
  }
}
