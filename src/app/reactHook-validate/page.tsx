import ReactHookValidateContactForm from '@/components/reactHookValidateContactForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reat Hook Form Validate - Contact Form Email Sending',
  description:
    'Learn how to validate contact form inputs using React Hook Form and send emails using the Resend API with Axios in a Next.js app.',
  keywords:
    'contact form, resend api, form react hook validation, axios, nextjs contact form, send email using resend ',
  metadataBase: new URL(process.env.NEXTAUTH_URL), // Use `NEXTAUTH_URL`
  alternates: {
    canonical: '/reactHook-validate',
  },
};

const ReactHookValidate = () => {
  return <ReactHookValidateContactForm />;
};

export default ReactHookValidate;
