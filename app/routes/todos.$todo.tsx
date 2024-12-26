import { Link, Outlet, useParams } from '@remix-run/react';

export default function Todo() {
  const params = useParams();

  return (
    <div>
      LAYOUT
      <ul>
        <li>
          <Link to={`/todos/${params.todo}`}>Detail</Link>
        </li>
        <li>
          <Link to={`/todos/${params.todo}/edit`}>Edit</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
