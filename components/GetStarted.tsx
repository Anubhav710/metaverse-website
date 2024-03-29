"use client";

import { motion } from "framer-motion";

import { styles } from "@/app/style";
import { startingFeatures } from "@/app/constants";
import { fadeIn, planetVariants, staggerContainer } from "@/app/motion";
import { TitleText, TypingText } from "./CustomTexts";
import StartSteps from "./StartSteps";
import Image from "next/image";

const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer(1, 2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={planetVariants("left")}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <Image
          width={1000}
          height={100}
          src="/get-started.png"
          alt="get-started"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="| How Metaversus Works" />
        <TitleText title={<>Get started with just a few clicks</>} />
        <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
          {startingFeatures.map((feature, index) => (
            <StartSteps
              key={feature}
              number={`${index < 10 ? "0" : ""} ${index + 1}`}
              text={feature}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
