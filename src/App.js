import React, {useState, useContext} from 'react';
import {Stockstore} from './Stockcontext';
import Values1 from './Values1';
import Values2 from './Values2';
import Calculator from './Calculator';
import {Stockpro} from './Stockcontext';
import Tradebox from './Tradebox';

function App() {



  return (
    <>
    <div style = {{"display":"flex", "justifyContent":"center"}}>
      <h1>Indian Stock Average Calculator</h1>
    </div>
    <br/>
    <Stockstore>
        <div>
          <Tradebox />
        </div>
      <br />
      <Calculator />
    </Stockstore>
    </>
  );
}

export default App;
