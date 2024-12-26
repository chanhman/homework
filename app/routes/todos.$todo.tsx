import { Outlet, useParams } from '@remix-run/react';
import Tabs from '~/components/Tabs';

export default function TodoLayout() {
  const params = useParams();
  const tabs = [
    {
      to: `/todos/${params.todo}`,
      label: 'Detail',
    },
    {
      to: `/todos/${params.todo}/edit`,
      label: 'Edit',
    },
  ];
  return (
    <div>
      LAYOUT
      <Tabs data={tabs} />
      <Outlet />
    </div>
  );
}
