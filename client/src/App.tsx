import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import SignupPage from "./components/SignupPage";
import NavigationBar from "./components/NavigationBar";

const App = () => {
  return (
    <Router>
      <NavigationBar />
      <div className="pt-16">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
