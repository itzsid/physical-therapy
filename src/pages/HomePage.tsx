import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AnatomyView } from '../components/AnatomyView';
import { BodyPart } from '../types';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleSelectBodyPart = (bodyPart: BodyPart) => {
    navigate(`/program/${bodyPart.id}`);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <AnatomyView
        onSelectBodyPart={handleSelectBodyPart}
        selectedBodyPart={null}
      />
    </div>
  );
};
