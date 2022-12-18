import React, { useContext } from "react";
import { AnimatePresence, motion as m, useAnimation } from "framer-motion";
import { lineVariants } from "../animations/hamburger";
import { MenuCtx } from "../store/menu-ctx";

function Hamburger() {
    const ctx = useContext(MenuCtx);

    const toggleHandler = () => {
        ctx.toggleMenu();
        
    };

    return (
        <div className="hamburger" onClick={toggleHandler}>   
                <span className={`line line-1 ${ctx.isOpen === true ? 'open-1' : 'closed'}`}></span>
                <span className={`line line-2 ${ctx.isOpen === true ? 'open-2' : 'closed'}`}></span>
                <span className={`line line-3 ${ctx.isOpen === true ? 'open-3' : 'closed'}`}></span>    
        </div>
    );
}

export default Hamburger;
