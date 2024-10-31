import React from 'react';
import styled from 'styled-components';

import RefillAlerts from '../Pages/RefillAlerts';
import AdherenceInsights from '../Pages/AdherenceInsights';
import UpcomingDoses from '../Pages/UpcomingDoses';

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 20px;
  background-color: #f5f9ff;
  height: 100vh;
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #4a90e2;
  margin-bottom: 10px;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const Dashboard = () => {
  return (
    <DashboardContainer>
      <SectionTitle>PillSync Dashboard</SectionTitle>
      <CardsContainer>
        <UpcomingDoses/>
        <RefillAlerts />
        <AdherenceInsights />
      </CardsContainer>
    </DashboardContainer>
  );
};

export default Dashboard;
