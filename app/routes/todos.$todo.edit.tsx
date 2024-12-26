import { ActionFunctionArgs, LoaderFunctionArgs } from '@remix-run/node';
import { Form, useLoaderData, useParams } from '@remix-run/react';

export async function loader({ params }: LoaderFunctionArgs) {
  const response = await fetch(`http://localhost:3000/todos/${params.todo}`);
  const json = await response.json();

  return json;
}

export default function TodoEdit() {
  const loaderData = useLoaderData<typeof loader>();
  const params = useParams();

  return (
    <div>
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
        <input type="hidden" name="completed" value="false" />
        <input
          type="checkbox"
          name="completed"
          id="completed"
          defaultChecked={loaderData.completed}
          value="true"
        />
        <button type="submit">Save</button>
      </Form>
    </div>
  );
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  console.log(formData);
  return null;
}
