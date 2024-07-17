import { useState } from 'react';
import { GoTriangleDown, GoTriangleUp } from 'react-icons/go';

import Table from './Table';
import { TableProps } from '../models/TableProps';

const SortableTable: <T>(props: TableProps<T>) => React.ReactElement = (
  props,
) => {
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | null>(null);
  const [sortBy, setSortBy] = useState<string | null>(null);
  const { config, data } = props;

  const handleClick = (label: string) => {
    if (sortBy && label !== sortBy) {
      updateSortingCriteria('asc', label);
      return;
    }

    if (sortOrder === null) {
      updateSortingCriteria('asc', label);
    } else if (sortOrder === 'asc') {
      updateSortingCriteria('desc', label);
    } else if (sortOrder === 'desc') {
      updateSortingCriteria(null, null);
    }
  };

  const updateSortingCriteria = (
    sortOrder: 'asc' | 'desc' | null,
    sortBy: string | null,
  ): void => {
    setSortOrder(sortOrder);
    setSortBy(sortBy);
  };

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }

    return {
      ...column,
      header: () => (
        <th
          className="cursor-pointer select-none hover:bg-gray-100"
          onClick={() => handleClick(column.label)}
        >
          <div className="flex items-center">
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>
      ),
    };
  });

  let sortedData = data;
  if (sortOrder && sortBy) {
    const { sortValue } = config.find((column) => column.label === sortBy)!;

    if (!sortValue) {
      throw new Error(
        'You have to define a sortValue function in your TableConfig array for this column',
      );
    }

    sortedData = [...data].sort((a, b) => {
      const valueA = sortValue(a);
      const valueB = sortValue(b);

      const reverseOrder = sortOrder === 'asc' ? 1 : -1;

      if (typeof valueA === 'string' && typeof valueB === 'string') {
        return new Intl.Collator('en').compare(valueA, valueB) * reverseOrder;
      }

      return ((valueA as number) - (valueB as number)) * reverseOrder;
    });
  }

  return <Table {...props} data={sortedData} config={updatedConfig} />;
};

const getIcons = (
  label: string,
  sortBy: string | null,
  sortOrder: 'asc' | 'desc' | null,
): React.ReactNode => {
  if (label !== sortBy) {
    return (
      <div className="mr-1">
        <GoTriangleUp />
        <GoTriangleDown />
      </div>
    );
  }

  if (sortOrder === null) {
    return (
      <div className="mr-1">
        <GoTriangleUp />
        <GoTriangleDown />
      </div>
    );
  } else if (sortOrder === 'asc') {
    return (
      <div className="mr-1">
        <GoTriangleUp />
      </div>
    );
  } else if (sortOrder === 'desc') {
    return (
      <div className="mr-1">
        <GoTriangleDown />
      </div>
    );
  }
};

export default SortableTable;
