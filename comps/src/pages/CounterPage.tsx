import { useEffect, useState } from 'react';
import Button from '../components/Button';

interface CounterPageProps {
  initialCount: number;
}

const CounterPage: React.FC<CounterPageProps> = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    console.log(count);
  }, [count]);

  const handleClick = () => setCount(count + 1);

  return (
    <div>
      <h1>Count is {count}</h1>
      <Button primary rounded onClick={handleClick}>
        Increment
      </Button>
    </div>
  );
};

export default CounterPage;
