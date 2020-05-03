import React, { useContext, useEffect, useState } from 'react';
import { ServiceContext } from '@app/services';
import './app.scss';

const App = () => {
  const [info, setInfo] = useState(null);
  const { covidService } = useContext(ServiceContext);

  useEffect(() => {
    covidService.getInfo()
      .then(info => {
        setInfo(info);
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  }, []);

  if (info === null) {
    return <div>Loading...</div>;
  }

  return (
    <h1>App</h1>
  );
};

export default App;
