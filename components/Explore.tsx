"use client";

import { styles } from "@/app/style";
import { TitleText, TypingText } from "./CustomTexts";
import { exploreWorlds } from "@/app/constants";
import ExploreCard from "./ExploreCard";
import { useState } from "react";

const Explore = () => {
  const [active, setActive] = useState("world-2");
  return (
    <section className={`${styles.innerWidth} mx-auto flex flex-col`}>
      <TypingText title="| The Word" textStyle="text-center" />
      <TitleText
        title={
          <>
            Chose the world you want <br className="md:block hidden" /> to
            explore
          </>
        }
        textStyle="text-center"
      />
      <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5 ">
        {exploreWorlds.map((world, index) => (
          <ExploreCard
            key={world.id}
            {...world}
            index={index}
            active={active}
            handleClick={setActive}
          />
        ))}
      </div>
    </section>
  );
};

export default Explore;
