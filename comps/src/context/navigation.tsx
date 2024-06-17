import React, { createContext } from 'react';

const NavigationContext = createContext<any | null>(null);

const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <NavigationContext.Provider value={{}}>
      {children}
    </NavigationContext.Provider>
  );
};

export { NavigationProvider };
export default NavigationContext;
