import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const Navbar = () => {
    const {changeTheme, lightTheme, darkTheme, isDarkTheme} = useContext(ThemeContext);
    const theme = isDarkTheme ? darkTheme : lightTheme;

    return(
        <nav style={{background: theme.background, color: theme.text}}>
            <h2>First Project</h2>
            <button>Overview</button>
            <button>Contacts</button>
            <button>Support</button>
            <button onClick={changeTheme}>ChangeTheme</button>
        </nav>
    )
}

export default Navbar;