import React, { useState } from 'react';
import './popup.scss';
import Inst from '../inst.png';

const HeroPopup = ({handleExit, prompt, message, img, button}) => {

  return <div className={`hero-popup-background`}>
    <div className="hero-popup-content">
        {img && <img src={Inst} className="intructions"/>}
        <h1 className="hero-popup-title">{prompt}</h1>
        {message && <p className="hero-popup-message">{message}</p>}
        <span className="hero-popup-buttons">
          <button onClick={() => handleExit()}>{button}</button>
        </span>
    </div>
  </div>;
};

export default HeroPopup;