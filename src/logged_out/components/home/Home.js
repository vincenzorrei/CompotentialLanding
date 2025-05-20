import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import AOS from "aos";
import "aos/dist/aos.css";
import HeadSection from "./HeadSection";
import ThreeCardsSection from "./ThreeCardsSection";
import ReelSection from "./ReelSection";
import NetworkingSection from "./NetworkingSection";
import ContinuousLearningSection from "./ContinuousLearningSection";
import CareerOrientationSection from "./CareerOrientationSection";

function Home(props) {
  const { selectHome } = props;
  
  useEffect(() => {
    selectHome();
    
    // Initialize AOS for animations
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, [selectHome]);
  
  return (
    <Fragment>
      <HeadSection />
      <div data-aos="fade-up">
        <ThreeCardsSection />
      </div>
      <div data-aos="fade-up">
        <ReelSection />
      </div>
      <div data-aos="fade-right">
        <NetworkingSection />
      </div>
      <div data-aos="fade-left">
        <ContinuousLearningSection />
      </div>
      <div data-aos="fade-up">
        <CareerOrientationSection />
      </div>
    </Fragment>
  );
}

Home.propTypes = {
  selectHome: PropTypes.func.isRequired
};

export default Home;
