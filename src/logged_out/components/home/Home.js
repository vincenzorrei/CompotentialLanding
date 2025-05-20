import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import HeadSection from "./HeadSection";
import ThreeCardsSection from "./ThreeCardsSection"; // Added
import ReelSection from "./ReelSection"; // Added
import NetworkingSection from "./NetworkingSection"; // Added
import ContinuousLearningSection from "./ContinuousLearningSection"; // Added
import CareerOrientationSection from "./CareerOrientationSection"; // Added
// import FeatureSection from "./FeatureSection"; // Removed
// import PricingSection from "./PricingSection"; // Removed

function Home(props) {
  const { selectHome } = props;
  useEffect(() => {
    selectHome();
  }, [selectHome]);
  return (
    <Fragment>
      <HeadSection />
      <ThreeCardsSection /> {/* Added */}
      <ReelSection /> {/* Added */}
      <NetworkingSection /> {/* Added */}
      <ContinuousLearningSection /> {/* Added */}
      <CareerOrientationSection /> {/* Added */}
      {/* New sections will be added here */}
    </Fragment>
  );
}

Home.propTypes = {
  selectHome: PropTypes.func.isRequired
};

export default Home;
