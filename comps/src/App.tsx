import { useState } from 'react';
import Dropdown, { DropdownOption } from './components/Dropdown';

const App: React.FC = () => {
  const [selection, setSelection] = useState<DropdownOption | null>(null);

  const handleSelect = (option: DropdownOption) => setSelection(option);

  const options = [
    { label: 'Red', value: 'red' },
    { label: 'Green', value: 'green' },
    { label: 'Blue', value: 'blue' },
  ];

  return (
    <div className="flex">
      <Dropdown options={options} value={selection} onChange={handleSelect} />
      <Dropdown options={options} value={selection} onChange={handleSelect} />
    </div>
  );
};

export default App;
