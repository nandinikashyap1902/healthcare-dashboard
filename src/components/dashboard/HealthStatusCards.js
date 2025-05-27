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
  {
    id: 'respiratory',
    name: 'Respiratory',
    status: 'Good',
    statusColor: '#4CAF50',
    value: '16',
    unit: 'bpm',
    date: 'Last checked: Today',
    icon: <FiLungs />,
    progress: '85%'
  }
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
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1rem;
  width: 100%;
  
  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const StatusCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  width: 100%;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  
  @media (max-width: 480px) {
    padding: 0.75rem;
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  width: 100%;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.25rem;
`;

const ValueContainer = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.25rem;
`;

const Value = styled.span`
  font-size: 1.25rem;
  font-weight: 600;
  color: #2D3748;
`;

const Unit = styled.span`
  font-size: 0.8rem;
  color: #718096;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background-color: ${props => `${props.color}20`};
  color: ${props => props.color};
  font-size: 1.1rem;
`;

const StatusTitle = styled.h3`
  font-size: 0.95rem;
  font-weight: 600;
  color: #2D3748;
  margin: 0 0 0.25rem 0;
`;

const StatusDate = styled.span`
  font-size: 0.75rem;
  color: #A0AEC0;
  display: block;
`;

const StatusBadge = styled.span`
  background: ${props => `${props.color}15`};
  color: ${props => props.color};
  padding: 0.2rem 0.6rem;
  border-radius: 12px;
  font-size: 0.7rem;
  font-weight: 600;
`;

const StatusBar = styled.div`
  width: 100%;
  height: 6px;
  background: #EDF2F7;
  border-radius: 3px;
  overflow: hidden;
`;

const StatusIndicator = styled.div`
  width: ${props => props.width};
  height: 100%;
  background: ${props => props.color};
  border-radius: 3px;
  transition: width 0.3s ease;
`;

export default HealthStatusCards;