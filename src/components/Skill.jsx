import React from "react";
import { Tilt } from "react-tilt";
// 'to tilt card on hover
import { motion } from "framer-motion";
import { styles } from "../styles";
import { roles } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const Skill = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What am I good at?
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Roles and Skills
        </h2>
      </motion.div>

      <div className="flex ">
        <div className="flex-1  pr-7 gap-10 flex flex-col justify-between ">
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
              <h3 className="text-white text-[34px] font-medium ">
                Full Stack Developer
              </h3>
              <p>MongoDB, Express.js, React.js, Node.js</p>
              <div className="ml-5 ">
                <p
                  className="text-secondary text-[16px] font-semibold"
                  style={{ margin: 0 }}
                >
                  <ul className="  list-disc">
                    <li>
                      {" "}
                      Developing and maintaining web applications using React.js
                      and other related technologies.{" "}
                    </li>
                    <li>
                      {" "}
                      Collaborating with cross-functional teams including
                      designers, product managers, and other developers to
                      create high-quality products.{" "}
                    </li>
                    <li>
                      Implementing responsive design and ensuring cross-browser
                      compatibility.
                    </li>
                  </ul>
                </p>
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
              <h3 className="text-white text-[34px] font-medium ">
                Full Stack Developer
              </h3>
              <p>MongoDB, Express.js, React.js, Node.js</p>
              <div className="ml-5 ">
                <p
                  className="text-secondary text-[16px] font-semibold"
                  style={{ margin: 0 }}
                >
                  <ul className="  list-disc">
                    <li>
                      {" "}
                      Developing and maintaining web applications using React.js
                      and other related technologies.{" "}
                    </li>
                    <li>
                      {" "}
                      Collaborating with cross-functional teams including
                      designers, product managers, and other developers to
                      create high-quality products.{" "}
                    </li>
                    <li>
                      Implementing responsive design and ensuring cross-browser
                      compatibility.
                    </li>
                  </ul>
                </p>
              </div>
            </Tilt>{" "}
          </motion.div>
        </div>
        <div
          className="flex-1 timeline-box-fill-gradient flex items-center justify-center border-2  p-7"
          style={{
            background:
              "linear-gradient(226deg, rgba(167, 209, 41, 0.47) 0%, rgba(50, 166, 173, 0.37) 48.44%, rgba(129, 128, 210, 0.35) 100%)",

            borderImage:
              "linear-gradient(226deg, #a7d129 0%, #32a6ad 48.44%, #8180d2 100%) 1",
          }}
        >
          third box
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Skill, "/");
