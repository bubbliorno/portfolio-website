import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { FiMail } from 'react-icons/fi';

const contacts = [
  {
    label: 'GitHub',
    href: 'https://github.com/bubbliorno',
    icon: FaGithub,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/anthony-v0',
    icon: FaLinkedin,
  },
  {
    label: 'Email',
    href: 'mailto:antnhyvo@gmail.com',
    icon: FiMail,
  },
];

export default function ContactPage() {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-medium">Contact</h2>
      <div className="mt-6 flex gap-8">
        {contacts.map((contact) => (
          <a
            key={contact.label}
            href={contact.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 transition-opacity hover:opacity-70"
            aria-label={contact.label}
          >
            <contact.icon size={32} />
            <span className="text-sm font-medium">{contact.label}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
