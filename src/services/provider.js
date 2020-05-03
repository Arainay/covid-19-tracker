import React, { createContext } from 'react';
import { CovidService } from '@app/services';

export const ServiceContext = createContext({});

const ServiceProvider = ({ children }) => (
  <ServiceContext.Provider
    value={{
      covidService: new CovidService()
    }}
  >
    {children}
  </ServiceContext.Provider>
);

export default ServiceProvider;
