import React, { useState } from "react";


export const MenuCtx = React.createContext({
    isOpen: false,
    toggleMenu: () => {}
})


const MenuContextProvider = (props) => {

    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen((currentState) => !currentState)
    }

    return (
        <MenuCtx.Provider value={{
            isOpen: isOpen,
            toggleMenu: toggleMenu
        }}>
            {props.children}
        </MenuCtx.Provider>
    )
}

export default MenuContextProvider