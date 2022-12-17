import React from 'react';

interface Props {
  value: string;
  onClick: React.MouseEventHandler
}

const CalculatorItem: React.FC<Props> = ({value, onClick}) => {
  return (
    <div className="col-4 btn btn-outline-secondary" onClick={onClick}>{value}</div>
  );
};

export default CalculatorItem;