import React from "react";
import { motion as m } from "framer-motion";
import { pageVariants } from "../animations/homePage";
import { useRouter } from "next/router";

function Section({ children, className }) {
    return <m.section className={`${className}`}
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 1.5, ease: "easeOut"}}
      exit={{opacity: 0}}
    >{children}</m.section>;
}

export default Section;
