import { Link } from '@remix-run/react';

export default function Todos() {
  return (
    <div>
      <h2>Todos</h2>
      <ul>
        <li>
          <Link to="/todos/test">test</Link>
        </li>
      </ul>
    </div>
  );
}
