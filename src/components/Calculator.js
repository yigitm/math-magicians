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

  function allClear() {
    setInitial('0');
  }

  return (
    <div className="container">
      <div className="result">
        {initial}
        {obj.next}
        {obj.operation}
        {obj.total}
      </div>
      <div className="buttons">
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
        <button type="button" onClick={(e) => getData(e)}>
          9
        </button>
        <button className="orange" type="button" onClick={(e) => getData(e)}>
          x
        </button>

        <button type="button" onClick={(e) => getData(e)}>
          4
        </button>
        <button type="button" onClick={(e) => getData(e)}>
          5
        </button>
        <button type="button" onClick={(e) => getData(e)}>
          6
        </button>
        <button className="orange" type="button" onClick={(e) => getData(e)}>
          -
        </button>

        <button type="button" onClick={(e) => getData(e)}>
          1
        </button>
        <button type="button" onClick={(e) => getData(e)}>
          2
        </button>
        <button type="button" onClick={(e) => getData(e)}>
          3
        </button>
        <button className="orange" type="button" onClick={(e) => getData(e)}>
          +
        </button>

        <button className="span-col" type="button" onClick={(e) => getData(e)}>
          0
        </button>
        <button type="button" onClick={(e) => getData(e)}>
          .
        </button>
        <button className="orange" type="button" onClick={(e) => getData(e)}>
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator;
