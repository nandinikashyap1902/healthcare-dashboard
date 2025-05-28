import React from 'react';
import styled from 'styled-components';
import { FiGrid, FiClock, FiCalendar, FiList, FiBarChart2, FiMessageCircle, FiHeadphones, FiSettings } from 'react-icons/fi';
import { navLinks } from '../../data/navLinks';

const Sidebar = () => {
  // Function to return the appropriate icon based on the icon name
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'grid': return <FiGrid />;
      case 'clock': return <FiClock />;
      case 'calendar': return <FiCalendar />;
      case 'list': return <FiList />;
      case 'bar-chart-2': return <FiBarChart2 />;
      case 'message-circle': return <FiMessageCircle />;
      case 'headphones': return <FiHeadphones />;
      case 'settings': return <FiSettings />;
      default: return null;
    }
  };

  return (
    <SidebarContainer>
      <Logo>HealthCare</Logo>
      <SectionTitle>General</SectionTitle>
      <NavList>
        {navLinks.map((link) => (
          <NavItem key={link.id} isactive="true">
            <NavLink href="#">
              <IconWrapper isactive="true">
                {getIcon(link.icon)}
              </IconWrapper>
              <span>{link.name}</span>
            </NavLink>
          </NavItem>
        ))}
      </NavList>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.aside`
  width: 240px;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  padding: 1.5rem 0;
  background-color: #ffffff;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.05);
  z-index: 100;
  overflow-y: auto;
  
  @media (max-width: 768px) {
    transform: translateX(-100%);
    transition: transform 0.3s ease;
    
    &.open {
      transform: translateX(0);
    }
  }
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #5E81F4;
  padding: 0 1.5rem 1.5rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid #f0f0f0;
`;

const SectionTitle = styled.h3`
  font-size: 0.75rem;
  text-transform: uppercase;
  color: #A0AEC0;
  margin: 1.5rem 1.5rem 0.75rem;
  letter-spacing: 0.05em;
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0 0.75rem;
`;

const NavItem = styled.li`
  margin-bottom: 0.25rem;
  border-radius: 10px;
  background-color: ${props => props.isActive ? '#F0F4FF' : 'transparent'};
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${props => props.isActive ? '#F0F4FF' : '#F8FAFF'};
  }
`;

const NavLink = styled.a`
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  border-radius: 10px;
  color: ${props => props.isActive ? '#5E81F4' : '#4A5568'};
  font-weight: ${props => props.isActive ? '600' : '500'};
  text-decoration: none;
  transition: all 0.2s ease;
  
  &:hover {
    color: #5E81F4;
  }
  
  span {
    margin-left: 0.75rem;
    font-size: 0.9rem;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  color: ${props => props.isActive ? '#5E81F4' : '#718096'};
  transition: color 0.2s ease;
`;

export default Sidebar;
