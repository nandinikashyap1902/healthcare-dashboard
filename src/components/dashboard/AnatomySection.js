import React,{useState} from 'react';
import styled from 'styled-components';
import { FaBrain, FaHeart, FaLungs, FaBone } from 'react-icons/fa';
import HealthStatusCards from './HealthStatusCards';
import anatomyImage from '../../../src/assets/images/Anatomical-position.jpg';

const bodyParts = [
  { 
    id: 'head', 
    name: 'Head', 
    status: 'Healthy',
    color: '#4CAF50',
    icon: <FaBrain size={16} />
  },
  { 
    id: 'chest', 
    name: 'Chest', 
    status: 'Good',
    color: '#4CAF50',
    icon: <FaHeart size={16} />
  },
  { 
    id: 'lungs', 
    name: 'Lungs', 
    status: 'Good',
    color: '#4CAF50',
    icon: <FaLungs size={16} />
  },
  { 
    id: 'pelvis', 
    name: 'Pelvis', 
    status: 'Healthy',
    color: '#4CAF50',
    icon: <FaBone size={16} />
  },
];

const AnatomySection = () => {
  const [hoveredPart, setHoveredPart] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const handlePartHover = (part, e) => {
    setHoveredPart(part);
    // Get the position of the hovered element
    const rect = e.target.getBoundingClientRect();
    setTooltipPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <AnatomyContainer>
      <AnatomyTitle>Body Health Overview</AnatomyTitle>
      <AnatomyContent>
        <AnatomyImageContainer>
          <AnatomyImg 
            src={anatomyImage} 
            alt="Human Anatomy" 
            onMouseLeave={() => setHoveredPart(null)}
          />
          {bodyParts.map((part) => (
            <BodyPart
              key={part.id}
              onMouseMove={(e) => handlePartHover(part, e)}
              onMouseLeave={() => setHoveredPart(null)}
              area={part.id}
              isActive={hoveredPart?.id === part.id}
            >
              {hoveredPart?.id === part.id && (
                <Tooltip 
                  x={tooltipPosition.x} 
                  y={tooltipPosition.y}
                  position={part.id === 'pelvis' ? 'top' : 'bottom'}
                >
                  <TooltipHeader>
                    <TooltipIcon>{part.icon}</TooltipIcon>
                    <TooltipTitle>{part.name}</TooltipTitle>
                  </TooltipHeader>
                  <TooltipStatus color={part.color}>
                    Status: {part.status}
                  </TooltipStatus>
                </Tooltip>
              )}
            </BodyPart>
          ))}
        </AnatomyImageContainer>
        <HealthStatusCardsWrapper>
          <HealthStatusCards />
        </HealthStatusCardsWrapper>
      </AnatomyContent>
    </AnatomyContainer>
  );
};

const AnatomyContainer = styled.div`
  background: white;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.5rem;
`;

const AnatomyTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1.5rem;
`;

const AnatomyContent = styled.div`
  display: flex;
  gap: 2rem;
  align-items: flex-start;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const AnatomyImageContainer = styled.div`
  position: relative;
  width: 70%;
  padding-top: 93.33%; /* 3:4 aspect ratio */
  border-radius: 12px;
  overflow: hidden;
  background: #f8f9fa;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  flex-shrink: 0;
`;

const AnatomyImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  z-index: 1;
`;

const BodyPart = styled.div`
  position: absolute;
  z-index: 2;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &::before {
    content: '';
    position: absolute;
    width: 24px;
    height: 24px;
    background: rgba(76, 175, 80, 0.1);
    border-radius: 4px;
    transition: all 0.2s ease;
    opacity: 0;
  }
  
  ${({ area, isActive }) => {
    switch (area) {
      case 'head':
        return `
          top: 12%;
          left: 40%;
          width: 20%;
          height: 15%;
          
          &::before {
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            ${isActive ? 'opacity: 1;' : ''}
          }
        `;
      case 'chest':
        return `
          top: 25%;
          left: 30%;
          width: 40%;
          height: 20%;
          
          &::before {
            top: 20%;
            right: 20%;
            ${isActive ? 'opacity: 1;' : ''}
          }
        `;
      case 'lungs':
        return `
          top: 28%;
          left: 35%;
          width: 30%;
          height: 18%;
          
          &::before {
            top: 20%;
            right: 20%;
            ${isActive ? 'opacity: 1;' : ''}
          }
        `;
      case 'pelvis':
        return `
          top: 48%;
          left: 35%;
          width: 30%;
          height: 25%;
          
          &::before {
            bottom: 20%;
            right: 20%;
            ${isActive ? 'opacity: 1;' : ''}
          }
        `;
      default:
        return '';
    }
  }}
  
  &:hover::before {
    opacity: 1;
  }
`;

const Tooltip = styled.div.attrs(props => ({
  style: {
    left: `${props.x + 10}px`,
    top: props.position === 'top' ? 'auto' : `${props.y + 10}px`,
    bottom: props.position === 'top' ? `${window.innerHeight - props.y + 10}px` : 'auto',
  }
}))`
  position: absolute;
  background: white;
  padding: 0.6rem 0.8rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 10;
  pointer-events: none;
  min-width: 140px;
  font-size: 0.85rem;
  transform: ${props => props.position === 'top' ? 'translateY(10px)' : 'translateY(-10px)'};
  opacity: 0;
  animation: fadeIn 0.2s ease forwards;
  
  @keyframes fadeIn {
    to {
      opacity: 1;
      transform: ${props => props.position === 'top' ? 'translateY(0)' : 'translateY(0)'};
    }
  }
  
  &::before {
    content: '';
    position: absolute;
    left: -8px;
    top: 50%;
    transform: translateY(-50%) rotate(45deg);
    width: 16px;
    height: 16px;
    background: white;
    z-index: -1;
    box-shadow: -2px 2px 5px rgba(0, 0, 0, 0.1);
  }
`;

const TooltipHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 4px;
`;

const TooltipIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #4CAF50;
`;

const TooltipTitle = styled.div`
  font-weight: 600;
  color: #333;
  font-size: 0.95rem;
`;

const TooltipStatus = styled.div`
  font-size: 0.85rem;
  color: ${props => props.color || '#666'};
  margin-top: 2px;
`;

const HealthStatusCardsWrapper = styled.div`
  flex: 1;
  min-width: 200px;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export default AnatomySection;