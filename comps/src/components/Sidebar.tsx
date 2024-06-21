import { LinkModel } from '../models/LinkModel';
import Link from './Link';

const Sidebar = () => {
  const links: LinkModel[] = [
    { label: 'Dropdown', path: '/' },
    { label: 'Accordion', path: '/accordion' },
    { label: 'Buttons', path: '/buttons' },
  ];

  const renderedLinks: JSX.Element[] = links.map(({ label, path }) => {
    return (
      <Link key={label} to={path}>
        {label}
      </Link>
    );
  });

  return (
    <div className="sticky top-0 overflow-y-auto flex flex-col">
      {renderedLinks}
    </div>
  );
};

export default Sidebar;
