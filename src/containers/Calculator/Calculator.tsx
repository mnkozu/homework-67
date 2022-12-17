import React from 'react';
import CalculatorItems from '../../components/CalculatorItems/CalculatorItems';
import Buttons from '../../components/Buttons/Buttons';

const NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const OPERATORS = ['+', '-', '*', '/', '=', 'c'];

const Calculator = () => {

  return (
    <>
      <div className="w-100 text-end fs-3 text mt-5">0</div>
      <div className="row mt-2">
        <div className="col-9">
          <CalculatorItems numbers={NUMBERS}/>
        </div>
        <div className="col-3">
          <Buttons operators={OPERATORS} />
        </div>
      </div>
    </>
  );
};

export default Calculator;