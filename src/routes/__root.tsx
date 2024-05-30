import { Outlet, createRootRoute } from '@tanstack/react-router';
import { Navbar } from '../components/NavBar';

export const Route = createRootRoute({
  component: () => (
    <>
      <Navbar />
      <Outlet />
    </>
  ),
});
