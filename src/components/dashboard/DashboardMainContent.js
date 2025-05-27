import React from 'react';
import styled from 'styled-components';
import AnatomySection from './AnatomySection';
import CalendarView from './CalendarView';
import UpcomingSchedule from './UpcomingSchedule';
import ActivityFeed from './ActivityFeed';

const DashboardMainContent = ({children}) => {
  return (
    <MainContentContainer>
      <DashboardTitle>Dashboard</DashboardTitle>
      
      <DashboardGrid>
        <LeftSection>
          <AnatomySection />
          <ActivityFeed />
        </LeftSection>
        
        <RightSection>
          <CalendarView />
          <UpcomingSchedule />
        </RightSection>
      </DashboardGrid>
      {children}
    </MainContentContainer>
  );
};

// Styled components
const MainContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
`;

const DashboardTitle = styled.h1`
  font-size: 1.75rem;
  font-weight: 700;
  color: #2D3748;
  margin: 0 0 24px 0;
  line-height: 1.2;
`;

const DashboardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 350px;
  gap: 24px;
  width: 100%;
  height: 100%;
  min-height: 0;
  flex: 1;
  overflow: hidden;
  
  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
  }
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  min-width: 0;
  overflow: hidden;
  
  @media (max-width: 1200px) {
    grid-row: 1;
  }
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  min-width: 0;
  overflow-y: auto;
  padding-right: 8px;
  margin-right: -8px;
  
  @media (max-width: 1200px) {
    grid-row: 2;
    padding-right: 0;
    margin-right: 0;
  }
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #c1c1c1;
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: #a8a8a8;
  }
`;

export default DashboardMainContent;