import React, { createContext, useEffect, useState } from 'react';
import { NavigationContextModel } from '../models/NavigationContextModel';

const NavigationContext = createContext<NavigationContextModel | null>(null);

const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentPath, setCurrentPath] = useState<string>(
    window.location.pathname,
  );

  useEffect(() => {
    const handler = () => setCurrentPath(window.location.pathname);

    window.addEventListener('popstate', handler);

    return () => window.removeEventListener('popstate', handler);
  }, []);

  const navigate = (to: string) => {
    window.history.pushState({}, '', to);
    setCurrentPath(to);
  };

  return (
    <NavigationContext.Provider value={{ currentPath, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
};

export { NavigationProvider };
export default NavigationContext;
