import { useParams } from '@remix-run/react';

export default function TodoEdit() {
  const params = useParams();

  return (
    <div>
      <h2>Edit {params.todo}</h2>
      Edit page!
    </div>
  );
}
