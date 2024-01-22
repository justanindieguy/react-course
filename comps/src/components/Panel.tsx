import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';

const Panel: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...rest
}) => {
  const finalClassNames = twMerge(
    classNames('border rounded p-3 shadow bg-white w-full', className)
  );

  return (
    <div {...rest} className={finalClassNames}>
      {children}
    </div>
  );
};

export default Panel;
