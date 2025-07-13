'use client';

import Link from 'next/link';
import React, { useState } from 'react';

const NextJS = () => {
  return (
    <>
      <div className='my-4 w-full max-w-3xl rounded-lg bg-white p-8 shadow-lg hover:shadow-2xl hover:shadow-primary'>
        <h2 className='mb-4 text-lg font-semibold text-[#035E35] md:text-xl'>
          React Hook Form + Resend + Axios
        </h2>
        <p className='mb-4 text-pretty text-sm tracking-tight text-gray-600 md:text-base lg:text-lg'>
          React Hook Form (RHF) simplifies form handling and validation in React
          apps with minimal re-renders. When integrated with the Resend API for
          email notifications, RHF collects and validates form data, while Axios
          handles sending it to Resend. This seamless workflow enables efficient
          email triggers like confirmations or resets, providing a streamlined
          solution for form management and user communication.
        </p>
        <Link
          href='/implementation-methods/reactHook-validate'
          className='rounded-lg bg-green-800 px-4 py-2 text-sm text-white transition duration-200 hover:bg-secondary md:text-base'
        >
          <span className='sr-only'>Click here to visit React Hook Form </span>
          Click here
        </Link>
      </div>

      <div className='w-full max-w-3xl rounded-lg bg-white p-8 shadow-lg hover:shadow-2xl hover:shadow-primary'>
        <h2 className='mb-4 text-lg font-semibold text-[#035E35] md:text-xl'>
          React Manual Validation + Nodemailer (SMTP) + Fetch
        </h2>
        <p className='mb-4 text-pretty text-sm tracking-tight text-gray-600 md:text-base lg:text-lg'>
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
          href='/implementation-methods/manual-validate'
          className='rounded-lg bg-green-800 px-4 py-2 text-sm text-white transition duration-200 hover:bg-secondary md:text-base'
        >
          <span className='sr-only'>
            Click here to visit React Manual Validation Form
          </span>
          Click here
        </Link>
      </div>
    </>
  );
};
const ReactJS = () => {
  return (
    <>
      <div className='my-4 w-full max-w-3xl rounded-lg bg-white p-8 shadow-lg hover:shadow-2xl hover:shadow-primary'>
        <h2 className='mb-4 text-lg font-semibold text-[#035E35] md:text-xl'>
          React Hook Form + EmailJS
        </h2>
        <p className='mb-4 text-pretty text-sm tracking-tight text-gray-600 md:text-base lg:text-lg'>If you&apos;re using only frontend</p>
        <Link
          href='https://medium.com/@chrischarlesgibson/how-to-make-a-contact-form-using-emailjs-and-react-hook-form-8d9072b6474a'
          target='_blank'
          className='rounded-lg bg-green-800 px-4 py-2 text-sm text-white transition duration-200 hover:bg-secondary md:text-base'
        >
          <span className='sr-only'>
            Click here to visit Implementation of React Hook Form + EmailJS{' '}
          </span>
          Click here
        </Link>
      </div>

      <div className='w-full max-w-3xl rounded-lg bg-white p-8 shadow-lg hover:shadow-2xl hover:shadow-primary'>
        <h2 className='mb-4 text-lg font-semibold text-[#035E35] md:text-xl'>
          Node.js + Nodemailer + Express
        </h2>
        <p className='mb-4 text-pretty text-sm tracking-tight text-gray-600 md:text-base lg:text-lg'>Recommended method for Full-stack application</p>
        <Link
          href='https://w3collective.com/react-contact-form/'
          target='_blank'
          className='rounded-lg bg-green-800 px-4 py-2 text-sm text-white transition duration-200 hover:bg-secondary md:text-base'
        >
          <span className='sr-only'>
            Click here to visit Implementation of React Contact Form using
            Node.js, Express
          </span>
          Click here
        </Link>
      </div>
    </>
  );
};
const PlainHTML = () => {
  return(
     <>
      <div className='my-4 w-full max-w-3xl rounded-lg bg-white p-8 shadow-lg hover:shadow-2xl hover:shadow-primary'>
        <h2 className='mb-4 text-lg font-semibold text-[#035E35] md:text-xl'>
          JavaScript + EmailJS
        </h2>
        <p className='mb-4 text-pretty text-sm tracking-tight text-gray-600 md:text-base lg:text-lg'>For Static Websites</p>
        <Link
          href='https://dev.to/ebereplenty/contact-form-with-emailjs-plain-javascript-365l'
          target='_blank'
          className='rounded-lg bg-green-800 px-4 py-2 text-sm text-white transition duration-200 hover:bg-secondary md:text-base'
        >
          <span className='sr-only'>
            Click here to visit Implementation of JavaScript + EmailJS{' '}
          </span>
          Click here
        </Link>
      </div>
    </>
  );
};
const SelectTabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    { label: 'NextJS', content: <NextJS /> },
    { label: 'ReactJS', content: <ReactJS /> },
    { label: 'HTML, CSS, JS', content: <PlainHTML /> },
  ];
  return (
    <div>
      <div className='mt-8 flex flex-col rounded border-2 bg-transparent shadow-md md:mb-4 md:w-[600px] md:flex-row md:rounded-full lg:w-[800px]'>
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`flex-1 rounded border p-2 text-center text-lg font-medium transition-colors duration-300 md:rounded-full md:p-3 md:text-xl lg:p-4 ${
              activeTab === index
                ? 'border-green-500 bg-primary text-green-700'
                : 'border-transparent text-black hover:text-green-600'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Active Tab Content */}
      <div className='mt-4 overflow-hidden rounded p-2 text-[#035E35] shadow md:mt-8 md:w-[600px] md:p-4 lg:w-[800px]'>
        <div className='my-4'>{tabs[activeTab].content}</div>
      </div>
    </div>
  );
};

export default SelectTabs;
