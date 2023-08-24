import { BrowserRouter } from "react-router-dom";
import {
  Hero,
  About,
  Contact,
  Experience,
  Navbar,
  Projects,
  Skills,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        {/* <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center"> */}
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          {" "}
          <Navbar />
          <Hero />
        </div>

        <About />
        <Experience />
        <Skills />

        <div className="relative z-0">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};
export default App;
