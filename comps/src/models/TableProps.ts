import { TableConfigModel } from './TableConfigModel';

export interface TableProps<T> {
  config: TableConfigModel<T>[];
  data: T[];
  keyFn: (object: T) => React.Key;
}
