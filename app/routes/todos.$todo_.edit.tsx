import { Link, useParams } from "@remix-run/react";

export default function TodoEdit() {
  const params = useParams();

  return (
    <div>Edit {params.todo}
    <br />
      <Link to="/todos/test">Detail</Link>
    </div>
  )
}
