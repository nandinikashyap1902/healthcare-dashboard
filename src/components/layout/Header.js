import React from 'react';
import styled from 'styled-components';
import { FiSearch, FiBell, FiPlus, FiMenu } from 'react-icons/fi';

const Header = ({ toggleSidebar }) => {
  return (
    <HeaderContainer>
      <LeftSection>
        <MenuButton onClick={toggleSidebar}>
          <FiMenu size={20} />
        </MenuButton>
        <SearchContainer>
          <FiSearch />
          <SearchInput placeholder="Search for patients, doctors, etc..." />
        </SearchContainer>
      </LeftSection>
      
      <RightSection>
        <NotificationIcon>
          <FiBell />
          <NotificationBadge>3</NotificationBadge>
        </NotificationIcon>
        <AddButton>
          <FiPlus />
          <span>New</span>
        </AddButton>
        <UserAvatar>
          <img src="https://randomuser.me/api/portraits/men/36.jpg" alt="User" />
        </UserAvatar>
      </RightSection>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  height: 80px;
  padding: 0 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  border-bottom: 1px solid #e2e8f0;
  position: sticky;
  top: 0;
  z-index: 10;
  
  @media (max-width: 768px) {
    padding: 0 15px;
    height: 70px;
  }
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const MenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  color: #4A5568;
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  
  &:hover {
    background-color: #f7fafc;
  }
  
  @media (min-width: 769px) {
    display: none;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #f7fafc;
  padding: 0 16px;
  border-radius: 8px;
  height: 44px;
  width: 400px;
  
  svg {
    color: #a0aec0;
    margin-right: 12px;
    flex-shrink: 0;
  }
  
  @media (max-width: 992px) {
    width: 300px;
  }
  
  @media (max-width: 768px) {
    width: 200px;
    height: 40px;
  }
  
  @media (max-width: 480px) {
    display: none;
  }
`;

const SearchInput = styled.input`
  background: transparent;
  border: none;
  outline: none;
  width: 100%;
  font-size: 0.9rem;
  color: #4a5568;
  
  &::placeholder {
    color: #a0aec0;
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const NotificationIcon = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  width: 44px;
  height: 44px;
  border-radius: 8px;
  color: #4a5568;
  cursor: pointer;
  
  &:hover {
    background-color: #f7fafc;
  }
  
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

const NotificationBadge = styled.span`
  position: absolute;
  top: 8px;
  right: 8px;
  background-color: #f56565;
  color: white;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.6rem;
  font-weight: 600;
`;

const AddButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: #5e81f4;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 0 16px;
  height: 44px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: #4c6ef5;
  }
  
  @media (max-width: 768px) {
    height: 40px;
    padding: 0 12px;
    
    span {
      display: none;
    }
  }
`;

const UserAvatar = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid #edf2f7;
  cursor: pointer;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

export default Header;
