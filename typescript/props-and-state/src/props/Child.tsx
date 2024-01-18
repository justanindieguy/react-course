interface ChildProps {
  color: string;
}

export function Child({ color }: ChildProps) {
  return <div>{color}</div>;
}
