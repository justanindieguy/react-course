interface ChildProps {
  color: string;
}

// Easiest way to indicate props and their types
export function Child({ color }: ChildProps) {
  return <div>{color}</div>;
}

/**
 * Allows to use other properties associated with Function Components such as
 * display name
 */
export const ChildAsFC: React.FC<ChildProps> = ({ color }) => {
  return <div>{color}</div>;
};
