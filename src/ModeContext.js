import React, { createContext, useState } from 'react';

export const ModeContext = createContext({});

export function ModeContextProvider({children}) {
    const[mode, setMode] = useState('dark');

    const toggleMode = () => {
        setMode((prevMode) => (
            prevMode === 'light' ? 'dark' : 'light'
        ));
        console.log(mode);
    };

    return (            
        <ModeContext.Provider value={{mode, toggleMode}}>
            {children}
        </ModeContext.Provider>
    );
};

