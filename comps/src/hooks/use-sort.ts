import { useState } from 'react';
import { TableConfigModel } from '../models/TableConfigModel';

const useSort = <T>(config: TableConfigModel<T>[], data: T[]) => {
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | null>(null);
  const [sortBy, setSortBy] = useState<string | null>(null);

  const setSortColumn = (label: string) => {
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

  return {
    sortOrder,
    sortBy,
    sortedData,
    setSortColumn,
  };
};

export default useSort;
