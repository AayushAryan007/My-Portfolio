import { motion } from "framer-motion";
import { styles } from "../styles";
import { GreenBall } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { github, linkedin } from "../assets";
const Hero = () => {
  return (
    <section className={`w-full flex items-center relative h-screen mx-auto`}>
      <div
        className={`w-full sm:flex-row
        flex-col justify-between items-center max-w-7xl mx-auto absolute  top-[96px] xl:top-[134px]   flex    gap-5`}
      >
        <motion.div variants={slideIn("left", "tween", 0.2, 1)} className="">
          <div className="">
            <p className={styles.heroSubText}>Hi, I'm</p>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Aayush Aryan
            </h1>
            <p className={styles.heroSubText}>A web Developer</p>

            <div className="flex mt-5">
              <div className="rounded-lg py-1 px-2 border-2 mx-1">
                <a href="/">Resume</a>
              </div>
              <div className=" mx-1">
                <img src={linkedin} className="h-9 w-9" />
              </div>
              <div className=" mx-1">
                <img src={github} className="h-9 w-9" />
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <GreenBall />
        </motion.div>
      </div>
    </section>
  );
};

export default SectionWrapper(Hero, "/");
