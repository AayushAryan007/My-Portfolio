import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import React from "react";

import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
const About = () => {
  return (
    <section
      className={`${styles.paddingX} w-full flex items-center relative h-screen mx-auto mt-[-150px]`}
    >
      <div
        className={`w-full h-full 
        flex justify-between items-center max-w-7xl mx-auto absolute top-[70px]       gap-5`}
      >
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="w-1/2"
        >
          <p className={`${styles.sectionSubText}`}>Introduction</p>
          <h2 className={`${styles.sectionHeadText}`}>About Me.</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            nulla tenetur delectus illo suscipit eius at ipsa cum,
            reprehenderit, esse laudantium aliquid quo doloribus magnam sapiente
            eveniet dicta magni optio? as wekjthfweklj lwj elijl wekljtlwej.
          </p>
        </motion.div>
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="absolute  xl:full md:h-[550px] h-[350px] w-1/2 flex-grow"
        >
          ddjgdgjsjwr
        </motion.div>
      </div>
    </section>
    // <>
    //   <div
    //     className={`${styles.paddingX} w-full sm:flex-row
    //     flex-col justify-between items-center max-w-7xl mx-auto  h-[322px]   flex    gap-5`}
    //   >
    //     <motion.div
    //       variants={slideIn("left", "tween", 0.2, 1)}
    //
    //     >
    //       <p className={`${styles.sectionSubText}`}>Introduction</p>
    //       <h2 className={`${styles.sectionHeadText}`}>About Me.</h2>
    //       <p>
    //         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
    //         nulla tenetur delectus illo suscipit eius at ipsa cum,
    //         reprehenderit, esse laudantium aliquid quo doloribus magnam sapiente
    //         eveniet dicta magni optio? as wekjthfweklj lwj elijl wekljtlwej.
    //       </p>
    //     </motion.div>

    //     <motion.div
    //       variants={slideIn("right", "tween", 0.2, 1)}
    //       className="w-1/2 flex-grow"
    //     >
    //       ddjgdgjsjwr
    //     </motion.div>
    //   </div>
    // </>
  );
};

export default SectionWrapper(About, "/about");
