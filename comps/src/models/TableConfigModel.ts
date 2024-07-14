export interface TableConfigModel<T> {
  header?: () => React.ReactElement;
  label: string;
  render: (object: T) => React.ReactNode;
  sortValue?: (object: T) => string | number;
}
