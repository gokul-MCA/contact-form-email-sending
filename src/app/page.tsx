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
  );
}
