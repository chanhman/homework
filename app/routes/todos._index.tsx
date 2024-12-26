import { ActionFunctionArgs } from '@remix-run/node';
import { Form, Link, useLoaderData } from '@remix-run/react';

export const loader = async () => {
  const response = await fetch('http://localhost:3000/todos');
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

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const title = String(formData.get('title'));
  const response = await fetch('http://localhost:3000/todos/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title, completed: false }),
  });

  return { success: response.ok };
}
