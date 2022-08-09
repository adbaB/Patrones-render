import React from 'react';
import { BsCheckLg,BsXLg } from "react-icons/bs";
import './TodoIcon.css';

const iconTypes = {
  "check": color => (
    <BsCheckLg className="Icon-svg Icon-svg--check" fill={color} />
  ),
  "delete": color => (
    <BsXLg className="Icon-svg Icon-svg--delete" fill={color} />
  ),
};

function TodoIcon({ type, color = 'gray', onClick }) {
  return (
    <span
      className={`Icon-container Icon-container--${type}`}
      onClick={onClick}
    >
      {iconTypes[type](color)}
    </span>
  );
}

export { TodoIcon };
