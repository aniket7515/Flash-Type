import React from 'react';
import './Landing.css'
import Typewriter from 'typewriter-effect';

const Landing = () => {
  return (
      <div className="landing-container">
          <div  className="landing-left">
              <h1 className="landing-header">Can you type.......</h1>
              <div className="typewriter-container">
              <Typewriter
                options={{
                   strings: ['Fast', 'Correct',"Quick"],
                   autoStart: true,
                   loop: true,
                }}
              />

              </div>
          </div>
          {/* data-aos="fade-left" */}
          {/* data-aos="fade-right" */}
          <div className="landing-right">
              <img   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHaTee8osI2iFI1Evs-kFiMcixHwbV0bslVw&usqp=CAU" alt="" />
          </div>

      </div>
  );
};

export default Landing;
