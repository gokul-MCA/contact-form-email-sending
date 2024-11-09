import Link from "next/link";

export default function Home() {
  return (
    <div className="p-10 min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
        Welcome to the Modern Form Handling Showcase
      </h1>

      <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">React Hook Form + Resend</h2>
        <p className="text-gray-600 mb-6">
          Discover how React Hook Form can streamline form handling and validation while integrating seamlessly with Resend API for email notifications.
        </p>
        <Link href="/react-hook"className="text-white bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-200">
            Learn More
        </Link>
      </div>

      <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">React Manual Validation + Nodemailer (SMTP)</h2>
        <p className="text-gray-600 mb-6">
          Learn how to manually validate form inputs and send emails using Nodemailer and SMTP for backend email delivery.
        </p>
        <Link href="/manual-validate"className="text-white bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-200">
            Learn More
        </Link>
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-500">Built with love using 💚 <span className="font-semibold">Next.js and React</span></p>
      </div>
    </div>
  );
}
