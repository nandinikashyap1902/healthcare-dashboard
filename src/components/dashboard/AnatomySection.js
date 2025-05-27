import React,{useState} from 'react';
import styled from 'styled-components';
// import { FaBrain, FaHeart, FaLungs, FaBone } from 'react-icons/fa';
import HealthStatusCards from './HealthStatusCards';
import anatomyImage from '../../../src/assets/images/Anatomical-position.jpg';

const bodyParts = [
  { 
    id: 'head', 
    name: 'Head', 
    status: 'Healthy',
    color: '#4CAF50'
  },
  { 
    id: 'chest', 
    name: 'Chest', 
    status: 'Good',
    color: '#4CAF50'
  },
  { 
    id: 'lungs', 
    name: 'Lungs', 
    status: 'Good',
    color: '#4CAF50'
  },
  { 
    id: 'pelvis', 
    name: 'Pelvis', 
    status: 'Healthy',
    color: '#4CAF50'
  },
];

const AnatomySection = () => {
  const [hoveredPart, setHoveredPart] = useState(null);

  const handlePartHover = (part) => {
    setHoveredPart(part);
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
          {hoveredPart && (
            <Tooltip>
              <TooltipTitle>{hoveredPart.name}</TooltipTitle>
              <TooltipStatus color={hoveredPart.color}>
                Status: {hoveredPart.status}
              </TooltipStatus>
            </Tooltip>
          )}
          {bodyParts.map((part) => (
            <BodyPart
              key={part.id}
              onMouseEnter={() => handlePartHover(part)}
              area={part.id}
            />
          ))}
        </AnatomyImageContainer>
        <HealthStatusCards />
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
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  align-items: flex-start;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const AnatomyImageContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 133.33%; /* 3:4 aspect ratio */
  border-radius: 12px;
  overflow: hidden;
  background: #f8f9fa;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
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
  
  border: 2px solid transparent;
  transition: all 0.2s ease;
  border-radius: 4px;
  
  ${({ area }) => {
    switch (area) {
      case 'head':
        return `
          top: 5%;
          left: 40%;
          width: 20%;
          height: 15%;
        `;
      case 'chest':
        return `
          top: 20%;
          left: 30%;
          width: 40%;
          height: 25%;
        `;
      case 'lungs':
        return `
          top: 25%;
          left: 35%;
          width: 30%;
          height: 20%;
        `;
      case 'pelvis':
        return `
          top: 45%;
          left: 32.5%;
          width: 35%;
          height: 30%;
        `;
      default:
        return '';
    }
  }}

  &:hover {
    background: rgba(76, 175, 80, 0.3);
    border-color: #4CAF50;
  }
`;

const Tooltip = styled.div`
  position: absolute;
  background: white;
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 10;
  pointer-events: none;
  min-width: 20px;
  top: 20px;
  right: 20px;
`;

const TooltipTitle = styled.div`
  font-weight: 600;
  margin-bottom: 0.25rem;
  color: #333;
`;

const TooltipStatus = styled.div`
  font-size: 0.875rem;
  color: ${props => props.color || '#666'};
`;

export default AnatomySection;