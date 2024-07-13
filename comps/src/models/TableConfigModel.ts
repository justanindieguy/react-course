import React from 'react';

export interface TableConfigModel<T> {
  header?: () => React.ReactElement;
  label: string;
  render: (object: T) => React.ReactNode;
}
