import React from 'react';
import './ChallengeSection.css'
import TestContainer from '../TestContainer/TestContainer';
const ChallengeSection = () => {
  return (
      <div className="challenge-section-container">
          <h1 className="challenge-section-header">
              Take a Speed test Now!
          </h1>
          <TestContainer/>
      </div>
  );
};

export default ChallengeSection;
