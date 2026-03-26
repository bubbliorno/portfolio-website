import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav';
import Header from '../components/Header';

export default function RootLayout() {
  return (
    <div className="min-h-screen">
      <main className="mx-6 my-8">
        <Header />
        <Nav />
        <Outlet />
      </main>
    </div>
  );
}
