import React from "react";
import { Tilt } from "react-tilt";
// 'to tilt card on hover
import { motion } from "framer-motion";
import { styles } from "../styles";
import { roles } from "../constants";
import { technologies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const IconGrid = () => {
  const gradientStyle = {
    background:
      "linear-gradient(180deg, #a7d129 0%, rgba(30, 46, 18, 0.53) 40.1%, rgba(3, 14, 14, 0.63) 59.9%, #03019c 100%)",
  };

  return (
    <div className="grid grid-cols-4 gap-4 h-full w-full">
      {technologies.map((tech, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center md:mb-5"
        >
          <div
            className="lg:w-[80px] lg:h-[80px] md:w-[70px] md:h-[70px]  w-[50px] h-[50px]  m-auto bg-blue-500 rounded-full flex justify-center items-center "
            style={gradientStyle}
          >
            <img src={tech.icon} alt={tech.name} className="w-3/5 h-3/5" />
          </div>
          <p className="text-sm md:text-md font-medium p-text hidden md:block">
            {tech.name}
          </p>
        </div>
      ))}
    </div>
  );
};
////////////
const Skill = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="mb-10">
        <p className={`${styles.sectionSubText} text-center`}>
          What am I good at?
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Roles and Skills
        </h2>
      </motion.div>

      <div className="flex flex-col md:flex-row md:h-[644px] ">
        <div className="flex-1  md:pr-7 gap-10 flex flex-col justify-between ">
          <motion.div variants={fadeIn("right", "spring")}>
            <Tilt
              className=" border-2  p-7 "
              style={{
                background:
                  "linear-gradient(226deg, rgba(167, 209, 41, 0.47) 0%, rgba(50, 166, 173, 0.37) 48.44%, rgba(129, 128, 210, 0.35) 100%)",
                borderImage:
                  "linear-gradient(226deg, #a7d129 0%, #32a6ad 48.44%, #8180d2 100%) 1",
              }}
            >
              <h3 className="text-white text-[3.2vmin] lg:text-[4.4vmin] font-medium ">
                Full Stack Developer
              </h3>
              <p className="text-[1.8vmin] lg:text-[2.2vmin] pb-4">
                MongoDB, Express.js, React.js, Node.js
              </p>
              <div className="ml-5 ">
                <ul
                  className="  list-disc text-secondary   text-[1.8vmin] lg:text-[2.2vmin] pb-4"
                  style={{ margin: 0 }}
                >
                  {/* ////// */}
                  <li>
                    Developing and maintaining web applications using React.js
                    and other related technologies.
                  </li>
                  <li>
                    Collaborating with cross-functional teams including
                    designers, product managers, and other developers to create
                    high-quality products.
                  </li>
                  <li>
                    Implementing responsive design and ensuring cross-browser
                    compatibility.
                  </li>
                </ul>
              </div>
            </Tilt>{" "}
          </motion.div>
          <motion.div variants={fadeIn("right", "spring")}>
            <Tilt
              className=" border-2  p-7 "
              style={{
                background:
                  "linear-gradient(226deg, rgba(167, 209, 41, 0.47) 0%, rgba(50, 166, 173, 0.37) 48.44%, rgba(129, 128, 210, 0.35) 100%)",
                borderImage:
                  "linear-gradient(226deg, #a7d129 0%, #32a6ad 48.44%, #8180d2 100%) 1",
              }}
            >
              <h3 className="text-white text-[3.2vmin] lg:text-[4.4vmin] font-medium ">
                Full Stack Developer
              </h3>
              <p className="text-[1.8vmin] lg:text-[2.2vmin] pb-4">
                MongoDB, Express.js, React.js, Node.js
              </p>
              <div className="ml-5 ">
                <ul
                  className="  list-disc text-secondary   text-[1.8vmin] lg:text-[2.2vmin] pb-4"
                  style={{ margin: 0 }}
                >
                  <li>
                    Developing and maintaining web applications using React.js
                    and other related technologies.
                  </li>
                  <li>
                    Collaborating with cross-functional teams including
                    designers, product managers, and other developers to create
                    high-quality products.
                  </li>
                  <li>
                    Implementing responsive design and ensuring cross-browser
                    compatibility.
                  </li>
                </ul>
              </div>
            </Tilt>
          </motion.div>
        </div>
        <div className="flex-1 mt-12 md:mt-0 md:h-[649px] ">
          <div
            className="h-full timeline-box-fill-gradient flex items-center justify-center border-2 p-7"
            style={{
              background:
                "linear-gradient(226deg, rgba(167, 209, 41, 0.47) 0%, rgba(50, 166, 173, 0.37) 48.44%, rgba(129, 128, 210, 0.35) 100%)",

              borderImage:
                "linear-gradient(226deg, #a7d129 0%, #32a6ad 48.44%, #8180d2 100%) 1",
            }}
          >
            <IconGrid />
          </div>
        </div>
      </div>
    </>
    //empty tag ends
  );
};

export default SectionWrapper(Skill, "/");
