import React, {useContext, useState} from 'react';
import {Stockpro} from './Stockcontext';

const Calculator = () => {

    const [val, setVal] = useContext(Stockpro)

    const [show, setShow] = useState(false);

    const [totalunit, setTotalunit] = useState(0);
    const [price, setPrice] = useState(0);
    const [total, setTotal] = useState(0);


    const handleCalculate = () => {

        setShow(true)

        let res1 = 0;
        let res2 = 0;
        let res = 0;

        for(let i = 0; i < val.length; i++){
            res1 += parseInt(val[i].u * val[i].v)
            res2 += parseInt(val[i].u)
        }

      
       

        if(res2 !== 0)
            res = parseInt(res1)/parseInt(res2);
        
        

        setTotalunit(res2);
        setPrice(res.toFixed(2));
        setTotal(res1);
    }


    return(
        <>
            <div style = {{"display": "flex", "justifyContent": "space-around"}}>
                <button onClick = {handleCalculate}>Calculate</button>
                <button onClick = {() => setShow(false)}>Reset</button>
            </div>
            <br/>
            <br/>
            {show ? 
            
            <div style = {{"display":"flex", "justifyContent": "space-around"}}>
                <h2>Total Units: {totalunit}</h2>
                <h2>Average Price: {price}</h2>
                <h2>Total Amount : {total}</h2>
            </div> : 
            ""}

        </>
    );
}


export default Calculator;