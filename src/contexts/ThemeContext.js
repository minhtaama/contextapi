import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = ({children}) => {
    const [themeContext, setThemeContext] = useState({
        isDarkTheme: true,
        lightTheme: {
            text: '#222',
            background: '#d8ddf1' 
        },
        darkTheme: {
            text: '#fff',
            background: '#5c5c5c' 
        }
    })

    const changeTheme = () => {
        setThemeContext({...themeContext, isDarkTheme: !themeContext.isDarkTheme});
    }

    return(
        <ThemeContext.Provider value={{ ...themeContext, changeTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider;