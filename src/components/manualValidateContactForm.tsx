
//Manual Validate ---> best for small form only.


"use client";
import React, { ChangeEvent, useState } from "react";
import { FormData, FormErrors } from "@/types/formdata";


const ManualValidateContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ name:"", email: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submit, setSubmit] = useState<string>("");
  const [status, setStatus] = useState<string>("");


  const namePattern = /^[a-zA-Z'-\s]{2,}$/;
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = (): boolean => {
    let newErrors: FormErrors = {};

    if(!formData.name){
      newErrors.name='Name is required'
    }
    else if(!namePattern.test(formData.name)){
      newErrors.name='Name must contain only alphabetic characters and spaces.'
    }

    if(!formData.email){
      newErrors.email='Email is required'
    }
    else if(!emailPattern.test(formData.email)){
      newErrors.email='Please enter a valid email address.'
    }

    if(!formData.message){
      newErrors.message='Message is required'
    }
    else if(((formData.message).split(' ')).length<6){
      newErrors.message='Please enter a message with at least 6 words.'
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if(validateForm()){
      setSubmit("Sending");
    try {
      const response = await fetch("/api/sendNodeMailer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setSubmit("Sent")
        setStatus("Successfully sent ✅");
        setTimeout(()=>{
          setFormData({ name: "", email: "", message: "" }); // Reset form
          setSubmit("")
        },2000)
      } else {
        setSubmit("Retry");
        setStatus('Failed to send email ❌');
      }
    } catch (error: any) {
      setSubmit("Retry")
      setStatus('An error occurred.');
    }
    setTimeout(() => {
      setStatus('');
    }, 2000); // Hide notification after 2 seconds
  };   
}
  return (
    <section>
      <div className="flex flex-col items-center justify-center  px-4 py-4 lg:py-3 ">
        <h1 className="font-bold text-lg md:text-xl lg:text-2xl text-secondary px-6 ">
          Contact Us - Manual Validation using State Management
        </h1>
        <div className="my-6 md:my-8 ">
          {/* form and validation */}
          <form
            onSubmit={handleSubmit}
            className="min-w-72 w-auto flex flex-col gap-4 p-6 rounded-lg bg-primary
          border-2  hover:border-dominant  
          hover:shadow-lg active:bg-primary
          transition-colors duration-300 ease-in-out 
          md:w-[380px] md:gap-6 md:p-8
          lg:w-[500px] lg:gap-8 "
          >

             {/* name */}
             <div className="flex flex-col gap-1 md:gap-2 ">
              <label
                htmlFor="name"
                className="font-semibold pointer-events-none "
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                // autoFocus
                className="bg-white text-black text-sm outline-none h-8 
              rounded-lg indent-2 caret-dominant p-1 
              border-2 active:border-dominant hover:border-dominant lg:h-10 lg:text-lg "
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && 
              <span className="text-sm indent-0 lg:indent-2 text-red-500 ">{errors.name}
              </span>}
            </div>
             {/* end of name */}

            {/* email */}
            <div className="flex flex-col gap-1 md:gap-2 ">
              <label
                htmlFor="email"
                className="font-semibold pointer-events-none "
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                className="bg-white text-black text-sm outline-none h-8 
              rounded-lg indent-2 caret-dominant p-1 
              border-2 active:border-dominant hover:border-dominant lg:h-10 lg:text-lg "
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span className="text-sm indent-0 lg:indent-2 text-red-500 ">{errors.email}</span>}
            </div>
             {/* end of email */}

            {/* message */}
            <div className="flex flex-col gap-1 md:gap-2 ">
              <label
                htmlFor="message"
                className="font-semibold pointer-events-none "
              >
                How can we help?
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-white text-black text-sm outline-none h-28
              rounded-lg indent-2 caret-dominant p-1 pt-2 
              border-2 active:border-dominant hover:border-dominant lg:h-32 lg:text-lg "
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              {errors.message && <span className="text-sm indent-0 lg:indent-2 text-red-500 ">{errors.message}</span>}
            </div>
             {/* end of message */}

            {/* submit */}
            <button
              type="submit"
              className="bg-dominant text-black rounded p-2 px-4 text-sm font-semibold
            border-2 border-dominant hover:border-secondary hover:text-secondary
            transition-colors duration-300 ease-in-out
            active:transform active:scale-95 active:transition-all lg:text-base "
              aria-label="Submit your message"
            >
              {submit? submit:"Send"}
            </button>
             {/* end of submit button */}

          </form>
          {status}
        </div>
      </div>
    </section>
  );
};

export default ManualValidateContactForm;
