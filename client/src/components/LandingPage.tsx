import FeatureSection from "./FeatureSection";
import FooterSection from "./FooterSection";
import HeroSection from "./HeroSection";
import NavigationBar from "./NavigationBar";

const LandingPage = () => {
  return (
    <div>
      <NavigationBar />
      <HeroSection />
      <FeatureSection />
      <FooterSection />
    </div>
  );
};

export default LandingPage;
