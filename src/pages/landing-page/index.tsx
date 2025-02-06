import React, { useRef, useEffect, Suspense, useState } from "react";
import "./landing-page.css";
import Header from "../../components/landing-header";
import { AboutMeSection, IntroSection, SkillsSection, ContactSection } from "../../views";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

const LandingPage: React.FC = () => {
  const [showAboutMe, setShowAboutMe] = useState(false);
  const introRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Trigger when intro section is halfway out of view
        setShowAboutMe(!entry.isIntersecting);
      },
      {
        root: null, // Use the viewport as the root
        threshold: 0.8, // Trigger when 50% of the intro section is visible
      }
    );

    if (introRef.current) {
      observer.observe(introRef.current);
    }

    return () => {
      if (introRef.current) {
        observer.unobserve(introRef.current);
      }
    };
  }, []);

  return (
    <div className="landing-page">
      {/* Header */}
      <div className="header-sect section">
        <Header />
      </div>
      {/* Intro section */}
      <div
        className="intro-sect section"
        data-scroll
        data-scroll-speed="0.5"
        ref={introRef}
      >
        <div className="intro-content">
          <IntroSection available={true} />
        </div>
      </div>
      {/* About Me section */}
      <div
        className={`about-me section ${showAboutMe ? "hidden" : "visible"}`}
        data-scroll
        data-scroll-speed="1"
      >
        <div className="about-me-content">
          <AboutMeSection
            customerSatisfaction={0}
            yearsOfExp={0}
            successProjects={0}
          />
        </div>
      </div>
      {/* Skills Section */}
      <div className="skills-sect section" data-scroll data-scroll-speed="0.5">
        <div className="skills-content">
          <SkillsSection />
        </div>
      </div>
      {/* Contact Section */}
      <div className="contact-sect section" data-scroll data-scroll-speed="0.5">
        <div className="contact-content">
          <ContactSection />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
