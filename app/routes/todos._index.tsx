import { Link, useLoaderData } from '@remix-run/react';

export const loader = async () => {
  const response = await fetch('http://localhost:3000/todos');
  const json = await response.json();

  return json;
};

export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export default function Todos() {
  const loaderData = useLoaderData<typeof loader>();

  return (
    <ul>
      {loaderData.map((todo: Todo) => (
        <li key={todo.id}>
          <Link to={`/todos/${todo.id}`}>{todo.title}</Link>
        </li>
      ))}
    </ul>
  );
}
