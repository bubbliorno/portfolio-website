import { NavLink } from 'react-router-dom';

const links = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
];

export default function Header() {
  return (
    <header className="fixed">
      <h1 className="font-display text-4xl font-extralight tracking-tight whitespace-nowrap lg:text-6xl">
        Anthony Võ
      </h1>
      <p className="mt-0.5 text-xs font-light tracking-tight">SWE + Designer</p>

      <nav className="mt-9">
        <ol className="flex flex-col gap-2 text-sm tracking-tight">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  isActive ? 'font-bold' : 'font-normal'
                }
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
              className="font-normal"
            >
              Resume ↗
            </a>
          </li>
        </ol>
      </nav>
    </header>
  );
}
