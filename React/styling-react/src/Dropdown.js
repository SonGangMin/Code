import React, { useState } from "react";
import "./Dropdown.scss";

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={handleToggle}>
        Toggle
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          <li className="dropdown-item">Item 1</li>
          <li className="dropdown-item">Item 2</li>
          <li className="dropdown-item">Item 3</li>
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
