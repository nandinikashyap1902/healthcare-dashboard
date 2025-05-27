import React from 'react';
import styled from 'styled-components';
import { FiChevronLeft, FiChevronRight, FiCalendar, FiClock } from 'react-icons/fi';
import { FaTooth, FaRunning } from 'react-icons/fa';
import { detailedAppointments } from '../../data/appointments';
import { calendarData } from '../../data/calendarData';

const CalendarView = () => {
  const getAppointmentIcon = (iconName) => {
    switch (iconName) {
      case 'tooth':
        return <FaTooth size={20} />;
      case 'activity':
        return <FaRunning size={20} />;
      default:
        return <FiCalendar size={20} />;
    }
  };

  // Get current date to highlight
  const currentDate = new Date().getDate();
  const isHighlighted = (date) => calendarData.highlightedDays.includes(date);

  return (
    <CalendarContainer>
      <CalendarHeader>
        <CalendarTitle>Calendar</CalendarTitle>
        <CalendarNav>
          <NavButton><FiChevronLeft /></NavButton>
          <CurrentMonth>{calendarData.month}</CurrentMonth>
          <NavButton><FiChevronRight /></NavButton>
        </CalendarNav>
      </CalendarHeader>
      
      <CalendarGrid>
        {calendarData.days.map((dayObj, index) => (
          <DayHeader key={index}>{dayObj.day}</DayHeader>
        ))}
        
        {/* Create a single row for the dates */}
        <React.Fragment>
          {calendarData.days.map((dayObj, index) => (
            <DayCell 
              key={`date-${index}`}
              isCurrentDay={dayObj.date === currentDate}
              isHighlighted={isHighlighted(dayObj.date)}
            >
              {dayObj.date}
            </DayCell>
          ))}
        </React.Fragment>
      </CalendarGrid>
      
      <TimeSlots>
        {calendarData.timeSlots.map((slot, index) => (
          <TimeSlot key={index}>
            <TimeLabel>{slot.time}</TimeLabel>
            <AppointmentDots>
              {calendarData.days.map((dayObj, dayIndex) => (
                <Dot 
                  key={dayIndex} 
                  hasAppointment={slot.appointments.includes(dayObj.date)}
                />
              ))}
            </AppointmentDots>
          </TimeSlot>
        ))}
      </TimeSlots>
      
      <AppointmentsContainer>
        {detailedAppointments.map(appointment => (
          <AppointmentCard key={appointment.id}>
            <AppointmentIcon>{getAppointmentIcon(appointment.icon)}</AppointmentIcon>
            <AppointmentDetails>
              <AppointmentTitle>{appointment.title}</AppointmentTitle>
              <AppointmentTime><FiClock size={14} /> {appointment.time}</AppointmentTime>
              <AppointmentDoctor>{appointment.doctor}</AppointmentDoctor>
              {appointment.note && <AppointmentNote>{appointment.note}</AppointmentNote>}
            </AppointmentDetails>
          </AppointmentCard>
        ))}
      </AppointmentsContainer>
    </CalendarContainer>
  );
};

const CalendarContainer = styled.div`
  background: white;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  margin-bottom: 1.5rem;
`;

const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const CalendarTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #2D3748;
  margin: 0;
`;

const CalendarNav = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const NavButton = styled.button`
  background: none;
  border: none;
  color: #4A5568;
  cursor: pointer;
  padding: 0.25rem;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background: #F7FAFC;
  }
`;

const CurrentMonth = styled.span`
  font-weight: 500;
  color: #4A5568;
`;

const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const DayHeader = styled.div`
  text-align: center;
  font-size: 0.8rem;
  font-weight: 500;
  color: #718096;
  padding: 0.5rem 0;
`;

const DayCell = styled.div`
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: ${props => props.isCurrentDay ? '600' : '400'};
  color: ${props => {
    if (props.isCurrentDay) return '#4F46E5';
    return props.isHighlighted ? '#2D3748' : '#A0AEC0';
  }};
  background: ${props => {
    if (props.isCurrentDay) return '#EEF2FF';
    return props.isHighlighted ? '#F0FDF4' : 'transparent';
  }};
  cursor: pointer;
  
  &:hover {
    background: #F7FAFC;
  }
`;

const TimeSlots = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const TimeSlot = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const TimeLabel = styled.span`
  font-size: 0.85rem;
  color: #718096;
  width: 50px;
`;

const AppointmentDots = styled.div`
  display: flex;
  flex: 1;
  gap: 0.5rem;
`;

const Dot = styled.div`
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background: ${props => props.hasAppointment ? '#4F46E5' : '#E2E8F0'};
  transition: all 0.2s ease;
`;

const AppointmentsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 1.5rem;
  width: 100%;
  overflow: hidden;
`;

const AppointmentCard = styled.div`
  background: #F8FAFC;
  border-radius: 12px;
  padding: 0.5rem;
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  width: 100%;
  box-sizing: border-box;
  min-width: 0; /* Prevents flex items from overflowing */
`;

const AppointmentIcon = styled.div`
  background: #E0E7FF;
  color: #4F46E5;
  min-width: 40px;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const AppointmentDetails = styled.div`
  flex: 1;
  min-width: 0; /* Allows text to truncate properly */
`;

const AppointmentTitle = styled.h4`
  margin: 0 0 0.25rem 0;
  font-size: 0.95rem;
  color: #2D3748;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const AppointmentTime = styled.div`
  font-size: 0.8rem;
  color: #718096;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  margin-bottom: 0.25rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const AppointmentDoctor = styled.p`
  margin: 0;
  font-size: 0.85rem;
  color: #4A5568;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const AppointmentNote = styled.div`
  margin-top: 0.5rem;
  font-size: 0.8rem;
  color: #718096;
  background: white;
  padding: 0.5rem;
  border-radius: 6px;
  border: 1px solid #E2E8F0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  white-space: normal;
`;

export default CalendarView;