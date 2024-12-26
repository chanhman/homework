import { Link, Outlet } from '@remix-run/react';

export default function Todo() {
  return (
    <div>
      LAYOUT
      <ul>
        <li>
          <Link to="/todos/test">Detail</Link>
        </li>
        <li>
          <Link to="/todos/test/edit">Edit</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
