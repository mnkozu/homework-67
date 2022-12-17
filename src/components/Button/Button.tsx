import React from 'react';

interface Props {
  value: string;
  onClick: React.MouseEventHandler;
}

const Button: React.FC<Props> = ({value, onClick}) => {
  return (
    <div className="row">
      <div className="col-6 btn btn-outline-warning text-dark" onClick={onClick}>{value}</div>
    </div>
  );
};

export default Button;