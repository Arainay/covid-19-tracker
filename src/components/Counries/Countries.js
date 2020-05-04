import React, { useContext, useEffect, useState } from 'react';
import { ServiceContext } from '@app/services';

const Countries = () => {
  // eslint-disable-next-line no-unused-vars
  const [countries, setCountries] = useState([]);

  const { covidService } = useContext(ServiceContext);

  useEffect(() => {
    covidService.getCountries()
      .then(countries => {
        console.log(countries);
        setCountries(countries);
      });
  }, []);

  return (
    <h1>Countries</h1>
  );
};

export default Countries;
