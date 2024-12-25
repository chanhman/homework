import { Link, useParams } from '@remix-run/react';

export default function TodoEdit() {
  const params = useParams();

  return (
    <div>
      <h2>Edit {params.todo}</h2>
      <ul>
        <li>
          <Link to="/todos/test">Detail</Link>
        </li>
        <li>
          <span>Edit</span>
        </li>
      </ul>
    </div>
  );
}
