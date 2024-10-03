import FeatureSection from "./components/FeatureSection";
import HeroSection from "./components/HeroSection";
import NavigationBar from "./components/NavigationBar";

const App = () => {
  return (
    <div>
      <NavigationBar />
      <HeroSection />
      <FeatureSection />
    </div>
  );
};

export default App;
