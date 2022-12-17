import React from 'react';

interface Props {
  number: number;
}

const CalculatorItem: React.FC<Props> = ({number}) => {
  return (
    <div className="col-4 btn btn-outline-secondary">
        {number}
    </div>
  );
};

export default CalculatorItem;