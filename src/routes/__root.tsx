import { Link, Outlet, createRootRoute } from '@tanstack/react-router';

export const Route = createRootRoute({
  component: () => (
    <>
      <Link to="/">Navbar</Link>
      <Outlet />
    </>
  ),
});
