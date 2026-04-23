import React, { useState } from 'react';
import './Rabbit.css';

export const Rabbit: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleBoxClick = () => {
    setIsOpen(true);
  };

  return (
    <div className="rabbit-container">
      <div className={`box ${isOpen ? 'open' : ''}`}> 
        {/* Box body */}
        <div className="box-body">
          <div className="box-side left"></div>
          <div className="box-side right"></div>
          <div className="box-front">
            <div className="box-top-edge"></div>
          </div>
        </div>
        <div className="box-lid">
          <div className="lid-inside"></div>
        </div>
        {/* Rabbit and note only appear when open */}
        {isOpen && (
          <div className={`rabbit pop-out`}>
            <div className="ears">
              <div className="ear left-ear"></div>
              <div className="ear right-ear"></div>
            </div>
            <div className="head">
              <div className="eyes">
                <div className="eye left-eye"><div className="pupil"></div></div>
                <div className="eye right-eye"><div className="pupil"></div></div>
              </div>
              <div className="nose"></div>
              <div className="mouth"></div>
            </div>
            <div className="body">
              <div className="paw left-paw"></div>
              <div className="paw right-paw"></div>
              {/* Note held by rabbit */}
              <div className="note">Please smile 🌸</div>
            </div>
          </div>
        )}
      </div>
      {/* Button only visible when closed */}
      {!isOpen && (
        <button className="cute-button" onClick={handleBoxClick}>
          Press the button
        </button>
      )}
    </div>
  );
};
