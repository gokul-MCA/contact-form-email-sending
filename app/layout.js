import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import {Merriweather, Inter} from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight:['400','700','900'],
  variable:'--font-inter'
})
const merri = Merriweather({
  subsets: ['latin'],
  weight: ['400','700','900'],
  variable:'--font-merriweather' 
})


export const metadata = {
  title: "Contact Email Sending - React & Node.js Showcase",
  description:
    "Learn how to send contact emails using SMTP or Resend. Both methods are demonstrated with email sending and form validation implemented using React Hook Form and manual validation techniques.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      {/* <link rel="icon" href="/favicon.ico" sizes="any" /> */}
      </head>
      <body
        className={`${inter.variable} ${merri.variable} antialiased `}
      >
        <Link href="/">
          {/* <Image
            src="/favicon.ico"
            alt="logo"
            height="60"
            width="60"
            className="absolute top-5 left-5 border rounded-lg w-12 h-12 lg:h-16 lg:w-16 md:top-10 md:left-10 "
          /> */}
        </Link>
        {children}
      </body>
    </html>
  );
}
