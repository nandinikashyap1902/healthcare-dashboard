import React from 'react';
import styled from 'styled-components';
import { FiCheckCircle, FiEye, FiHeart, FiActivity } from 'react-icons/fi';

const SimpleAppointmentCard = ({ appointment }) => {
  // Function to get the appropriate icon
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'check-circle':
        return <FiCheckCircle />;
      case 'eye':
        return <FiEye />;
      case 'heart':
        return <FiHeart />;
      case 'brain':
        return <BrainIcon>🧠</BrainIcon>;
      default:
        return <FiActivity />;
    }
  };

  return (
    <CardContainer>
      <CardContent>
        <AppointmentInfo>
          <AppointmentTitle>{appointment.title}</AppointmentTitle>
          <AppointmentTime>{appointment.time}</AppointmentTime>
        </AppointmentInfo>
        
        <IconContainer color={appointment.iconColor}>
          {getIcon(appointment.icon)}
        </IconContainer>
      </CardContent>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  background: #EEF1FD;
  border-radius: 10px;
  padding: 1rem;
`;

const CardContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AppointmentInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const AppointmentTitle = styled.h4`
  font-size: 0.9rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.3rem;
`;

const AppointmentTime = styled.span`
  font-size: 0.8rem;
  color: #aaa;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: white;
  color: ${props => props.color || '#5E81F4'};
  font-size: 1.1rem;
`;

const BrainIcon = styled.span`
  font-size: 1.2rem;
`;

export default SimpleAppointmentCard;
