import React from 'react';
import styled from 'styled-components';
import { Card, CardContent, Typography, LinearProgress } from '@mui/material';

const InsightCard = styled(Card)`
  width: 100%;
  max-width: 300px;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

const AdherenceInsights = () => {
  return (
    <InsightCard>
      <CardContent>
        <Typography variant="h5" component="div" color="primary">
          Adherence Insights
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Overall Adherence
        </Typography>
        <LinearProgress variant="determinate" value={80} style={{ marginTop: '10px' }} />
        <Typography variant="body2" color="textSecondary" style={{ marginTop: '10px' }}>
          80% adherence this month
        </Typography>
      </CardContent>
    </InsightCard>
  );
};

export default AdherenceInsights;
