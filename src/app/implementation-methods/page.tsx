import SelectTabs from '@/components/selectTabs';
import Image from 'next/image';
import React from 'react';

const ImplementationMethods = () => {

  return (
    <section className='m-6 flex flex-col items-center justify-center p-2'>
      <h1 className='m-2 text-center text-xl font-extrabold text-green-700 first-letter:text-3xl md:text-2xl md:first-letter:text-4xl lg:text-3xl'>
        Welcome to the Modern Form Handling Showcase
      </h1>

      <Image
        src='/contact_3_2.webp'
        alt='How to make contact form in website to receive email'
        width={1024}
        height={800}
        priority={true}
        className='my-8 border-8 border-green-700'
      />

      <p className='mb-4 max-w-screen-md text-pretty text-xs text-gray-600 md:text-sm lg:text-base'>
        Adding a contact form to your site? It’s easier than you think! This
        quick guide shows you how to build one that sends messages straight to
        your inbox — so you never miss a chance to connect.
      </p>

      
     <SelectTabs/>
    </section>
  );
};

export default ImplementationMethods;
