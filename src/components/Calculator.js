import React, { useState } from 'react';
import calculate from '../logic/calculate';

function Calculator() {
  const [obj, setObj] = useState({
    next: null,
    operation: null,
    total: null,
  });

  const [initial, setInitial] = useState(0);

  function getData(e) {
    setObj(calculate(obj, e.target.textContent));
    setInitial('');
  }

  function allClear(e) {
    setInitial('0');
    e.target.padding = 0;
  }

  return (
    <div className="container">
      <div className="result">
        {initial}
        {obj.next}
        {obj.operation}
        {obj.total}
      </div>
      <div className="numerics">
        <div className="row">
          <button
            type="button"
            onClick={(e) => {
              getData(e);
              allClear(e);
            }}
          >
            AC
          </button>
          <button type="button" onClick={(e) => getData(e)}>
            +/-
          </button>
          <button type="button" onClick={(e) => getData(e)}>
            %
          </button>
          <button className="orange" type="button" onClick={(e) => getData(e)}>
            ÷
          </button>
        </div>
        <div className="row">
          <button
            type="button"
            onClick={(e) => {
              getData(e);
            }}
          >
            7
          </button>
          <button type="button" onClick={(e) => getData(e)}>
            8
          </button>
          <button type="button" onClick={getData}>
            9
          </button>
          <button className="orange" type="button" onClick={getData}>
            x
          </button>
        </div>
        <div className="row">
          <button type="button" onClick={getData}>
            4
          </button>
          <button type="button" onClick={getData}>
            5
          </button>
          <button type="button" onClick={getData}>
            6
          </button>
          <button className="orange" type="button" onClick={getData}>
            -
          </button>
        </div>
        <div className="row">
          <button type="button" onClick={getData}>
            1
          </button>
          <button type="button" onClick={getData}>
            2
          </button>
          <button type="button" onClick={getData}>
            3
          </button>
          <button className="orange" type="button" onClick={getData}>
            +
          </button>
        </div>
        <div className="row">
          <button className="span-col" type="button" onClick={getData}>
            0
          </button>
          <button type="button" onClick={getData}>
            .
          </button>
          <button className="orange" type="button" onClick={(e) => getData(e)}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
