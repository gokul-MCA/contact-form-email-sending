import localFont from "next/font/local";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Contact Email Sending - React & Node.js Showcase",
  description:
    "Learn how to send contact emails using SMTP or Resend. Both methods are demonstrated with email sending and form validation implemented using React Hook Form and manual validation techniques.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Link href="/">
          <Image
            src="/favicon.ico"
            alt="logo"
            height="60"
            width="60"
            className="absolute top-10 left-10 border rounded-lg "
          />
        </Link>
        {children}
      </body>
    </html>
  );
}
