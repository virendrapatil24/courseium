import { Button } from "./ui/button";

const NavigationBar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-20 bg-white shadow-md">
      <div className="flex justify-between my-3 font-sans ">
        <div className="flex items-center text-xl font-bold">Courseium</div>
        <div className="flex items-center space-x-12 text-base">
          <a href="/" className="rounded px-3 py-2 hover:bg-gray-100">
            Courses
          </a>
          <a href="/" className="rounded px-3 py-2 hover:bg-gray-100">
            About us
          </a>
          <a href="/" className="rounded px-3 py-2 hover:bg-gray-100">
            Contact us
          </a>
        </div>
        <div className="flex items-center justify-between space-x-2">
          <Button
            variant="ghost"
            className="rounded-full hover:bg-white font-bold"
          >
            Log in
          </Button>
          <Button className="rounded-full bg-violet-700 hover:bg-violet-800">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
