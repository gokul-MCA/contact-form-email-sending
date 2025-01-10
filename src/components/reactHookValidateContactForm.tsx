// the form validated through   ----->  "React Hook Form"
// install dependency
// npm i react-hook-form
// Axios (for making HTTP requests) ---> npm i axios

'use client';
import React, { useRef, useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { FormData } from '@/types/formdata';

const ReactHookValidateContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();
  const [submit, setSubmit] = useState<string>('');
  const [status, setStatus] = useState<string>('');
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [isVerified, setIsVerified] = useState(false);
  
  const handleCaptchaChange = async(token: string | null) => {
    try {
      if (token) {
        const response = await fetch("/api/captcha", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token }),
        });
 
        const data = await response.json();
        setIsVerified(data.success);
        if (!data.success) setStatus("CAPTCHA verification failed.");
      }
    } catch (e) {
      console.error("CAPTCHA validation failed", e);
      setIsVerified(false);
      setStatus("An error occurred with CAPTCHA validation.");
    }
  };

  const onSubmit = async (data: FormData) => {
    if (!isVerified) {
      setStatus("Please complete the CAPTCHA.");
      return;
  }
      setSubmit('Sending');
      try {
        const response = await axios.post('api/sendResend', data, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
      if (response.status === 200) {
        setSubmit('Sent');
        setStatus('Successfully sent ✅');
        // console.log("Email sent successfully:", response.data);
        //after the form successfully submitted we need to reset the form and submit status
        setTimeout(() => {
          reset();
          setSubmit('');
        }, 2000);
      } else {
        setSubmit('Retry');
        setStatus('Failed to send email ❌');
        // console.log("Error sending email:", response.data);
      }
    } catch (error: any) {
      setSubmit('Retry');
      setStatus('An error occurred.');
      if (error.response) {
        // The request was made and the server responded with an error
        console.log('Error response:', error.response.data);
      } else if (error.request) {
        // The request was made but no response was received
        console.log('No response received:', error.request);
      } else {
        // Something else happened in setting up the request
        console.log('Error message:', error.message);
      }
    }
    finally{setTimeout(() => 
      setStatus(''), 2000);
  }
 };


  return (
    <section>
      <div className='flex flex-col items-center justify-center px-4 py-6 lg:py-3'>
        <h1 className='px-6 text-lg font-bold text-secondary md:text-xl lg:text-2xl'>
          Contact Us - React Hook Form
        </h1>
        <div className='my-6 md:my-8'>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='flex w-auto min-w-72 flex-col gap-4 rounded-lg border-2 bg-primary p-4 transition-colors duration-300 ease-in-out hover:border-dominant hover:shadow-lg active:bg-primary md:w-[380px] md:p-8 lg:w-[500px] '
          >
            {/* name */}
            <div className='flex flex-col gap-1 md:gap-2'>
              <label
                htmlFor='name'
                className='pointer-events-none font-semibold'
              >
                Name
              </label>

              <input
                id='name'
                {...register('name', {
                  required: 'Name is required',
                  pattern: {
                    value: /^[a-zA-Z'-\s]{2,}$/,
                    message: 'Name is not valid',
                  },
                })}
                className='h-8 rounded-lg border-2 bg-white p-1 indent-2 text-sm text-black caret-dominant outline-none hover:border-dominant active:border-dominant lg:h-10 lg:text-lg'
              />

              {errors.name && (
                <span className='indent-0 text-sm text-red-500 lg:indent-2'>
                  {errors.name.message}
                </span>
              )}
            </div>
            {/* end of name */}

            {/* email */}
            <div className='flex flex-col gap-1 md:gap-2'>
              <label
                htmlFor='email'
                className='pointer-events-none font-semibold'
              >
                Email
              </label>

              <input
                id='email'
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: 'Email is not valid',
                  },
                })}
                className='h-8 rounded-lg border-2 bg-white p-1 indent-2 text-sm text-black caret-dominant outline-none hover:border-dominant active:border-dominant lg:h-10 lg:text-lg'
              />

              {errors.email && (
                <span className='indent-0 text-sm text-red-500 lg:indent-2'>
                  {errors.email.message}
                </span>
              )}
            </div>
            {/* end of email */}

            {/* message */}
            <div className='flex flex-col gap-1 md:gap-2'>
              <label
                htmlFor='message'
                className='pointer-events-none font-semibold'
              >
                How can we help?
              </label>

              <textarea
                id='message'
                {...register('message', {
                  required: 'Message is required',
                  validate: {
                    minWords: (value) => {
                      const wordCount = value.trim().split(/\s+/).length;
                      return wordCount >= 6 || 'Please enter a message with at least 6 words.';
                    },
                  },
                })}
                className='h-28 rounded-lg border-2 bg-white p-1 pt-2 indent-2 text-sm text-black caret-dominant outline-none hover:border-dominant active:border-dominant lg:h-32 lg:text-lg'
              ></textarea>

              {errors.message && (
                <span className='indent-0 text-sm text-red-500 lg:indent-2'>
                  {errors.message.message}
                </span>
              )}
            </div>
            {/* end of message */}

            {/* captcha */} 
            <ReCAPTCHA
             sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
             ref={recaptchaRef}
             onChange={handleCaptchaChange}
            />
            {/* end of captcha */}

            {/* submit */}
            <button
              type='submit'
              className={`rounded border-2 border-dominant bg-dominant p-2 px-4 text-sm font-semibold
               text-black transition-colors duration-300 ease-in-out  
               active:scale-95 active:transform active:transition-all lg:text-base
               ${
                isVerified ? 'hover:border-secondary hover:text-secondary' : 'opacity-50 cursor-not-allowed'
              }`}
              aria-label='Submit your message'
              disabled={!isVerified}
            >
              {submit ? submit : 'Send'}
            </button>
            {/* end of submit button */}
          </form>
          {status}
        </div>
      </div>
    </section>
  );
};

export default ReactHookValidateContactForm;
