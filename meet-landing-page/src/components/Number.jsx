import React from 'react';

function Number({ children }) {
  return (
    <div className="number">
      <div></div>
      <div>{children}</div>
    </div>
  );
}

export default Number;
