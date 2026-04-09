import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

export default function RootLayout() {
  return (
    <div className="flex min-h-dvh">
      <main className="border-text/50 relative m-(--pad) flex grow flex-col border p-(--pad) sm:border-2">
        <Header />
        <div className="flex grow flex-col">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
