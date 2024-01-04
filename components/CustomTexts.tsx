"use client";

import { textContainer, textVariant2 } from "@/app/motion";
import { motion } from "framer-motion";

const fadeInAnimation = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

type TypingTextProp = {
  title: any;
  textStyle?: String;
};

export const TypingText = ({ title, textStyle }: TypingTextProp) => (
  <motion.p
    className={`font-normal text-[14px] text-secondary-white ${textStyle}`}
  >
    {title.split("").map((letter, index) => (
      <motion.span
        variants={fadeInAnimation}
        initial="initial"
        whileInView="animate"
        key={index}
        custom={index}
        viewport={{ once: true }}
      >
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({ title, textStyle }: TypingTextProp) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-white ${textStyle}`}
    viewport={{ once: true }}
  >
    {title}
  </motion.h2>
);
