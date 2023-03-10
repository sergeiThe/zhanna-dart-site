import Link from "next/link";
import React, { useContext } from "react";
import { MenuCtx } from "../store/menu-ctx";
import { AnimatePresence, motion as m } from "framer-motion";

function Menu() {
    const ctx = useContext(MenuCtx);

    const toggleHandler = () => {
        ctx.toggleMenu();
        
    };

    return (
        <AnimatePresence>
            {ctx.isOpen && (
            <m.header
                className="menu"
                initial={{ x: 1000 }}
                animate={{ x: 0 }}
                exit={{ x: 1000 }}
                transition={{duration: 0.5, ease: "easeOut"}}
            >
                <nav className="nav">
                    <ul className="nav-list">
                        <Link href="/" onClick={toggleHandler} replace>
                            <li className="nav-item">Hjem</li>
                        </Link>
                        <Link href="/om-meg" onClick={toggleHandler} replace>
                            <li className="nav-item">Om meg</li>
                        </Link>
                        <Link href="/arbeid" onClick={toggleHandler} replace>
                            <li className="nav-item">Mitt arbeid</li>
                        </Link>
                        <Link href="/tjenester" onClick={toggleHandler} replace>
                            <li className="nav-item">Tjenester</li>
                        </Link>
                        <Link href="/kontakt" onClick={toggleHandler} replace>
                            <li className="nav-item">Kontakt</li>
                        </Link>
                        <Link target="_blank" rel="noopener noreferrer" href="https://zhannadart.onlinebooq.net/" onClick={toggleHandler} replace>
                            <li className="nav-item">Bestill</li>
                        </Link>
                    </ul>
                </nav>
            </m.header>
            )}
        </AnimatePresence>
    );
}

export default Menu;
