// Component.jsx - Test React
import React, { useState } from 'react';

const Button = ({ label, onClick }) => {
  return (
    <button className="btn-primary" onClick={onClick}>
      {label}
    </button>
  );
};

export default function App() {
  const [active, setActive] = useState(false);

  return (
    <div id="main-container">
      <h1>Hello JSX</h1>
      <p style={{ color: 'red' }}>To jest test motywu</p>
      <Button label="Click Me" onClick={() => setActive(!active)} />
    </div>
  );
}