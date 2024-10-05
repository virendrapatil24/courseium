import FeatureSection from "./components/FeatureSection";
import FooterSection from "./components/FooterSection";
import HeroSection from "./components/HeroSection";
import NavigationBar from "./components/NavigationBar";

const App = () => {
  return (
    <div>
      <NavigationBar />
      <HeroSection />
      <FeatureSection />
      <FooterSection />
    </div>
  );
};

export default App;
