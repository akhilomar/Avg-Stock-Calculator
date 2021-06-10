import React, {useState, useContext, useEffect} from 'react';
import { Stockpro } from './Stockcontext';
import Values1 from './Values1';

const Tradebox = () => {

    const [val, setVal] = useContext(Stockpro)
    const [boxlen, setLen] = useState(2);

    const handlePlus = () => {
        let temp = val;
        temp.push({
            u: 0,
            v: 0
        })
        setVal(temp);
        setLen(prev => prev + 1)
    }
    const handleMinus = () => {
        let temp = val;
        temp.pop()
        setVal(temp);
        setLen(prev => prev - 1)
    }

    const handleMap = () => {
        return val.map((v,i) => (
            <div>
                <Values1 index = {i}/>
            </div>
        ))   
    }

    useEffect(() => {
        handleMap()
    }, [boxlen])

    return(
        <>
        <div style = {{"display" : "flex", "justifyContent": "space-around"}}>
            {
                handleMap()  
            }
        </div>
        <br/>
        <br/>
        <div style = {{"display" : "flex", "justifyContent": "center"}}>
            <button onClick = {handlePlus}>+</button>
            <button onClick = {handleMinus}>-</button>
        </div>
        </>
    );
}

export default Tradebox;