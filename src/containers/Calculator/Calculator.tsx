import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../app/store';
import Button from '../../components/Button/Button';
import {division, getNumber, getResult, minus, multiplication, plus} from './calculatorSlice';
import CalculatorItem from '../../components/CalculatorItem/CalculatorItem';

const NUMBERS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

const Calculator = () => {
  const screen = useSelector((state: RootState) => state.calculator.screen);
  const dispatch = useDispatch();

  let screenWin;
  if (screen === '') {
    screenWin = <div>0</div>
  } else {
    screenWin = <div>{screen}</div>
  }

  return (
    <>
      <div className="w-100 text-end fs-3 text mt-5">{screenWin}</div>
      <div className="row mt-2">
        <div className="col-9">
          {NUMBERS.map((number) => (
            <CalculatorItem
              value={number}
              key={number}
              onClick={() => getNumber(number)}/>
          ))}
        </div>
        <div className="col-3">
          <Button value='+' onClick={() => dispatch(plus())}/>
          <Button value='-' onClick={() => dispatch(minus())}/>
          <Button value='*' onClick={() => dispatch(multiplication())}/>
          <Button value='/' onClick={() => dispatch(division())}/>
          <Button value='=' onClick={() => dispatch(getResult())}/>
          <Button value='c' onClick={() => dispatch(getResult())}/>
        </div>
      </div>
    </>
  );
};

export default Calculator;