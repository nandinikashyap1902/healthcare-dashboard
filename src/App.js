import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import DashboardMainContent from './components/dashboard/DashboardMainContent';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 769);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 769;
      setIsMobile(mobile);
      if (!mobile) {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <GlobalStyles />
      <AppContainer>
        <Sidebar className={isSidebarOpen ? 'open' : ''} />
        <MainContentWrapper>
          <Header toggleSidebar={toggleSidebar} />
          <MainContent>
            
            <DashboardMainContent />
          </MainContent>
        </MainContentWrapper>
        
        {isMobile && isSidebarOpen && (
          <Overlay onClick={toggleSidebar} />
        )}
      </AppContainer>
    </>
  );
}

const AppContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #f5f7fa;
  position: relative;
`;

const MainContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 240px;
  width: calc(100% - 240px);
  min-height: 100vh;
  
  @media (max-width: 768px) {
    margin-left: 0;
    width: 100%;
  }
`;

const MainContent = styled.main`
  flex: 1;
  padding: 30px 30px 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  
  @media (max-width: 768px) {
    padding: 20px 15px 0;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 95;
  backdrop-filter: blur(2px);
`;

export default App;