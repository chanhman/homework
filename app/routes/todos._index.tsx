import { Link } from "@remix-run/react";

export default function Todos() {
  return (
    <div>
      Todos

      <br />
      <Link to="/todos/test">test</Link>

      <br />Add list of todos next
    </div>
  )
}
