import React, { useContext, useEffect, useState } from 'react';
import { FormControl, NativeSelect } from '@material-ui/core';
import { ServiceContext } from '@app/services';
import './countries.scss';

const Countries = ({ currentCountry, updateCurrentCountry }) => {
  const [countries, setCountries] = useState([]);

  const { covidService } = useContext(ServiceContext);

  const changeCountry = event => {
    updateCurrentCountry(event.target.value);
  };

  useEffect(() => {
    covidService.getCountries()
      .then(({ countries }) => {
        setCountries(countries);
      });
  }, []);

  return (
    <FormControl className="countries">
      <NativeSelect onChange={changeCountry} value={currentCountry ?? ''}>
        <option value="global">Global</option>
        {countries.map(item => (
          <option
            key={item.name}
            value={item.name}
          >
            {item.name}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default Countries;
