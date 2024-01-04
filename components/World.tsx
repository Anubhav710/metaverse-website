"use client";

import { fadeIn, staggerContainer } from "@/app/motion";
import { styles } from "@/app/style";
import { motion } from "framer-motion";
import { TitleText, TypingText } from "./CustomTexts";
import Image from "next/image";

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer(1, 2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| People on the World" textStyle="text-center" />
      <TitleText
        title={
          <>
            Track friends around you and invite them to play together in the
            same world
          </>
        }
        textStyle="text-center"
      />

      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <Image
          width={1000}
          height={100}
          src="/map.png"
          alt="map"
          className="w-full h-full object-cover"
        />

        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <Image
            width={1000}
            height={100}
            src="people-01.png"
            alt="people"
            className="w-full h-full"
          />
        </div>

        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <Image
            width={1000}
            height={100}
            src="/people-02.png"
            alt="people"
            className="w-full h-full"
          />
        </div>

        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <Image
            width={1000}
            height={100}
            src="people-03.png"
            alt="people"
            className="w-full h-full"
          />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
