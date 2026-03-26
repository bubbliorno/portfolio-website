import { NavLink } from 'react-router-dom';

const links = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
  { to: '/resume', label: 'Resume' },
];

export default function Nav() {
  return (
    <nav className="flex items-center justify-start px-6 py-4">
      <ul className="flex gap-3 text-sm sm:gap-6 sm:text-base">
        {links.map((link) => (
          <li key={link.to}>
            <NavLink
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                isActive
                  ? 'font-medium underline underline-offset-4'
                  : 'font-light'
              }
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
