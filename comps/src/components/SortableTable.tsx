import { GoTriangleDown, GoTriangleUp } from 'react-icons/go';

import Table from './Table';
import { TableProps } from '../models/TableProps';
import useSort from '../hooks/use-sort';

const SortableTable: <T>(props: TableProps<T>) => React.ReactElement = (
  props,
) => {
  const { config, data } = props;
  const { sortOrder, sortBy, sortedData, setSortColumn } = useSort(
    config,
    data,
  );

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }

    return {
      ...column,
      header: () => (
        <th
          className="cursor-pointer select-none hover:bg-gray-100"
          onClick={() => setSortColumn(column.label)}
        >
          <div className="flex items-center">
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>
      ),
    };
  });

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
