import React from 'react';
import LogoSvg from '../../assets/random.svg';
const Logo: React.FC = () => {
  return (
    <div className="logo-container">
      <img src={LogoSvg} alt="Company Logo" className="logo-image" />
    </div>
  );
};

export default Logo;
