import { Form, Link, useLoaderData } from '@remix-run/react';

export const loader = async () => {
  const response = await fetch('http://localhost:3000/todos');
  const json = await response.json();
  const completed = json.filter(
    (todo: { completed: boolean }) => todo.completed
  );
  return completed;
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
      <Form method="post">
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" required />
        <button type="submit">Add</button>
      </Form>
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
