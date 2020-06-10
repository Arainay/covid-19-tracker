import React, { useContext, useEffect, useState } from 'react';
import { ServiceContext } from '@app/services';
import Cards from '@app/components/Cards';
import Countries from '@app/components/Counries';
// eslint-disable-next-line no-unused-vars
import Chart from '@app/components/Chart';
import Loading from '@app/components/Loading';
import './app.scss';

const App = () => {
  const [info, setInfo] = useState(null);
  const [country, setCountry] = useState(null);
  const { covidService } = useContext(ServiceContext);

  useEffect(() => {
    covidService.getInfo()
      .then(info => {
        setInfo(info);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const updateCountry = country => {
    if (!country) {
      return;
    }

    covidService.getCountryByName(country.toLowerCase())
      .then(info => {
        setInfo(info);
        setCountry(country);
      });
  };

  if (info === null) {
    return <Loading/>;
  }

  const { confirmed, deaths, recovered, lastUpdate } = info;

  return (
    <div className="wrapper">
      <Cards
        infectedCount={confirmed.value}
        deathsCount={deaths.value}
        recoveredCount={recovered.value}
        date={new Intl.DateTimeFormat().format(Date.parse(lastUpdate))}
      />
      <Countries currentCountry={country} updateCurrentCountry={updateCountry}/>
      {/*<Chart/>*/}
    </div>
  );
};

export default App;
