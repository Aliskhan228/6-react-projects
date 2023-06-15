import React from "react";

function button({ onClick, children }) {
  return (
    <button className="increase-button button" onClick={onClick}>
      {children}
    </button>
  );
}

export default button;
