"use client";
import { motion } from "framer-motion";
import { styles } from "@/app/style";
import { slideIn, staggerContainer, textVariant } from "@/app/motion";
import Image from "next/image";

const Hero = () => (
  <section className={`${styles.yPaddings} px-6 sm:px-16 relative`}>
    <motion.div className={`mx-auto flex flex-col ${styles.innerWidth}`}>
      <div className=" flex justify-center items-center flex-col relative z-10">
        <motion.h1
          variants={textVariant(1.1)}
          initial="hidden"
          whileInView="show"
          className={`${styles.heroHeading}`}
          viewport={{ once: true }}
        >
          Metaverse
        </motion.h1>
        <motion.div
          variants={textVariant(1.2)}
          initial="hidden"
          whileInView="show"
          className="flex items-center "
          viewport={{ once: true }}
        >
          <h1 className={`${styles.heroHeading}`}>Ma</h1>
          <div className={`${styles.heroDText}`} />
          <h1 className={`${styles.heroHeading}`}>Ness</h1>
        </motion.div>
      </div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className=" relative w-full md:-mt-[30px] -mt-[12px]"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[20px]  " />
        <Image
          src="/cover.png"
          alt="cover"
          width={1000}
          height={200}
          className="w-full h-[350px] object-cover rounded-tl-[140px] z-10 relative "
        />
        <a href="#explore">
          <div className="w-full flex justify-end -mt-14 relative z-10">
            <Image
              src="/stamp.png"
              alt="stamp"
              width={100}
              height={100}
              className="object-contain"
            />
          </div>
        </a>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
