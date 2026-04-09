import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

export default function RootLayout() {
  return (
    <div className="flex min-h-dvh">
      <main className="border-text/50 relative m-5 flex grow flex-col border-2 p-5 sm:m-12 sm:p-12">
        <Header />
        <div className="grow">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
