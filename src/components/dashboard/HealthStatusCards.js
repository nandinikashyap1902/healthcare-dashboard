import React from 'react';
import styled from 'styled-components';
import { FiActivity, FiHeart, FiWind, FiActivity as FiLungs } from 'react-icons/fi';

const healthStatus = [
  {
    id: 'heart-rate',
    name: 'Heart Rate',
    status: 'Good',
    statusColor: '#4CAF50',
    value: '72',
    unit: 'bpm',
    date: 'Last checked: Today',
    icon: <FiHeart />,
    progress: '70%'
  },
  {
    id: 'oxygen',
    name: 'Oxygen',
    status: 'Good',
    statusColor: '#4CAF50',
    value: '98',
    unit: '%',
    date: 'Last checked: Today',
    icon: <FiWind />,
    progress: '90%'
  },
  {
    id: 'blood-pressure',
    name: 'Blood Pressure',
    status: 'Good',
    statusColor: '#4CAF50',
    value: '120/80',
    unit: 'mmHg',
    date: 'Last checked: Today',
    icon: <FiActivity />,
    progress: '80%'
  },
  // {
  //   id: 'respiratory',
  //   name: 'Respiratory',
  //   status: 'Good',
  //   statusColor: '#4CAF50',
  //   value: '16',
  //   unit: 'bpm',
  //   date: 'Last checked: Today',
  //   icon: <FiLungs />,
  //   progress: '85%'
  // }
];

const HealthStatusCards = () => {
  return (
    <CardsContainer>
      {healthStatus.map((status) => (
        <StatusCard key={status.id}>
          <CardHeader>
            <LeftSection>
              <IconContainer color={status.statusColor}>
                {status.icon}
              </IconContainer>
              <div>
                <StatusTitle>{status.name}</StatusTitle>
                <StatusDate>{status.date}</StatusDate>
              </div>
            </LeftSection>
            <RightSection>
              <ValueContainer>
                <Value>{status.value}</Value>
                <Unit>{status.unit}</Unit>
              </ValueContainer>
              <StatusBadge color={status.statusColor}>
                {status.status}
              </StatusBadge>
            </RightSection>
          </CardHeader>
          <StatusBar>
            <StatusIndicator 
              color={status.statusColor} 
              width={status.progress}
            />
          </StatusBar>
        </StatusCard>
      ))}
    </CardsContainer>
  );
};

// Styled components for HealthStatusCards
const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
  max-width: 200px; /* Reduced width for the column */
`;

const StatusCard = styled.div`
  background: white;
  border-radius: 10px;
  padding: 0.75rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease;
  aspect-ratio: 1/1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.5rem;
  width: 100%;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.2rem;
`;

const ValueContainer = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.2rem;
`;

const Value = styled.span`
  font-size: 1.1rem;
  font-weight: 700;
  color: #2D3748;
`;

const Unit = styled.span`
  font-size: 0.7rem;
  color: #718096;
  font-weight: 500;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 8px;
  background-color: ${props => `${props.color}15`};
  color: ${props => props.color};
  font-size: 0.9rem;
`;

const StatusTitle = styled.h3`
  font-size: 0.75rem;
  font-weight: 600;
  color: #4A5568;
  margin: 0;
`;

const StatusDate = styled.span`
  font-size: 0.6rem;
  color: #A0AEC0;
  display: block;
`;

const StatusBadge = styled.span`
  background: ${props => `${props.color}15`};
  color: ${props => props.color};
  padding: 0.15rem 0.5rem;
  border-radius: 10px;
  font-size: 0.6rem;
  font-weight: 600;
`;

const StatusBar = styled.div`
  width: 100%;
  height: 4px;
  background: #EDF2F7;
  border-radius: 2px;
  overflow: hidden;
  margin-top: 0.25rem;
`;

const StatusIndicator = styled.div`
  height: 100%;
  width: ${props => props.width};
  background: ${props => props.color};
  border-radius: 2px;
`;

export default HealthStatusCards;