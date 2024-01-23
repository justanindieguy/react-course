import { useState, useEffect, useRef } from 'react';
import { GoChevronDown, GoChevronLeft } from 'react-icons/go';
import Panel from './Panel';

export interface DropdownOption {
  label: string;
  value: string;
}

interface DropdownProps {
  options: DropdownOption[];
  value: DropdownOption | null;
  onChange: (option: DropdownOption) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = ({ target }: MouseEvent) => {
      if (!divEl.current) {
        return;
      }

      if (!divEl.current.contains(target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handler, true);

    return () => document.removeEventListener('click', handler);
  }, []);

  const handleClick = () => setIsOpen((currentIsOpen) => !currentIsOpen);

  const handleOptionClick = (option: DropdownOption) => {
    setIsOpen(false);
    onChange(option);
  };

  const renderedOptions = options.map((option) => (
    <div
      key={option.value}
      onClick={() => handleOptionClick(option)}
      className="hover:bg-sky-100 rounded cursor-pointer p-1"
    >
      {option.label}
    </div>
  ));

  let icon = <GoChevronLeft className="text-lg" />;
  if (isOpen) {
    icon = <GoChevronDown className="text-lg" />;
  }

  return (
    <div ref={divEl} className="w-48 relative">
      <Panel
        onClick={handleClick}
        className="flex justify-between items-center cursor-pointer"
      >
        {value?.label || 'Select...'}
        {icon}
      </Panel>
      {isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
    </div>
  );
};

export default Dropdown;
