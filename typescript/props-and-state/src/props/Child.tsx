interface ChildProps {
  children?: React.ReactNode;
  color: string;
  handleClick: () => void;
}

// Easiest way to indicate props and their types
export function Child({ children, color, handleClick }: ChildProps) {
  return (
    <div>
      <div>{children}</div>
      <div>{color}</div>
      <button onClick={handleClick}>Click Me!</button>
    </div>
  );
}

/**
 * Allows to use other properties associated with Function Components such as
 * display name
 */
export const ChildAsFC: React.FC<ChildProps> = ({
  children,
  color,
  handleClick,
}) => {
  return (
    <div>
      <div>{children}</div>
      <div>{color}</div>
      <button onClick={handleClick}>Click Me!</button>
    </div>
  );
};
