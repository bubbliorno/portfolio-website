import { NavLink } from 'react-router-dom';

const links = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
];

export default function Header() {
  return (
    <header className="fixed z-10">
      <h1 className="font-display text-3xl font-extralight whitespace-nowrap xl:text-6xl">
        Anthony Võ
      </h1>
      <p className="mt-0.5 text-xs font-normal tracking-tight xl:text-sm">
        Software Engineer
      </p>

      <nav className="mt-9">
        <ol className="flex flex-col gap-2 text-xs tracking-tight xl:text-sm">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                viewTransition
                className="font-bold"
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          <li>
            <a
              href="/Anthony_Vo_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold"
            >
              Resume ↗
            </a>
          </li>
        </ol>
      </nav>
    </header>
  );
}
