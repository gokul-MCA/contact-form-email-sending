import "@/styles/globals.css";
import Image from "next/image";
import Link from "next/link";
import { Merriweather, Inter } from "next/font/google";
import { Metadata } from "next";
import {
  GitHubLogoIcon,
  GlobeIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-inter",
});
const merri = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-merriweather",
});

// static metadata
export const metadata: Metadata = {
  title: "Contact Form Email Sending - React & Node.js Showcase",
  description:
    "Learn how to send contact form emails using SMTP or Resend. Both methods are demonstrated with email sending and form validation implemented using React Hook Form and manual validation techniques.",
  keywords:
    "contact form, email contact form, resend api, nodemailer smtp, smtp server, axios, fetch, reack hook form validation, manual validation, nextjs contact form, send email using nodemailer and resend",
  applicationName: "Contact Form Email Sending",
  creator: "gokul b",
  authors: [
    { name: "gokul b", url: "https://www.linkedin.com/in/gokul-b-mca/" },
  ],
  bookmarks: [],
  metadataBase: new URL(process.env.NEXTAUTH_URL), // Use `NEXTAUTH_URL`
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Contact Form Email Sending Made Simple - React & Node.js Showcase",
    description:
      "Learn how to send emails with React and Node.js using SMTP, Resend, and advanced form validation techniques.",
    url: "/", // Relative URL resolved using `metadataBase`
    images: [
      {
        url: "/logo.png", // Relative URL resolved using `metadataBase`
        width: 1200,
        height: 630,
        alt: "contact form email sending logo",
      },
      {
        url: "/logo.png", // Relative URL resolved using `metadataBase`
        width: 600,
        height: 315,
        alt: "contact form email sending logo",
      },
      {
        url: "/logo.png", // Relative URL resolved using `metadataBase`
        width: 800,
        height: 800,
        alt: "contact form email sending logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Form Email Sending",
    images: {
      url: "/logo.png", // Relative URL resolved using `metadataBase`
      alt: "contact form email sending logo",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${merri.variable} antialiased flex items-center justify-center `}
      >
        <section className="w-[1024px] ">
          <header className="m-6 ">
            <Link href="/" className="">
              <Image
                src="/logo.png"
                alt="logo"
                height="60"
                width="60"
                loading="eager"
                className="border-2 bg-green-600 hover:scale-105 hover:shadow-lg hover:shadow-dominant transition-all duration-300 border-green-800 object-cover rounded-full w-12 h-12 lg:h-16 lg:w-16 "
              />
              <span className="sr-only">
                Click Logo to redirect/reload home
              </span>
            </Link>
          </header>

          {children}

          <footer className="m-0 ">
            <p className="text-xs md:text-sm lg:text-base text-center p-2 ">
              Built with love using <span className="animate-pulse ">💚 </span>
              <span className="font-semibold text-secondary">Next.js and React</span>
            </p>

            <span className=" flex justify-center items-center gap-4 p-2 ">
              <span className="sr-only">Links</span>
              <a href="https://github.com/gokul-MCA" target="_blank">
                <span className="sr-only">Github Profile</span>
                <GitHubLogoIcon className="h-6 w-6 lg:h-8 lg:w-8 text-secondary hover:text-dominant " />
              </a>
              <a href="https://gokul-b.netlify.app/" target="_blank">
                <span className="sr-only">Personal Portfolio</span>
                <GlobeIcon className="h-6 w-6 lg:h-8 lg:w-8 text-secondary hover:text-dominant " />
              </a>
              <a
                href="https://www.linkedin.com/in/gokul-b-mca/"
                target="_blank"
              >
                <span className="sr-only">Linkedin Profile</span>
                <LinkedInLogoIcon className="h-6 w-6 lg:h-8 lg:w-8  text-secondary hover:text-dominant " />
              </a>
            </span>
          </footer>
        </section>
      </body>
    </html>
  );
}
