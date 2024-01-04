"use client";

import { staggerContainer } from "@/app/motion";
import { styles } from "@/app/style";
import { motion } from "framer-motion";
import { TitleText, TypingText } from "./CustomTexts";
import { insights } from "@/app/constants";
import InsightCard from "./InsightCard";

const Insights = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer(1, 2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Insight" textStyle="text-center" />
      <TitleText title={<>Insight about metaverse</>} textStyle="text-center" />
      <div className="mt-[50px] flex flex-col gap-[30px]">
        {insights.map((item, index) => (
          <InsightCard key={`insight-${index}`} {...item} index={index + 1} />
        ))}
      </div>
    </motion.div>
  </section>
);

export default Insights;
