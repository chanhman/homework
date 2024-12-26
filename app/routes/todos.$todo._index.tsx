import { useParams } from '@remix-run/react';

export default function Todo() {
  const params = useParams();

  return (
    <div>
      <h2>{params.todo}</h2>
      Detail page!
    </div>
  );
}
