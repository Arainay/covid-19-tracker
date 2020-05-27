import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

const CardsItem = ({ title, count, date, description }) => (
  <Card>
    <CardContent>
      <Typography color="textSecondary" gutterBottom>
        {title}
      </Typography>
      <Typography variant="h5">
        {new Intl.NumberFormat().format(count)}
      </Typography>
      <Typography color="textSecondary">
        {date}
      </Typography>
      <Typography variant="body2">
        {description}
      </Typography>
    </CardContent>
  </Card>
);

export default CardsItem;
