import React from 'react';
import ChallengeDetailsCard from '../ChallengeDetailsCard/ChallengeDetailsCard';
import './TypingChalengeContainer.css'
const TypingChallengeContainer = ({words,characters,wpm}) => {
  return (
      <div className="typing-challenge-container">
          {/* Details Section   */}
          <div className="details-container">
              {/* Words-types */}
              <ChallengeDetailsCard cardName="Words" cardValue={words}/>

              {/* charater-typed     */}
              <ChallengeDetailsCard cardName="Characters" cardValue={characters}/>

              {/* Speed   */}
              <ChallengeDetailsCard cardName="speed" cardValue={wpm}/>
          </div>

          {/* The Real Challenge   */}
          <div className="typewriter-container">
              <p>This is the REAL CHALLENGE!</p>
          </div>
      </div>

  );
};

export default TypingChallengeContainer;
