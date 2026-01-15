export const Button = ({
  count,
  onClick,
}: {
  count: number;
  onClick: () => void;
}) => {
  return <button onClick={onClick}>count is {count}</button>;
};
