import { BrowserRouter } from "react-router-dom";
import {
  Hero,
  About,
  Contact,
  Experience,
  Navbar,
  Skills,
  Projects,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        {/* <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center"> */}
        <div className="bg-whole-pattern  bg-inherit  bg-no-repeat bg-center">
          {" "}
          <Navbar />
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </div>

        {/* <div className="relative z-0"></div> */}
      </div>
    </BrowserRouter>
  );
};
export default App;
