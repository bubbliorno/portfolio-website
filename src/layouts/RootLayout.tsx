import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav';
import Header from '../components/Header';

export default function RootLayout() {
  return (
    <div className="flex min-h-dvh">
      <main className="border-text/50 m-5 grow border-2 p-5 sm:m-12 sm:p-12">
        <Header />
        <Nav />
        <Outlet />
      </main>
    </div>
  );
}
