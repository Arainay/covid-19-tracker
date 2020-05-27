import React, { useContext, useEffect, useState } from 'react';
import { ServiceContext } from '@app/services';
import Cards from '@app/components/Cards';
import Countries from '@app/components/Counries';
import Chart from '@app/components/Chart';
import Loading from '@app/components/Loading';
import './app.scss';

const App = () => {
  const [info, setInfo] = useState(null);
  const { covidService } = useContext(ServiceContext);

  useEffect(() => {
    covidService.getInfo()
      .then(info => {
        console.log(info);
        setInfo(info);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  if (info === null) {
    return <Loading/>;
  }

  return (
    <div className="wrapper">
      <Cards/>
      <Countries/>
      <Chart/>
    </div>
  );
};

export default App;
