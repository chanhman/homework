import { Link, useLocation } from '@remix-run/react';

export default function Tabs({
  data,
}: {
  data: {
    to: string;
    label: string;
  }[];
}) {
  const location = useLocation();

  return (
    <ul>
      {data.map((tab, index) => {
        return (
          <li
            key={index}
            style={{
              backgroundColor:
                location.pathname === tab.to ? 'red' : 'transparent',
            }}
          >
            <Link to={tab.to}>{tab.label}</Link>
          </li>
        );
      })}
    </ul>
  );
}
