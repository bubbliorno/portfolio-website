import { NavLink } from 'react-router-dom';

const links = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
];

export default function Header() {
  return (
    <header className="w-fit">
      <h1 className="font-display text-3xl font-extralight tracking-tight sm:text-6xl">
        Anthony Võ
      </h1>
      <p className="mt-0.5 text-xs font-light tracking-tighter sm:text-sm">
        Software Engineer + Designer
      </p>

      <nav className="mt-6">
        <ol className="flex flex-col gap-2 text-xs tracking-tight sm:text-sm">
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
