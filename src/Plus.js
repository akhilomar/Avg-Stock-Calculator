import React, {useState, useContext} from 'react';
import {Stockpro} from './Stockcontext';

const Plus = () => {

    const [val, setVal] = useContext(Stockpro);

    const handleClick = () => {
        let temp = val;
        temp.push({
            u: 0,
            v: 0
        })
        setVal(temp);
        console.log(val)
    }

    return(
        <>
            <button onClick = {handleClick}>+</button>
        </>
    );
}

export default Plus;