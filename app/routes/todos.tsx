import { ActionFunctionArgs } from '@remix-run/node';
import { Form, Outlet } from '@remix-run/react';
import Tabs from '~/components/Tabs';

export default function TodosLayout() {
  const tabs = [
    {
      to: '/todos',
      label: 'Todos',
    },
    {
      to: '/todos/completed',
      label: 'Completed',
    },
  ];
  return (
    <div>
      <Tabs data={tabs} />
      <Form method="post">
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" required />
        <button type="submit">Add</button>
      </Form>
      <h2>Todos</h2>
      <Outlet />
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
