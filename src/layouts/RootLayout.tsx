import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav';
import Hero from '../components/Hero';

export default function RootLayout() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main className="mx-auto max-w-4xl px-6 py-8">
        <Hero />
        <Outlet />
      </main>
    </div>
  );
}
