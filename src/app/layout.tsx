import '@/styles/globals.css';
import { Merriweather, Inter } from 'next/font/google';
import { Metadata } from 'next';
import {
  GitHubLogoIcon,
  GlobeIcon,
  LinkedInLogoIcon,
} from '@radix-ui/react-icons';
import Header from '@/components/header';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-inter',
});
const merri = Merriweather({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-merriweather',
});

// static metadata
export const metadata: Metadata = {
  title: 'Contact Form Email Sending - React & Node.js Showcase',
  description:
    'Learn how to send contact form emails using SMTP or Resend. Both methods are demonstrated with email sending and form validation implemented using React Hook Form and manual validation techniques.',
  keywords:
    'contact form, email contact form, resend api, nodemailer smtp, smtp server, axios, fetch, reack hook form validation, manual validation, nextjs contact form, send email using nodemailer and resend',
  applicationName: 'Contact Form Email Sending',
  creator: 'gokul b',
  authors: [
    { name: 'gokul b', url: 'https://www.linkedin.com/in/gokul-b-mca/' },
  ],
  bookmarks: [],
  metadataBase: new URL(process.env.NEXTAUTH_URL), // Use `NEXTAUTH_URL`
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Contact Form Email Sending Made Simple - React & Node.js Showcase',
    description:
      'Learn how to send emails with React and Node.js using SMTP, Resend, and advanced form validation techniques.',
    url: '/', // Relative URL resolved using `metadataBase`
    images: [
      {
        url: '/logo.png', // Relative URL resolved using `metadataBase`
        width: 1200,
        height: 630,
        alt: 'contact form email sending logo',
      },
      {
        url: '/logo.png', // Relative URL resolved using `metadataBase`
        width: 600,
        height: 315,
        alt: 'contact form email sending logo',
      },
      {
        url: '/logo.png', // Relative URL resolved using `metadataBase`
        width: 800,
        height: 800,
        alt: 'contact form email sending logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Form Email Sending',
    images: {
      url: '/logo.png', // Relative URL resolved using `metadataBase`
      alt: 'contact form email sending logo',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`${inter.variable} ${merri.variable} flex items-center justify-center antialiased`}
      >
          <header>
            <Header />
          </header>
        <section className='mt-16 w-[1024px]'>

          {children}

          <footer className='m-0 '>
            <p className='p-2 text-center text-xs md:text-sm lg:text-base'>
              Built with love using <span className='animate-pulse'>💚 </span>
              <span className='font-semibold text-secondary'>
                Next.js and React
              </span>
            </p>

            <span className='flex items-center justify-center gap-4 p-2'>
              <span className='sr-only'>Links</span>
              <a href='https://github.com/gokul-MCA/contact-form-email-sending' target='_blank'>
                <span className='sr-only'>Github Profile</span>
                <GitHubLogoIcon className='h-6 w-6 text-secondary hover:text-dominant lg:h-8 lg:w-8' />
              </a>
              <a href='https://gokul-b.vercel.app/' target='_blank'>
                <span className='sr-only'>Personal Portfolio</span>
                <GlobeIcon className='h-6 w-6 text-secondary hover:text-dominant lg:h-8 lg:w-8' />
              </a>
              <a
                href='https://www.linkedin.com/in/gokul-b-mca/'
                target='_blank'
              >
                <span className='sr-only'>Linkedin Profile</span>
                <LinkedInLogoIcon className='h-6 w-6 text-secondary hover:text-dominant lg:h-8 lg:w-8' />
              </a>
            </span>
          </footer>
        </section>
      </body>
    </html>
  );
}
