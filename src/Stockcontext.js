import React, {useState, createContext} from 'react';

export const Stockpro = createContext();

export const Stockstore = (props) => {

    const [val, setVal] = useState([
        {
            u: 0,
            v: 0
        },
        {
            u: 0,
            v: 0
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