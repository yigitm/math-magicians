import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [obj, setObj] = useState({
    next: null,
    operation: null,
    total: null,
  });

  const [initial, setInitial] = useState(0);

  const getData = (e) => {
    setObj(calculate(obj, e.target.textContent));
    setInitial('');
  };

  const allClear = () => {
    setInitial('0');
  };

  const buttons = [
    '+/-',
    '%',
    '÷',
    '7',
    '8',
    '9',
    'x',
    '4',
    '5',
    '6',
    '-',
    '1',
    '2',
    '3',
    '+',
    '0',
    '.',
    '=',
  ];

  const showAC = (
    <button
      type="button"
      key="ac"
      onClick={(e) => {
        getData(e);
        allClear(e);
      }}
    >
      AC
    </button>
  );

  const showRest = buttons.map((btn) => {
    const allBtns = (
      <button type="button" key={btn} onClick={(e) => getData(e)}>
        {btn}
      </button>
    );

    return allBtns;
  });

  return (
    <div className="container">
      <div className="result">
        {initial}
        {obj.next}
        {obj.operation}
        {obj.total}
      </div>
      <div className="buttons">
        {showAC}
        {showRest}
      </div>
    </div>
  );
};

export default Calculator;
