import type { LoaderFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export const loader: LoaderFunction = async ({ params }) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${params.todo}`
  );
  const json = await response.json();

  return json;
};

export default function Todo() {
  const loaderData = useLoaderData<typeof loader>();
  console.log(loaderData);
  return (
    <div>
      {loaderData.title}
      <br />
      {loaderData.completed ? 'Completed' : 'Not completed'}
      <br />
    </div>
  );
}
