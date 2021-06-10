import React, {useState, useContext} from 'react';
import {Stockpro} from './Stockcontext';

const Values1 = (props) => {

    const [val, setVal] = useContext(Stockpro);

    const handleUnit = (e) => {
        let temp = [...val];
        if(e.target.value == "")
            temp[props.index].u = 0;
        else
            temp[props.index].u = e.target.value;
        setVal(temp);
    } 
    const handleValue = (e) => {
        let temp = [...val];
        if(e.target.value == "")
            temp[props.index].v = 0;
        else
            temp[props.index].v = e.target.value;
        setVal(temp);
    } 

    return(
        <>
            <h4>TRADE : {props.index + 1}</h4>
            <h6>Unit</h6>
            <input type = "number" onChange = {e => handleUnit(e)}></input>
            <br />
            <h6>Values</h6>
            <input type = "number" onChange = {e => handleValue(e)}></input>
            <br />
        </>
    );
}

export default Values1;