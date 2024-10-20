import React from 'react';
import './Introduction.css';
import lionelImg from '../../assets/LionelChew_photo.svg';
const Introduction: React.FC = () => {
  return (
    <div className='introduction'>
      <div>
        <h1 className='introText anim-typewriter michroma-regular xxlarge'>
          Fullstack Software Development Engineer_
        </h1>
      </div>
      <div className='michroma-regular fade-in-text'>I build things</div>
      <div>
        <img src={lionelImg} alt='Company Logo' className='logo-image' />
      </div>
    </div>
  );
};

export default Introduction;
