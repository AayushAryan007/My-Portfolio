import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import image from "../assets/Mine2.png";
import { styles } from "../styles";

import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import linkedinIcon from "../assets/linkedin.png";
import instagramIcon from "../assets/instagram.png";
import facebookIcon from "../assets/facebook.png";
import leetcodeIcon from "../assets/leetcode.png";
import githubIcon from "../assets/github.png";

// 6MdaGR3PF9DN520LG
// template_0g7ragc
// service_2kbnj7w

const Contact = () => {
  const socialMediaIcons = [
    { name: "LinkedIn", icon: linkedinIcon, link: "linkedin-link-here" },
    { name: "Instagram", icon: instagramIcon, link: "instagram-link-here" },
    { name: "Facebook", icon: facebookIcon, link: "facebook-link-here" },
    { name: "LeetCode", icon: leetcodeIcon, link: "leetcode-link-here" },
    { name: "GitHub", icon: githubIcon, link: "github-link-here" },
  ];

  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_2kbnj7w",
        "template_0g7ragc",
        {
          from_name: form.name,
          to_name: "Aayusyh Aryan",
          from_email: form.email,
          to_email: "unitedestates.ayush10@gmail.com",
          message: form.message,
        },
        "6MdaGR3PF9DN520LG"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };
  return (
    <div className="xl:mt-12 xl:flex-row flex-col flex gap-10 overflow-hidden ">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8  bg-tertiary   sm:w-[360px] w-full  border-2"
        style={{
          background:
            "linear-gradient(226deg, rgba(167, 209, 41, 0.47) 0%, rgba(50, 166, 173, 0.37) 48.44%, rgba(129, 128, 210, 0.35) 100%)",
          borderImage:
            "linear-gradient(226deg, #a7d129 0%, #32a6ad 48.44%, #8180d2 100%) 1",
        }}
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-whitefont-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6  text-white  bg-[#5783334e]  rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-whitefont-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 bg-[#5783334e] text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-whitefont-medium mb-4">Your Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you wanna say?"
              className="bg-tertiary py-4 px-6  bg-[#5783334e] text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className=" btn-grad2 bg-tertiary  rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1  xl:h-auto  sm:h-auto mr-[-40px] xL:mr-[-40px]  flex justify-center items-cente"
      >
        <div>
          <img className="h-[720px]" src={image} alt="image" />
          <div
            className="border-2 w-full"
            style={{
              background:
                "linear-gradient(226deg, rgba(167, 209, 41, 0.47) 0%, rgba(50, 166, 173, 0.37) 48.44%, rgba(129, 128, 210, 0.35) 100%)",
              borderImage:
                "linear-gradient(226deg, #a7d129 0%, #32a6ad 48.44%, #8180d2 100%) 1",
            }}
          >
            {socialMediaIcons.map((icon, index) => (
              <a
                key={index}
                href={icon.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2"
              >
                <img
                  src={icon.icon}
                  alt={icon.name}
                  className="w-8 h-8 hover:opacity-70"
                />
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
