import React from 'react';
import styled from 'styled-components';
import { Card, CardContent, Typography, Button } from '@mui/material';

const RefillCard = styled(Card)`
  width: 100%;
  max-width: 300px;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

const RefillAlerts = () => {
  return (
    <RefillCard>
      <CardContent>
        <Typography variant="h5" component="div" color="error">
          Refill Alerts
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Medication: Vitamin D
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Low Stock: 5 Pills Left
        </Typography>
        <Button variant="contained" color="secondary" fullWidth style={{ marginTop: '15px' }}>
          Order Refill
        </Button>
      </CardContent>
    </RefillCard>
  );
};

export default RefillAlerts;
