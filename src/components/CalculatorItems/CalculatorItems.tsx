import React from 'react';
import CalculatorItem from './CalculatorItem';

interface Props {
  numbers: number[];
}

const CalculatorItems: React.FC<Props> = ({numbers}) => {
  return (
    <div className="row">
      {numbers.map((number) => (
        <CalculatorItem number={number} key={number}/>
      ))}
    </div>
  );
};

export default CalculatorItems;