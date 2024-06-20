import React, { useContext } from 'react';

import NavigationContext from '../context/navigation';

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & { to: string };

const Link: React.FC<LinkProps> = ({ to, children }) => {
  const { navigate } = useContext(NavigationContext)!;

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }

    event.preventDefault();

    navigate(to);
  };

  return (
    <a href={to} onClick={handleClick}>
      {children}
    </a>
  );
};

export default Link;
