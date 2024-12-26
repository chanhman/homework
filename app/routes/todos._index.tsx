import { Link, useLoaderData } from '@remix-run/react';

export const loader = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const json = await response.json();

  return json;
};

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export default function Todos() {
  const loaderData = useLoaderData<typeof loader>();
  console.log(loaderData);
  return (
    <div>
      <h2>Todos</h2>
      <ul>
        {loaderData.map((todo: Todo) => (
          <li key={todo.id}>
            <Link to={`/todos/${todo.id}`}>{todo.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
