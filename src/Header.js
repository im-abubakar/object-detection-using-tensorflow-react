import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./header.css";
import ai from "../src/ai.png";
// import Objectdetect from './ObjectDetection';

const Header = () => {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate('/Objectdetect'); // Assuming 'objectdetect' is your route
  };

  return (
    <div className="gpt3__header section_padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text" style={{color: 'black'}} >
          Let's Explore Something Amazing with Object Detection Model
        </h1>
        <p style={{color: 'white'}} >The first version of Object Detection Model.</p>

        <div className="gpt3__header-content__input">
          <button type="button" onClick={handleGetStartedClick}>
            Get Started
          </button>
        </div>

        <div className="gpt3__header-content__people">
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>

      <div className="gpt3__header-image">
        <img src={ai} alt="AI" />
      </div>
    </div>
  );
};

export default Header;
