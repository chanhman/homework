import { Link, useLoaderData } from '@remix-run/react';
import { Todo } from './todos._index';

export const loader = async () => {
  const response = await fetch('http://localhost:3000/todos');
  const json = await response.json();
  const completed = json.filter(
    (todo: { completed: boolean }) => todo.completed
  );
  return completed;
};

export default function Todos() {
  const loaderData = useLoaderData<typeof loader>();
  console.log(loaderData);
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
