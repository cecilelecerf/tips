import React, { useContext } from 'react';
import Sun from './Sun';
import Moon from './Moon';
import DarkModeContext from '../DarkMode/DarkMode';
import "./Switch.css"

const Switch = () =>{

    const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
    return (
        <div className="Switch d-flex align-items-center bg-primary-subtle rounded-pill border border-primary-subtle justify-content-center p-1">
            {!darkMode&&(
                <>
                    <div className="bg-white rounded-circle p-2 me-3">
                        <Sun color="#ff8c00" />
                    </div>
                    <div className=" rounded-circle p-2" onClick={toggleDarkMode}>
                        <Moon color="black"/>
                    </div>
                </>
            )}
            {darkMode&&(
                <>
                    <div className=" rounded-circle p-2" onClick={toggleDarkMode}>
                        <Sun color="#FFF" />
                    </div>
                    <div className="bg-white rounded-circle p-2 ms-3">
                        <Moon color="#ff8c00"/>
                    </div>
                </>
            )}
        </div>
    );
}

export default Switch;