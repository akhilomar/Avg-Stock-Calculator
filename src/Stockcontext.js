import React, {useState, createContext} from 'react';

export const Stockpro = createContext();

export const Stockstore = (props) => {

    const [val, setVal] = useState([
        {
            u1: 0,
            v1: 0
        },
        {
            u2: 0,
            v2: 0
        }
    ]);

    return(
        <>
            <Stockpro.Provider value = {[val, setVal]}>
                {props.children}
            </Stockpro.Provider>
        </>
    );
}