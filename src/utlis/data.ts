
export interface BenefitItem {
  id: number;
  title: string;
  paragraph: string;
}

export const BenefitItems: BenefitItem[] = [
  {
    id: 1,
    title: 'Easy Communication',
    paragraph:
      'A contact form makes it simple for users to reach out without having to open their email client. All they need to do is fill in a few fields and hit send. This smooth process can significantly increase the chances of someone actually getting in touch.',
  },
  {
    id: 2,
    title: 'Spam Protection',
    paragraph:
      'Publishing your email address directly on a website can attract spambots. A contact form (especially one protected by Google reCAPTCHA) helps filter out unwanted spam messages, keeping your inbox cleaner and more secure.',
  },
  {
    id: 3,
    title: 'Structured Inquiries',
    paragraph:
      'You control the information you receive by defining fields like name, email, subject, and message. This structure makes it easier to organize, respond to, and prioritize inquiries.',
  },
  {
    id: 4,
    title: 'Professionalism',
    paragraph:
      "A contact form adds credibility. Visitors expect to see one — especially on business or service-based websites. It shows that you're accessible, responsive, and open to communication.",
  },
  {
    id: 5,
    title: 'Trackable Leads',
    paragraph:
      'If integrated with tools like Google Analytics or CRM platforms, contact form submissions can help you track user interactions and understand how leads are generated from your site.',
  },
  {
    id: 6,
    title: 'Better User Experience',
    paragraph:
      "Users don't have to switch to their email app or copy-paste your email address. A well-designed, mobile-friendly form provides a smoother experience — and a higher chance they’ll actually send a message.",
  },
];

export interface HeaderItems {
  title: string;
  href: string;
}

export const HeaderItem: HeaderItems[] = [
  { title: 'Implementation Methods', href: '/implementation-methods' },
  // { title: 'See examples', href: '/see-examples' },
];


