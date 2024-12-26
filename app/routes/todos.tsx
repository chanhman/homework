import { Outlet } from '@remix-run/react';
import Tabs from '~/components/Tabs';

export default function TodosLayout() {
  const tabs = [
    {
      to: `/todos`,
      label: 'Todos',
    },
    {
      to: `/todos/completed`,
      label: 'Completed',
    },
  ];
  return (
    <div>
      <Tabs data={tabs} />
      <Outlet />
    </div>
  );
}
