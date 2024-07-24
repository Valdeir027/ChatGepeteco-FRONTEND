import "./ProgressBar.css";
import React from "react";

function ProgressBar() {
  return (
    <div className="loading-container">
      <div className="loading-bubble"></div>
      <div className="loading-bubble"></div>
      <div className="loading-bubble"></div>
    </div>
  );
}

export default ProgressBar;
