# Contact Form Email 📪📬📭 Sending - (Manual Validation + SMTP + Fetch) & (React Hook Form + Resend + Axios)

This project demonstrates how to send contact form emails using various methods and technologies, offering a flexible and comprehensive solution for both manual form validation and React Hook Form integration. The repository includes examples of email sending using traditional SMTP with Nodemailer and modern Resend API, all tied together with frontend form validation using React Hook Form and Axios for API requests.

## ✨ Features

1. **Manual Validation**
   - A contact form using custom validation techniques without any external libraries, providing complete control over validation rules.
2. **React Hook Form**
   - A form handling solution that simplifies form validation and submission, using the popular React Hook Form library.
3. **Email Sending (SMTP)**
   - Demonstrates sending contact form data via SMTP using Nodemailer, allowing for email sending through a configured SMTP server.
4. **Email Sending (Resend API)**

   - Showcases sending emails using the Resend API, a modern and easy-to-use solution for email delivery without the complexity of SMTP setup.

5. **Axios for Fetching**
   - Uses Axios to make HTTP requests from the frontend, sending form data to the backend for email dispatch.

## 🚀 Tech Stack

1. **Frontend:**

   - Next.js (React framework)
   - React Hook Form (form handling and validation)
   - Axios (for making HTTP requests)

2. **Backend:**
   - Node.js (via Next.js API routes)
   - Nodemailer (for SMTP email sending)
   - Resend API (for modern email sending)

## ⚙️ Prerequisites

- Node.js installed.
- A Resend API key (if you're using Resend).
- SMTP server credentials (if you're using SMTP).

## 💻 Running the Project Locally

1. **Clone the repository**

   - git clone https://github.com/gokul-MCA/contact-form-email-sending.git
   - cd contact-form-email-sending

2. **Install Dependency**

   - Run the following command to install the necessary dependencies:
   - npm install

3. **Set up environment variables**

   - In the root of the project, create a .env.local file and add the following environment variables.

---

- Common Setup:

  - EMAIL=receiver_email (or) your_email
  - NEXTAUTH_URL=http://localhost:3000

- For SMTP:
  <!-- - SMTP_HOST=your_smtp_host
  - SMTP_PORT=your_smtp_port           -->

  - SMTP_USER=your_smtp_username
  - SMTP_PASS=your_smtp_password

- For Resend:
  - RESEND_API_KEY=your_resend_api_key

---

4. **Start the development server**

   - Run the following command to start the Next.js development server:
   - npm run dev
   - This will start the app on http://localhost:3000.

5. **Test the contact form**

   - Open your browser and navigate to http://localhost:3000.
   - Fill out the contact form and click Send Email
   - Check your inbox for the sent email (either through SMTP or Resend).

## 🗂️ Folder Structure

```
#Repository Map

.
└── contact-email/
    ├── public/
    │   └── favicon.ico
    ├── src/
    │   ├── app/
    │   │   ├── api/
    │   │   │   ├── sendNodeMailer/
    │   │   │   │   └── route.tsx
    │   │   │   └── sendResend/
    │   │   │       └── route.tsx
    │   │   ├── manual-validate/
    │   │   │   └── page.tsx
    │   │   ├── reactHook-validate/
    │   │   │   └── page.tsx
    │   │   ├── layout.tsx
    │   │   └── page.tsx
    │   ├── components/
    │   │   ├── manualValidateContactForm.tsx
    │   │   └── reactHookValidateContactForm.tsx
    │   ├── styles/
    │   │   └── globals.css
    │   └── types/
    │       └── formdata.ts
    └── env

```

## 📖 Contributing

- Feel free to fork this project, create issues, or submit pull requests. If you have suggestions or improvements, please open an issue and I will review it.

## 📝 License & Author

- This project is open source and available under the MIT License.
- [@gokul](https://github.com/gokul-MCA)💚

## 💡 Notes

- Ensure you never commit sensitive information, such as your Resend API key or SMTP credentials, to public repositories. Use the .env.local file to keep this information safe.
- The project is designed for Next.js 13+ with the new App Directory. If you're using an older version of Next.js, you may need to adjust your file structure to work with the traditional pages/ directory.
- For form validation, you can choose between React Hook Form and manual validation, depending on your preference and the complexity of the form.
