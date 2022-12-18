import React from "react";
import { motion as m } from "framer-motion";
import { pageVariants } from "../animations/homePage";
import { useRouter } from "next/router";

function Section({ children, myKey }) {
    return <m.section
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 1, ease: "easeOut"}}
      exit={{opacity: 0}}
    >{children}</m.section>;
}

export default Section;
