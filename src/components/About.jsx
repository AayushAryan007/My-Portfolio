import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import React from "react";
import image from "../assets/Mine.png";

import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
const About = () => {
  return (
    <>
      <div
        className={` md:flex-row flex-col flex justify-between   w-screen sm:h-[200vh] md:h-[100vh]  overflow-hidden  ml-[-30px]`}
      >
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className=" flex-1 flex-grow p-8 xl:mr-[-74px]"
        >
          <p className={`${styles.sectionSubText}`}>Introduction</p>
          <h2 className={`${styles.sectionHeadText}`}>About Me.</h2>
          <div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam nulla tenetur delectus illo suscipit eius at ipsa cum,
              reprehenderit, esse laudantium aliquid quo doloribus magnam
              sapiente eveniet dicta magni optio? as wekjthfweklj lwj elijl
              wekljtlwej.
            </p>
            <br />
            <p>
              sit amet consectetur adipisicing elit. Fuga ex veniam id
              repudiandae enim sunt aut laboriosam labore, assumenda qui
              doloribus ipsa in expedita perspiciatis facilis culpa pariatur
              odit.
            </p>
            <br />
            Lorem ipsum dolor Fugit rem molestiae et sint illo consequuntur
            impedit, facere porro dolorem suscipit quia iste provident voluptas
            quaerat rerum quos, ut nobis. Lorem ipsum dolor sit amet consectetur
            adipisicing elit.
          </div>

          <div className="flex sm:flex-row flex-wrap  justify-between  gap-2 overflow-hidden mr-44 mt-6">
            <div className="flex-1/4">
              <p className="numPlus-gradient  font-bold text-[50px]">+120</p>
              <p className="  font-medium text-[18px]">
                customers <br /> satisfied
              </p>
            </div>
            <div className="flex-1/4">
              <p className="numPlus-gradient  font-bold text-[50px]">+120</p>
              <p className="  font-medium text-[18px]">
                customers <br /> satisfied
              </p>
            </div>
            <div className="flex-1/4">
              <p className="numPlus-gradient  font-bold text-[50px]">+230</p>
              <p className="  font-medium text-[18px]">
                customers <br /> satisfied
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1  xl:h-auto  sm:h-auto mr-[-40px] xL:mr-[-40px] "
        >
          <img src={image} alt="image" />
        </motion.div>
      </div>

      <div className="bar-gradient relative w-6/7 h-4  bg-green-500"></div>
    </>
  );
};

export default SectionWrapper(About, "about");
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
