import React from 'react';
import { CardsItem } from '@app/components/Cards';
import './cards.scss';

const Cards = ({ infectedCount, recoveredCount, deathsCount, date }) => {
  return (
    <div className="cards">
      <CardsItem title="Infected" count={infectedCount} date={date} description="Number of active cases of COVID-19"/>
      <CardsItem title="Recovered" count={recoveredCount} date={date} description="Number of recoveries from COVID-19"/>
      <CardsItem title="Deaths" count={deathsCount} date={date} description="Number of deaths caused by COVID-19"/>
    </div>
  );
};

export default Cards;
