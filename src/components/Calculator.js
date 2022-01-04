import React from 'react';

const UI = function display() {
  return (
    <div className="container">
      <div className="result">Output</div>
      <div className="numerics">
        <div className="row">
          <button type="button">AC</button>
          <button type="button">+/-</button>
          <button type="button">%</button>
          <button type="button">+</button>
        </div>
        <div className="row">
          <button type="button">7</button>
          <button type="button">8</button>
          <button type="button">9</button>
          <button type="button">X</button>
        </div>
        <div className="row">
          <button type="button">4</button>
          <button type="button">5</button>
          <button type="button">6</button>
          <button type="button">-</button>
        </div>
        <div className="row">
          <button type="button">1</button>
          <button type="button">2</button>
          <button type="button">3</button>
          <button type="button">+</button>
        </div>
        <div className="row">
          <button type="button">0</button>
          <button type="button">.</button>
          <button type="button">=</button>
        </div>
      </div>
    </div>
  );
};

export default UI;
