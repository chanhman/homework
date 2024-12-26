import { ActionFunctionArgs, LoaderFunctionArgs } from '@remix-run/node';
import {
  Form,
  redirect,
  useActionData,
  useLoaderData,
  useParams,
} from '@remix-run/react';

export async function loader({ params }: LoaderFunctionArgs) {
  const response = await fetch(`http://localhost:3000/todos/${params.todo}`);
  const json = await response.json();

  return json;
}

export default function TodoEdit() {
  const actionData = useActionData<typeof action>();
  const loaderData = useLoaderData<typeof loader>();
  const params = useParams();

  return (
    <div>
      {actionData?.success && <p>Todo updated!</p>}
      <h2>Edit {params.todo}</h2>
      <Form method="post">
        <input type="hidden" name="id" value={loaderData.id} />
        <label htmlFor="title">Title</label>
        <br />
        <input
          type="text"
          name="title"
          id="title"
          defaultValue={loaderData.title}
        />
        <br />
        <label htmlFor="completed">Completed</label>
        <input
          type="checkbox"
          name="completed"
          id="completed"
          defaultChecked={loaderData.completed}
          value="true"
        />
        <button type="submit">Save</button>
        <button type="submit" name="command" value="delete">
          Delete
        </button>
      </Form>
    </div>
  );
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const command = String(formData.get('command'));
  const id = String(formData.get('id'));
  const title = String(formData.get('title'));
  const completed = String(formData.get('completed'));
  const isCompleted = completed === 'true';

  if (command === 'delete') {
    const response = await fetch(`http://localhost:3000/todos/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      return redirect('/todos');
    }

    return { success: response.ok };
  }

  const response = await fetch(`http://localhost:3000/todos/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id, title, completed: isCompleted }),
  });

  if (response.ok) {
    return redirect('/todos');
  }

  return { success: response.ok };
}
