import React from "react";
import { motion as m } from "framer-motion";
import { lineVariants } from "../animations/hamburger";

function Hamburger() {
    return (
        <div className="hamburger">
            <m.span
                className="line line-1"
                variants={lineVariants}
                initial="initialState"
                animate="animateState"
                transition={{ delay: 3.5, duration: 0.1, ease: "easeIn" }}
            ></m.span>
            <m.span
                className="line line-2"
                variants={lineVariants}
                initial="initialState"
                animate="animateState"
                transition={{ delay: 3.6, duration: 0.1, ease: "easeIn" }}
            ></m.span>
            <m.span
                className="line line-3"
                variants={lineVariants}
                initial="initialState"
                animate="animateState"
                transition={{ delay: 3.7, duration: 0.1, ease: "easeIn" }}
            ></m.span>
        </div>
    );
}

export default Hamburger;
