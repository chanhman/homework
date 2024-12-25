import { Link, useParams } from '@remix-run/react';

export default function Todo() {
  const params = useParams();

  return (
    <div>
      <h2>{params.todo}</h2>
      <ul>
        <li>Detail</li>
        <li>
          <Link to="/todos/test/edit">Edit</Link>
        </li>
      </ul>
    </div>
  );
}
