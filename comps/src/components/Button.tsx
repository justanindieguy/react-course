import className from 'classnames';
import { twMerge } from 'tailwind-merge';
import Exclusive from '../types/Exclusive';

type Variants = ['primary', 'secondary', 'success', 'warning', 'danger'];

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  Partial<{ outline?: boolean; rounded?: boolean }> &
  Exclusive<Variants>;

const Button: React.FC<ButtonProps> = ({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}) => {
  const classes = twMerge(
    className(rest.className, 'flex items-center px-3 py-1.5 border', {
      'border-blue-500 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white':
        primary,
      'border-gray-900 bg-gray-900 hover:bg-gray-800 active:bg-gray-700 text-white':
        secondary,
      'border-green-500 bg-green-500 hover:bg-green-600 active:bg-green-700 text-white':
        success,
      'border-yellow-400 bg-yellow-400 hover:bg-yellow-500 active:bg-yellow-600 text-white':
        warning,
      'border-red-500 bg-red-500 hover:bg-red-600 active:bg-red-700 text-white':
        danger,
      'rounded-full': rounded,
      'bg-white hover:bg-gray-100 active:bg-gray-200': outline,
      'text-blue-500': outline && primary,
      'text-gray-900': outline && secondary,
      'text-green-500': outline && success,
      'text-yellow-400': outline && warning,
      'text-red-500': outline && danger,
    })
  );

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
};

export default Button;
