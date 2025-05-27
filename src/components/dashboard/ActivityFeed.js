import React from 'react';
import styled from 'styled-components';
import { FiActivity } from 'react-icons/fi';

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
  const colors = [
    'linear-gradient(180deg, #7C3AED 0%, #8B5CF6 100%)',
    'linear-gradient(180deg, #EC4899 0%, #F472B6 100%)',
    'linear-gradient(180deg, #F59E0B 0%, #FBBF24 100%)',
    'linear-gradient(180deg, #10B981 0%, #34D399 100%)'
  ];
  return colors[weekIndex % colors.length];
};

const ActivityFeed = () => {
  const maxBarHeight = 120;
  
  return (
    <ActivityContainer>
      <ActivityHeader>
        <HeaderLeft>
          <ActivityIcon>
            <FiActivity size={20} />
          </ActivityIcon>
          <div>
            <ActivityTitle>Activity</ActivityTitle>
            <ActivitySummary>{activityData.summary}</ActivitySummary>
          </div>
        </HeaderLeft>
        <ViewAllButton>View All</ViewAllButton>
      </ActivityHeader>
      
      <ChartContainer>
        <YAxis>
          <span>100</span>
          <span>80</span>
          <span>60</span>
          <span>40</span>
          <span>20</span>
          <span>0</span>
        </YAxis>
        <ChartContent>
          <BarsContainer>
            {activityData.days.map((day, dayIndex) => (
              <DayColumn key={day}>
                <BarGroup>
                  {activityData.data.map((weekData, weekIndex) => {
                    const value = weekData[dayIndex];
                    const barHeight = value ? (value / 3) * (maxBarHeight / 4) : 0;
                    const marginBottom = weekIndex === 0 ? '0' : '4px';
                    
                    return (
                      <Bar 
                        key={`${day}-${weekIndex}`} 
                        height={barHeight} 
                        color={getBarColor(weekIndex)}
                        style={{ marginBottom }}
                      />
                    );
                  })}
                </BarGroup>
                <DayLabel>{day}</DayLabel>
              </DayColumn>
            ))}
          </BarsContainer>
          <XAxis>
            {activityData.days.map(day => (
              <XAxisLabel key={day}>{day}</XAxisLabel>
            ))}
          </XAxis>
        </ChartContent>
      </ChartContainer>
      
      <Legend>
        {activityData.data.map((_, index) => (
          <LegendItem key={index}>
            <LegendColor color={getBarColor(index).split(' ')[0].replace('linear-gradient(180deg,', '').replace('0%,', '')} />
            <span>Week {index + 1}</span>
          </LegendItem>
        ))}
      </Legend>
    </ActivityContainer>
  );
};

const ActivityContainer = styled.div`
  background: white;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const ActivityHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const ActivityIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: #F5F3FF;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #7C3AED;
`;

const ActivityTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #111827;
  margin: 0 0 4px 0;
`;

const ActivitySummary = styled.p`
  font-size: 0.875rem;
  color: #6B7280;
  margin: 0;
`;

const ViewAllButton = styled.button`
  background: transparent;
  border: 1px solid #E5E7EB;
  color: #4B5563;
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background: #F9FAFB;
  }
`;

const ChartContainer = styled.div`
  display: flex;
  flex: 1;
  padding: 0 0 1.5rem 0;
  position: relative;
`;

const YAxis = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding-right: 12px;
  font-size: 0.75rem;
  color: #9CA3AF;
  margin-top: 20px;
`;

const ChartContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const BarsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  padding: 0 0.5rem;
  position: relative;
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
  max-width: 24px;
  margin: 0 auto;
`;

const Bar = styled.div`
  width: 100%;
  height: ${props => props.height}px;
  background: ${props => props.color};
  border-radius: 4px;
  transition: height 0.3s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const DayLabel = styled.span`
  font-size: 0.75rem;
  color: #6B7280;
  margin-top: 8px;
`;

const XAxis = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 0.5rem;
  margin-top: 8px;
`;

const XAxisLabel = styled.span`
  font-size: 0.75rem;
  color: #9CA3AF;
  width: 100%;
  text-align: center;
`;

const Legend = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 8px;
  padding-top: 16px;
  border-top: 1px solid #F3F4F6;
`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.75rem;
  color: #4B5563;
`;

const LegendColor = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 3px;
  background: ${props => props.color || '#7C3AED'};
`;

export default ActivityFeed;
