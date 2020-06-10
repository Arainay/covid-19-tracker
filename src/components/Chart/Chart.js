import React, { useContext, useEffect, useState } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { ServiceContext } from '@app/services';

const initialChartData = {
  labels: [],
  datasets: [
    {
      data: [],
      label: 'Infected',
      borderColor: '#3333ff',
      fill: true
    },
    {
      data: [],
      label: 'Deaths',
      borderColor: 'red',
      backgroundColor: 'rgba(255, 0, 0, .5)',
      fill: true
    },
    {
      data: [],
      label: 'Recovered',
      borderColor: 'green',
      fill: true
    }
  ]
};

const Chart = ({ country, data }) => {
  const [dailyStatus, setDailyStatus] = useState([]);
  const { covidService } = useContext(ServiceContext);

  useEffect(() => {
    covidService.getDaily()
      .then(status => {
        setDailyStatus(status);
      });
  }, []);

  if (country) {
    const { confirmed, recovered, deaths } = data;

    return (
      <Bar
        data={{
          labels: ['Infected', 'Recovered', 'Deaths'],
          datasets: [{
            label: 'People',
            backgroundColor: ['rgba(0, 0, 255, .5)', 'rgba(0, 255, 0, .5)', 'rgba(255, 0, 0, .5)'],
            data: [confirmed, recovered, deaths]
          }]
        }}
        options={{
          legend: { display: false },
          title: {
            display: true,
            text: `Current state in ${country}`
          }
        }}
      />
    );
  }

  return (
    <Line data={dailyStatus.reduce((acc, item) => {
      acc.labels = [...acc.labels, new Intl.DateTimeFormat().format(Date.parse(item.reportDate))];
      acc.datasets[0] = {
        ...acc.datasets[0],
        data: [...acc.datasets[0].data, item.confirmed.total]
      };
      acc.datasets[1] = {
        ...acc.datasets[1],
        data: [...acc.datasets[1].data, item.deaths.total]
      };
      acc.datasets[2] = {
        ...acc.datasets[2],
        data: [...acc.datasets[2].data, item.recovered.total]
      };

      return acc;
    }, initialChartData)}/>
  );
};

export default Chart;
