import React from 'react';

interface Props {
  operators: string[];
}

const Buttons: React.FC<Props> = ({operators}) => {
  return (
    <div className="row">
      {operators.map((operator) => (
        <div className="col-6 btn btn-outline-warning text-dark" key={operator}>{operator}</div>
      ))}
    </div>
  );
};

export default Buttons;