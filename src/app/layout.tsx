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

export const metadata: Metadata = {
  title: "Contact Email Sending - React & Node.js Showcase",
  description:
    "Learn how to send contact emails using SMTP or Resend. Both methods are demonstrated with email sending and form validation implemented using React Hook Form and manual validation techniques.",
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
            <Link href="/">
              <Image
                src="/favicon.ico"
                alt="logo"
                height="60"
                width="60"
                loading="eager"
                className="border-2 border-dominant rounded-lg w-12 h-12 lg:h-16 lg:w-16 "
              />
            </Link>
          </header>

          {children}

          <footer className="m-0 lg:m-6 ">
            <p className="text-xs md:text-sm lg:text-base text-gray-500 text-center p-2 ">
              Built with love using <span className="animate-pulse ">💚 </span>
              <span className="font-semibold">Next.js and React</span>
            </p>

            <span className=" flex justify-center items-center gap-4 p-2 ">
              <a href="https://github.com/gokul-MCA" target="_blank">
                <GitHubLogoIcon className="h-6 w-6 lg:h-8 lg:w-8 text-secondary hover:text-dominant " />
              </a>
              <a href="https://gokul-b.netlify.app/" target="_blank">
                <GlobeIcon className="h-6 w-6 lg:h-8 lg:w-8 text-secondary hover:text-dominant " />
              </a>
              <a href="https://www.linkedin.com/in/gokul-b-mca/" target="_blank">
                <LinkedInLogoIcon className="h-6 w-6 lg:h-8 lg:w-8  text-secondary hover:text-dominant " />
              </a>
            </span>
          </footer>

        </section>
      </body>
    </html>
  );
}
