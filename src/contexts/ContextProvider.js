import React, { createContext, useContext, useState} from "react";

const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    notification: false,
    userProfile:false,
}
export const ContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setisClicked] = useState(initialState);
    const handleClick = (clicked) => {
        setisClicked({ ...initialState, [clicked]: true });
        
    }
    const [screenSize, setscreenSize] = useState(undefined);
    return (
        <StateContext.Provider
            value={{
                activeMenu,
                setActiveMenu,
                isClicked,
                setisClicked,
                screenSize,
                setscreenSize
            }}
        >
            {children}
        </StateContext.Provider>
    )
}
export const useStateContext = () => useContext(StateContext);