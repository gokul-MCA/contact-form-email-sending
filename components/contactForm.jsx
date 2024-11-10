// the form validated through   ----->  "React Hook Form"
// install dependency
// npm i react-hook-form
// Axios (for making HTTP requests) ---> npm i axios

"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [submit, setSubmit] = useState(0);
  const [status, setStatus] = useState("");

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("api/sendEmailer", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        setSubmit(0);
        setStatus("Successfully sent");
        console.log("Email sent successfully:", response.data);
        reset();
      } else {
        setStatus("Failed to send email!");
        console.log("Error sending email:", response.data);
      }
    } catch (error) {
      setStatus("An error occurred.");
      if (error.response) {
        // The request was made and the server responded with an error
        console.log("Error response:", error.response.data);
      } else if (error.request) {
        // The request was made but no response was received
        console.log("No response received:", error.request);
      } else {
        // Something else happened in setting up the request
        console.log("Error message:", error.message);
      }
    }
    setTimeout(() => {
      setStatus("");
    }, 2000);
  };

  return (
    <section className="mt-16">
      <div className="flex flex-col items-center justify-center px-4 py-6 lg:py-3">
        <h1 className="font-bold text-2xl mt-8">
          Contact Us - React Hook Form
        </h1>
        <div className="my-12">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="min-w-72 w-auto flex flex-col gap-4 p-6 rounded-lg bg-primary 
            border-2 hover:border-dominant 
            hover:shadow-lg active:bg-primary
            transition-colors duration-300 ease-in-out 
            md:w-[380px] md:gap-6 md:p-8 
            lg:w-[500px] lg:gap-8"
          >
            {/* name */}
            <div className="flex flex-col gap-1 md:gap-2">
              <label
                htmlFor="name"
                className="font-semibold pointer-events-none"
              >
                Name
              </label>

              <input
                id="name"
                {...register("name", { required: "Name is required" })}
                className="bg-white text-black text-sm outline-none h-8 
              rounded-lg indent-2 caret-dominant p-1 
              border-2 active:border-dominant hover:border-dominant lg:h-10"
              />

              {errors.name && (
                <span className="text-red-500 text-sm">
                  {errors.name.message}
                </span>
              )}
            </div>
            {/* end of name */}

            {/* email */}
            <div className="flex flex-col gap-1 md:gap-2">
              <label
                htmlFor="email"
                className="font-semibold pointer-events-none"
              >
                Email
              </label>

              <input
                id="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Email is not valid",
                  },
                })}
                className="bg-white text-black text-sm outline-none h-8 
              rounded-lg indent-2 caret-dominant p-1 
              border-2 active:border-dominant hover:border-dominant lg:h-10"
              />

              {errors.email && (
                <span className="text-red-500 text-sm">
                  {errors.email.message}
                </span>
              )}
            </div>
            {/* end of email */}

            {/* message */}
            <div className="flex flex-col gap-1 md:gap-2">
              <label
                htmlFor="message"
                className="font-semibold pointer-events-none"
              >
                How can we help?
              </label>

              <textarea
                id="message"
                {...register("message", {
                  required: "Message is required",
                  validate: {
                    minWords: (value) => {
                      const wordCount = value.trim().split(/\s+/).length;
                      if (wordCount < 6) {
                        return "Please enter a message with at least 6 words.";
                      }
                      return true;
                    },
                  },
                })}
                className="bg-white text-black text-sm outline-none h-28
              rounded-lg indent-2 caret-dominant p-1 pt-2 
              border-2 active:border-dominant hover:border-dominant lg:h-32"
              ></textarea>

              {errors.message && (
                <span className="text-red-500 text-sm">
                  {errors.message.message}
                </span>
              )}
            </div>
            {/* end of message */}

            {/* submit */}

            <button
              type="submit"
              disabled={submit && true}
              className="bg-dominant text-black rounded p-2 px-4 text-sm font-semibold
            border-2 border-dominant hover:border-secondary hover:text-secondary
            transition-colors duration-300 ease-in-out
            active:transform active:scale-95 active:transition-all lg:text-base"
              aria-label="Submit your message"
            >
              {submit ? <>Sending...</> : <>Send</>}
            </button>

            {/* end of submit button */}
            {status}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
