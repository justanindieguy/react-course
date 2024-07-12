import React from 'react';

export interface TableConfigModel<T> {
  label: string;
  render: (object: T) => React.ReactNode;
}
