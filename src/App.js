import React from 'react';
import {Stockstore} from './Stockcontext';
import Values1 from './Values1';
import Values2 from './Values2';
import Calculator from './Calculator';

function App() {
  return (
    <>
    <h1>Indian Stock Average Calculator</h1>
    <Stockstore>
      <div style = {{"display":"flex", "justifyContent":"space-around"}}>
        <div>
          <Values1 />
        </div>
        <div>
          <Values2 />
        </div>
      </div>
      <br />
      <Calculator />
    </Stockstore>
    </>
  );
}

export default App;
