import React, { createContext, useState, useContext, useEffect } from 'react';


const defaultState = {
}
const MyContext1 = createContext(defaultState);



const Context1 = ({ children }) => {

    useEffect(() => {
    }, []);


    return (
        <MyContext1.Provider value={{}}>
            { children }
        </MyContext1.Provider>
    );
}

export default Context1;
export { MyContext1 } ;

