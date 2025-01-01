import ManualValidateContactForm from "@/components/manualValidateContactForm"
import { Metadata } from "next"


export const metadata: Metadata = {
  title: "Manual Validate - Contact Form Email Sending",
  description:
    "Learn how to manually validate contact form inputs in React, ensuring data integrity before submission. This guide covers using Nodemailer with SMTP for backend email delivery, along with techniques for handling form validation and sending data using fetch in a Next.js application.",
  keywords:
    "contact form, nodemailer, smtp server,form manual validation, fetch, nextjs contact form, send email using nodemailer ",
  metadataBase: new URL(process.env.NEXTAUTH_URL), // Use `NEXTAUTH_URL`
  alternates: {
    canonical: "/manual-validate",
  },

}


const ManualValidate = () => {
  return (
    <ManualValidateContactForm/>
  )
}

export default ManualValidate