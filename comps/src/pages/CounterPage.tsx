import React, { useEffect, useState } from 'react';

import Panel from '../components/Panel';
import Button from '../components/Button';

interface CounterPageProps {
  initialCount: number;
}

const CounterPage: React.FC<CounterPageProps> = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);
  const [valueToAdd, setValueToAdd] = useState(0);

  const increment = () => setCount(count + 1);

  const decrement = () => setCount(count - 1);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value) || 0;

    setValueToAdd(value);
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    setCount(count + valueToAdd);
    setValueToAdd(0);
  };

  useEffect(() => console.log(count), [count]);

  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is {count}</h1>
      <div className="flex flex-row">
        <Button danger onClick={decrement}>
          Decrement
        </Button>
        <Button success onClick={increment}>
          Increment
        </Button>
      </div>

      <form onSubmit={handleSubmit}>
        <label htmlFor="increment">Add a lot</label>
        <input
          value={valueToAdd || ''}
          onChange={handleChange}
          type="number"
          name="increment"
          id="increment"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
        />
        <Button primary>Add it!</Button>
      </form>
    </Panel>
  );
};

export default CounterPage;
