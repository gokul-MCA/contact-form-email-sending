<<<<<<< HEAD
import Link from 'next/link';

export default function Home() {
  return (
    <div className='m-6 flex flex-col items-center justify-center p-2'>
      <h1 className='m-2 mb-8 text-center text-xl font-extrabold text-green-700 first-letter:text-3xl md:text-2xl md:first-letter:text-4xl lg:text-3xl'>
        Welcome to the Modern Form Handling Showcase
      </h1>

      <div className='mb-8 w-full max-w-3xl rounded-lg bg-white p-8 shadow-lg hover:shadow-2xl hover:shadow-primary'>
        <h2 className='mb-4 text-lg font-semibold text-[#035E35] md:text-xl'>
          React Hook Form + Resend + Axios
        </h2>
        <p className='mb-4 text-xs text-gray-600 md:text-sm lg:text-base'>
          React Hook Form (RHF) simplifies form handling and validation in React
          apps with minimal re-renders. When integrated with the Resend API for
          email notifications, RHF collects and validates form data, while Axios
          handles sending it to Resend. This seamless workflow enables efficient
          email triggers like confirmations or resets, providing a streamlined
          solution for form management and user communication.
        </p>
        <Link
          href='/reactHook-validate'
          className='rounded-lg bg-green-800 px-4 py-2 text-sm text-white transition duration-200 hover:bg-secondary md:text-base'
        >
          <span className='sr-only'>Click here to visit React Hook Form </span>
          Click here
        </Link>
      </div>

      <div className='m-2 w-full max-w-3xl rounded-lg bg-white p-8 shadow-lg hover:shadow-2xl hover:shadow-primary'>
        <h2 className='mb-4 text-lg font-semibold text-[#035E35] md:text-xl'>
          React Manual Validation + Nodemailer (SMTP) + Fetch
        </h2>
        <p className='mb-4 text-xs text-gray-600 md:text-sm lg:text-base'>
          Manually validating form inputs in React gives you complete control
          over data integrity before submission. Once the form is validated, you
          can use Nodemailer, a popular Node.js library, to send emails via SMTP
          for backend email delivery. By using fetch, you can send the validated
          data to your server, where Nodemailer handles email composition and
          delivery. This setup ensures accurate form data and reliable email
          notifications, all while giving you flexibility over validation and
          SMTP configuration.
        </p>
        <Link
          href='/manual-validate'
          className='rounded-lg bg-green-800 px-4 py-2 text-sm text-white transition duration-200 hover:bg-secondary md:text-base'
        >
          <span className='sr-only'>
            Click here to visit React Manual Validation Form
          </span>
          Click here
        </Link>
      </div>
    </div>
=======
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BenefitItems } from 'src/utlis/data';

export default function Home() {
  return (
    <section className='m-6 flex flex-col items-center justify-center p-2'>
      <h1 className='m-2 text-center text-xl font-extrabold text-green-700 first-letter:text-3xl md:text-2xl md:first-letter:text-4xl lg:text-3xl'>
        Why a Contact Form Is Important for Your Website
      </h1>

      <Image
        src='/why-your-website-needs-a-contact-form.webp'
        alt='Why a contact form is needed on your website'
        width={1024}
        height={800}
        priority={true}
        className='my-4 border-8 border-green-700 md:my-8'
      />

      <p className='mb-0 max-w-screen-md text-pretty text-xs text-gray-600 md:mb-4 md:text-sm lg:text-base'>
        Whether you're running a business, a portfolio, or a personal blog, a
        contact form is more than just a convenience — it’s a vital
        communication bridge between you and your visitors.
      </p>

      <div className='my-4 max-w-screen-md'>
        {BenefitItems.map((item) => (
          <div key={item.id} >
            <h3 className='my-2 text-xl font-medium md:text-2xl'>
              {item.id}. {item.title}
            </h3>
            <p className='mb-4 text-pretty text-sm tracking-tight text-gray-600 md:text-base lg:text-lg'>
              {item.paragraph}
            </p>
          </div>
        ))}
      </div>

      <Link
          href='/implementation-methods'
          className='rounded-lg bg-green-800 px-4 py-2 text-sm text-white transition duration-200 hover:bg-secondary md:text-base'
        >
          <span className='sr-only'>
            Click here to visit Implementation details
          </span>
          Implementation methods
        </Link>

    </section>
>>>>>>> 4605fda (fix: added new pages)
  );
}
