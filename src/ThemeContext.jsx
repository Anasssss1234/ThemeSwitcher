import { createContext, useState } from "react";

export const ThemeContext = createContext();
 
export const ThemeProvider = ({children}) =>{
    const [theme, settheme]= useState('light')
    const handleClick = () =>{
        const updatedTheme = theme=='light'? 'dark': 'light';
        settheme(updatedTheme);
    }
 return(
    <>
    <ThemeContext.Provider value={{theme, handleClick}}>{children}</ThemeContext.Provider>
    </>
 )
}