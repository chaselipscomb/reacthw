import React from 'react';
import "../styles/Wrapper.css";
// Wrapper component
function Wrapper({ children }) {
  return (
      <div className="wrapper">
        { children }
      </div>
  );
}

export default Wrapper;
