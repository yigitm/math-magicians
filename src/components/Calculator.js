import React from 'react';
import calculate from '../logic/calculate.js';
import operate from '../logic/operate.js';

const Calculator = (
  <div className="container">
    <div className="result">0</div>
    <div className="numerics">
      <div className="row">
        <button type="button">AC</button>
        <button type="button">+/-</button>
        <button type="button">%</button>
        <button className="orange" type="button">
          /
        </button>
      </div>
      <div className="row">
        <button type="button">7</button>
        <button type="button">8</button>
        <button type="button">9</button>
        <button className="orange" type="button">
          *
        </button>
      </div>
      <div className="row">
        <button type="button">4</button>
        <button type="button">5</button>
        <button type="button">6</button>
        <button className="orange" type="button">
          -
        </button>
      </div>
      <div className="row">
        <button type="button">1</button>
        <button type="button">2</button>
        <button type="button">3</button>
        <button className="orange" type="button">
          +
        </button>
      </div>
      <div className="row">
        <button className="span-col" type="button">
          0
        </button>
        <button type="button">.</button>
        <button className="orange" type="button">
          =
        </button>
      </div>
    </div>
  </div>
);

export default Calculator;
