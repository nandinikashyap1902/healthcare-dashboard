import React from 'react';
import styled from 'styled-components';
import { appointments, detailedAppointments } from '../../data/appointments';
import { FiClock, FiCalendar} from 'react-icons/fi';

const UpcomingSchedule = () => {
  // Process all appointments
  const allAppointments = [
    ...appointments.map(app => ({
      ...app,
      type: 'regular'
    })),
    ...detailedAppointments.map(app => ({
      ...app,
      day: 'Today',
      type: 'detailed'
    }))
  ];

  // Sort by time
  const sortedAppointments = allAppointments
    .sort((a, b) => {
      const timeA = a.time.split(' ')[0];
      const timeB = b.time.split(' ')[0];
      return new Date(`1970/01/01 ${timeA}`) - new Date(`1970/01/01 ${timeB}`);
    })
    .slice(0, 4); // Show maximum 4 appointments

  // Split appointments into pairs for the grid layout
  const appointmentPairs = [];
  for (let i = 0; i < sortedAppointments.length; i += 2) {
    appointmentPairs.push(sortedAppointments.slice(i, i + 2));
  }

  return (
    <ScheduleContainer>
      <Header>
        <Title>Upcoming Schedule</Title>
        <ViewAllButton>View All</ViewAllButton>
      </Header>
      
      <AppointmentsContainer>
        {appointmentPairs.map((pair, index) => (
          <AppointmentRow key={index}>
            {pair.map((appointment) => (
              <AppointmentCard key={`${appointment.type}-${appointment.id}`}>
                <AppointmentTime>
                  <ClockIcon />
                  <span>{appointment.time}</span>
                </AppointmentTime>
                <AppointmentContent>
                  <AppointmentTitle>{appointment.title}</AppointmentTitle>
                  <AppointmentDay>
                    <CalendarIcon />
                    <span>{appointment.day}</span>
                    {appointment.doctor && (
                      <DoctorName>{appointment.doctor}</DoctorName>
                    )}
                  </AppointmentDay>
                </AppointmentContent>
                {/* <JoinButton>Join</JoinButton> */}
              </AppointmentCard>
            ))}
          </AppointmentRow>
        ))}
      </AppointmentsContainer>
    </ScheduleContainer>
  );
};

const ScheduleContainer = styled.div`
  background: white;
  border-radius: 15px;
  padding: 1.5rem;
  margin: 0 0 1.5rem 0; /* Reset top margin to 0 and keep bottom margin */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
  overflow: hidden;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: #2D3748;
  margin: 0;
`;

const ViewAllButton = styled.button`
  background: none;
  border: none;
  color: #5E81F4;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
  
  &:hover {
    background-color: rgba(94, 129, 244, 0.1);
  }
`;

const AppointmentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow-y: auto;
  padding-right: 0.5rem;
  
  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    width: 4px;
  }
  
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #c1c1c1;
    border-radius: 4px;
  }
  
  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: thin;  /* Firefox */
`;

const AppointmentRow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  width: 100%;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const AppointmentCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background: #F8F9FF;
  border-radius: 12px;
  border: 1px solid #E2E8F0;
  gap: 0.75rem;
  width: 100%;
  box-sizing: border-box;
`;

const AppointmentTime = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  span {
    font-size: 0.9rem;
    font-weight: 500;
    color: #4A5568;
  }
`;

const ClockIcon = styled(FiClock)`
  color: #5E81F4;
  font-size: 1.1rem;
`;

const AppointmentContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const AppointmentTitle = styled.h3`
  font-size: 0.95rem;
  font-weight: 600;
  color: #2D3748;
  margin: 0;
`;

const AppointmentDay = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8rem;
  color: #718096;
  flex-wrap: wrap;
`;

const DoctorName = styled.span`
  margin-left: auto;
  font-size: 0.75rem;
  color: #4A5568;
  background: #EDF2F7;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
`;

const CalendarIcon = styled(FiCalendar)`
  color: #718096;
  font-size: 0.9rem;
`;



export default UpcomingSchedule;
