import React, { Suspense } from 'react';
import { render } from 'react-dom';
import ServiceProvider from '@app/services';
import App from '@app/components/App';

render(
  <ServiceProvider>
    <Suspense fallback={<div>Loading...</div>}>
      <App/>
    </Suspense>
  </ServiceProvider>,
  document.getElementById('root')
);
