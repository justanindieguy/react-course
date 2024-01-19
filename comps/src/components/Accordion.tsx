import { useState } from 'react';
import { GoChevronDown, GoChevronLeft } from 'react-icons/go';
import className from 'classnames';

interface AccordionItem {
  id: string;
  label: string;
  content: string;
}

interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }: AccordionProps) => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleClick = (index: number) => {
    setExpandedIndex((currentIndex) => {
      if (currentIndex === index) {
        return -1;
      }

      return index;
    });
  };

  const getContentWrapperClass = (isExpanded: boolean) =>
    className('grid transition-[grid-template-rows] duration-300 ease-in-out', {
      'grid-rows-[0fr] p-0': !isExpanded,
      'grid-rows-[1fr] p-5 border-b': isExpanded,
    });

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;
    const icon = (
      <span className="text-xl">
        {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
      </span>
    );

    return (
      <div key={item.id}>
        <div
          className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer"
          onClick={() => handleClick(index)}
        >
          {item.label}
          {icon}
        </div>
        <div className={getContentWrapperClass(isExpanded)}>
          {isExpanded && <div className="overflow-hidden">{item.content}</div>}
        </div>
      </div>
    );
  });

  return <div className="border-x border-t rounded">{renderedItems}</div>;
};

export default Accordion;
