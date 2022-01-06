import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      obj: {
        initial: 0,
      },
    };
  }

  getData = (e) => {
    const buttonName = e.target.textContent;
    const { obj } = this.state;
    this.setState({
      obj: calculate(obj, buttonName),
    });
  };

  render() {
    const { obj } = this.state;
    return (
      <div className="container">
        <div className="result">
          {obj.initial}
          {obj.next}
          {obj.operation}
          {obj.total}
        </div>
        <div className="numerics">
          <div className="row">
            <button type="button" onClick={this.getData}>
              AC
            </button>
            <button type="button" onClick={this.getData}>
              +/-
            </button>
            <button type="button" onClick={this.getData}>
              %
            </button>
            <button className="orange" type="button" onClick={this.getData}>
              ÷
            </button>
          </div>
          <div className="row">
            <button type="button" onClick={this.getData}>
              7
            </button>
            <button type="button" onClick={this.getData}>
              8
            </button>
            <button type="button" onClick={this.getData}>
              9
            </button>
            <button className="orange" type="button" onClick={this.getData}>
              x
            </button>
          </div>
          <div className="row">
            <button type="button" onClick={this.getData}>
              4
            </button>
            <button type="button" onClick={this.getData}>
              5
            </button>
            <button type="button" onClick={this.getData}>
              6
            </button>
            <button className="orange" type="button" onClick={this.getData}>
              -
            </button>
          </div>
          <div className="row">
            <button type="button" onClick={this.getData}>
              1
            </button>
            <button type="button" onClick={this.getData}>
              2
            </button>
            <button type="button" onClick={this.getData}>
              3
            </button>
            <button className="orange" type="button" onClick={this.getData}>
              +
            </button>
          </div>
          <div className="row">
            <button className="span-col" type="button" onClick={this.getData}>
              0
            </button>
            <button type="button" onClick={this.getData}>
              .
            </button>
            <button className="orange" type="button" onClick={this.getData}>
              =
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
