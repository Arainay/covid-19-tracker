import React, { createContext } from 'react';

export const ServiceContext = createContext({});

const ServiceProvider = ({ children }) => (
  <ServiceContext.Provider
    value={{

    }}
  >
    {children}
  </ServiceContext.Provider>
);

export default ServiceProvider;
