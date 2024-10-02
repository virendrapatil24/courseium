import { Button } from "./ui/button";
import HeroImage1 from "./../assets/hero1.png";

const HeroSection = () => {
  return (
    <div className="flex items-center mt-16 bg-violet-100">
      <div className="flex items-center justify-between py-8 px-40 w-full h-full space-x-20">
        <div className="flex flex-col space-y-8 h-full p-8">
          <div className="text-4xl">Empower Your Skills</div>
          <div className="text-gray-600">
            Discover a range of high-quality, in-demand courses designed to
            elevate your knowledge and career. Learn at your own pace from
            industry experts.
          </div>
          <div className="flex space-x-2">
            <Button className="rounded-full bg-violet-700 hover:bg-violet-800">
              Start Learning Today
            </Button>
            <Button
              variant="ghost"
              className="rounded-full hover:bg-white font-bold"
            >
              Log in
            </Button>
          </div>
        </div>
        <div className="h-full p-8">
          <img src={HeroImage1} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
