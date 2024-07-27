import React, { useReducer } from 'react';
import { produce } from 'immer';

import Panel from '../components/Panel';
import Button from '../components/Button';

interface State {
  count: number;
  valueToAdd: number;
}

enum ActionTypes {
  AddValueToCount = 'AddValueToCount',
  IncrementCount = 'IncrementCount',
  DecrementCount = 'DecrementCount',
  SetValueToAdd = 'SetValueToAdd',
}

type Action =
  | { type: ActionTypes.AddValueToCount }
  | { type: ActionTypes.SetValueToAdd; payload: number }
  | { type: ActionTypes.IncrementCount }
  | { type: ActionTypes.DecrementCount };

const reducer = (state: State, action: Action): void => {
  switch (action.type) {
    case ActionTypes.AddValueToCount:
      state.count += state.valueToAdd;
      state.valueToAdd = 0;
      return;
    case ActionTypes.SetValueToAdd:
      state.valueToAdd = action.payload;
      return;
    case ActionTypes.IncrementCount:
      state.count += 1;
      return;
    case ActionTypes.DecrementCount:
      state.count -= 1;
      return;
    default:
      throw new Error('Unexpected action type');
  }
};

interface CounterPageProps {
  initialCount: number;
}

const CounterPage: React.FC<CounterPageProps> = ({ initialCount }) => {
  const [state, dispatch] = useReducer(produce(reducer), {
    count: initialCount,
    valueToAdd: 0,
  });

  const increment = () => dispatch({ type: ActionTypes.IncrementCount });

  const decrement = () => dispatch({ type: ActionTypes.DecrementCount });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value) || 0;

    dispatch({ type: ActionTypes.SetValueToAdd, payload: value });
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    dispatch({ type: ActionTypes.AddValueToCount });
  };

  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is {state.count}</h1>
      <div className="flex flex-row gap-1">
        <Button danger onClick={decrement}>
          Decrement
        </Button>
        <Button success onClick={increment}>
          Increment
        </Button>
      </div>

      <form onSubmit={handleSubmit}>
        <label htmlFor="increment">Add a lot:</label>
        <input
          value={state.valueToAdd || ''}
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
