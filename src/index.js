import React  from 'react';
import { render } from 'react-dom';
import ServiceProvider from '@app/services';
import App from '@app/components/App';

render(
  <ServiceProvider>
    <App/>
  </ServiceProvider>,
  document.getElementById('root')
);
