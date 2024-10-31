import React from 'react';
import styled from 'styled-components';
import { Card, CardContent, Typography, Button } from '@mui/material';

const DoseCard = styled(Card)`
  width: 100%;
  max-width: 300px;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

const Progress = styled.div`
  height: 10px;
  border-radius: 5px;
  background-color: #ddd;
  overflow: hidden;
  margin-top: 10px;
`;

const ProgressBar = styled.div`
  height: 100%;
  width: ${({ progress }) => progress}%;
  background-color: #4a90e2;
`;

const UpcomingDoses = () => {
  return (
    <DoseCard>
      <CardContent>
        <Typography variant="h5" component="div" color="primary">
          Upcoming Doses
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Medication: Ibuprofen
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Next Dose: 2 PM
        </Typography>
        <Progress>
          <ProgressBar progress={75} />
        </Progress>
        <Button variant="outlined" color="primary" fullWidth style={{ marginTop: '15px' }}>
          View All Doses
        </Button>
      </CardContent>
    </DoseCard>
  );
};

export default UpcomingDoses;
