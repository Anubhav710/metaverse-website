"use client";

import { motion } from "framer-motion";
import { navVariants } from "@/app/motion";
import Image from "next/image";
import { styles } from "@/app/style";

const Navbar = () => (
  // wrapper Div
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative `}
    viewport={{ once: true }}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div
      className={`${styles.innerWidth} flex justify-between items-center mx-auto`}
    >
      <Image
        src="/search.svg"
        alt="search icon"
        width={24}
        height={24}
        className="object-contain"
      />
      <h1 className="uppercase font-extrabold text-[24px] leading-[30px] text-white">
        Metaversus
      </h1>
      <Image
        src="/menu.svg"
        alt="menu icon"
        width={24}
        height={24}
        className="object-contain"
      />
    </div>
  </motion.nav>
);

export default Navbar;
