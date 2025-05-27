import React from 'react';
import styled from 'styled-components';

const activityData = {
  summary: 'Your activity this week',
  days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  data: [
    [2, 1, 3, 2, 1, 2, 3],
    [1, 2, 1, 3, 2, 1, 2],
    [3, 2, 1, 2, 3, 2, 1],
    [2, 3, 2, 1, 2, 3, 2]
  ]
};

const getBarColor = (weekIndex) => {
  const colors = ['#6366F1', '#8B5CF6', '#EC4899', '#F59E0B'];
  return colors[weekIndex % colors.length];
};

const ActivityFeed = () => {
  const maxBarHeight = 80;
  
  return (
    <ActivityContainer>
      <ActivityHeader>
        <ActivityTitle>Activity</ActivityTitle>
        <ActivitySummary>{activityData.summary}</ActivitySummary>
      </ActivityHeader>
      
      <ChartContainer>
        {activityData.days.map((day, dayIndex) => (
          <DayColumn key={day}>
            <BarGroup>
              {activityData.data.map((weekData, weekIndex) => {
                const value = weekData[dayIndex];
                const barHeight = value ? (value / 3) * maxBarHeight : 0;
                
                return (
                  <Bar 
                    key={`${day}-${weekIndex}`} 
                    height={barHeight} 
                    color={getBarColor(weekIndex)}
                  />
                );
              })}
            </BarGroup>
            <DayLabel>{day}</DayLabel>
          </DayColumn>
        ))}
      </ChartContainer>
    </ActivityContainer>
  );
};

const ActivityContainer = styled.div`
  background: white;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`;

const ActivityHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const ActivityTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #2D3748;
  margin: 0;
`;

const ActivitySummary = styled.p`
  font-size: 0.9rem;
  color: #718096;
  margin: 0;
`;

const ChartContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: 200px;
  padding: 0 0.5rem;
`;

const DayColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const BarGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  width: 100%;
  gap: 2px;
`;

const Bar = styled.div`
  width: 100%;
  height: ${props => props.height}px;
  background: ${props => props.color};
  border-radius: 2px;
  transition: height 0.3s ease;
`;

const DayLabel = styled.span`
  font-size: 0.75rem;
  color: #718096;
  margin-top: 0.5rem;
`;

export default ActivityFeed;
