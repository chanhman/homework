import { Link, useParams } from "@remix-run/react";

export default function Todo() {
  const params = useParams();

  return (
    <div>
      {params.todo}
      <br />
      <Link to="/todos/">Tests</Link>
      <br />
      <Link to="/todos/test/edit">Edit</Link>
      </div>
  )
}
