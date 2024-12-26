import { Link, useLoaderData } from '@remix-run/react';

export const loader = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const json = await response.json();

  return json;
};

export default function Todos() {
  const loaderData = useLoaderData();
  console.log(loaderData);

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
