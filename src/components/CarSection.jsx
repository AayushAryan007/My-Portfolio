import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { GreenCar } from "./Canvas";

import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Car = () => {
  return (
    <motion.div
      variants={slideIn("right", "tween", 0.2, 1)}
      className="mt-[20px] md:h-[350px] h-[350px]"
    >
      <GreenCar />
    </motion.div>
  );
};

export default SectionWrapper(Car, "");
