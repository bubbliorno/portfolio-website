const contacts = [
  {
    label: 'GitHub',
    href: 'https://github.com/bubbliorno',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/anthony-v0',
  },
  {
    label: 'Email',
    href: 'mailto:antnhyvo@gmail.com',
  },
];

export default function ContactPage() {
  return (
    <section className="flex grow">
      <ol className="flex flex-col justify-end gap-1">
        {contacts.map((contact) => (
          <li key={contact.label}>
            <a
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className=""
              aria-label={contact.label}
            >
              <span className="text-xs font-bold tracking-tight xl:text-sm">
                {contact.label} ↗
              </span>
            </a>
          </li>
        ))}
      </ol>
    </section>
  );
}
