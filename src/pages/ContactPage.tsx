// import { FaGithub, FaLinkedin } from 'react-icons/fa6';
// import { FiMail } from 'react-icons/fi';

const contacts = [
  {
    label: 'GitHub',
    href: 'https://github.com/bubbliorno',
    // icon: FaGithub,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/anthony-v0',
    // icon: FaLinkedin,
  },
  {
    label: 'Email',
    href: 'mailto:antnhyvo@gmail.com',
    // icon: FiMail,
  },
];

export default function ContactPage() {
  return (
    <section className="flex grow items-end">
      <ol>
        {contacts.map((contact) => (
          <li key={contact.label}>
            <a
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center transition-opacity hover:opacity-70"
              aria-label={contact.label}
            >
              <span className="text-sm leading-normal font-bold">
                {contact.label} ↗
              </span>
            </a>
          </li>
        ))}
      </ol>
    </section>
  );
}
