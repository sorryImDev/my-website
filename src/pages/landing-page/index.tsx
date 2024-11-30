import React from "react";
import './landing-page.css'
import Header from "../../components/landing-header";
import IntroSection from "../../components/intro-section";

const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
      <div className="header-sect section">
        <Header />
      </div>
      <div className="intro-sect section">
        <div className="intro-content">
            <IntroSection available = {true}/>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
