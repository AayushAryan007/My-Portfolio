import { motion } from "framer-motion";
import { styles } from "../styles";
import { GreenBall } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { github, linkedin } from "../assets";
const Hero = () => {
  return (
    <section
      className={`w-full flex items-center relative h-screen mx-auto mt-[-150px]`}
    >
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
              <div className=" mx-1 cursor-pointer">
                <img src={linkedin} className="h-9 w-9" />
              </div>
              <div className="mx-1 cursor-pointer">
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
      <div className="  absolute  xs:bottom-[-50px] bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="  w-[28px] h-[48px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.dev
              animate={{
                y: [0, 22, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-2 h-1 rounded-full bg-prime-green mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default SectionWrapper(Hero, "/");
