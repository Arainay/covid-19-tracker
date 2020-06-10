import React, { useContext, useEffect, useState } from 'react';
import { ServiceContext } from '@app/services';
import Cards from '@app/components/Cards';
import Countries from '@app/components/Counries';
import Chart from '@app/components/Chart';
import Loading from '@app/components/Loading';
import './app.scss';

const App = () => {
  const [info, setInfo] = useState(null);
  const [country, setCountry] = useState(null);
  const { covidService } = useContext(ServiceContext);

  const getInfo = async (country) => {
    let info = null;

    try {
      if (country) {
        info = await covidService.getCountryByName(country.toLowerCase());
      } else {
        info = await covidService.getInfo();
      }

      return { info, country: country ?? null };
    } catch (e) {
      console.log(e);
    }
  };

  const updateCountry = async newCountry => {
    if (!newCountry) {
      return;
    }

    const { info, country } = await getInfo(newCountry === 'global' ? null : newCountry);

    setInfo(info);
    setCountry(country);
  };

  useEffect(() => {
    getInfo()
      .then(({ info }) => {
        setInfo(info);
        setCountry(null);
      });
  }, []);

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
      <Chart
        country={country}
        data={{
          confirmed: confirmed.value,
          recovered: recovered.value,
          deaths: deaths.value
        }}
      />
    </div>
  );
};

export default App;
