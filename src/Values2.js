import React, {useState, useContext} from 'react';
import {Stockpro} from './Stockcontext';

const Values2 = () => {

    const [val, setVal] = useContext(Stockpro);

    const handleUnit = (e) => {
        let temp = [...val];
        if(e.target.value == "")
            temp[1].u = 0;
        else
            temp[1].u = e.target.value;
        setVal(temp);
        console.log(val[0].u)
    } 
    const handleValue = (e) => {
        let temp = [...val];
        if(e.target.value == "")
            temp[1].v = 0
        else
            temp[1].v = e.target.value;
        setVal(temp);
        console.log(val[0].v)
    } 

    return(
        <>
            <h6>Unit</h6>
            <input type = "number" onChange = {e => handleUnit(e)}></input>
            <br />
            <h6>Values</h6>
            <input type = "number" onChange = {e => handleValue(e)}></input>
            <br />
        </>
    );
}

export default Values2;