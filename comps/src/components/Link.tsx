import React from 'react';
import classNames from 'classnames';

import useNavigation from '../hooks/use-navigation';

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & { to: string };

const Link: React.FC<LinkProps> = ({ to, children }) => {
  const { navigate } = useNavigation()!;

  const classes = classNames('text-blue-500');

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }

    event.preventDefault();

    navigate(to);
  };

  return (
    <a className={classes} href={to} onClick={handleClick}>
      {children}
    </a>
  );
};

export default Link;
