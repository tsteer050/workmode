import React from 'react';

const TopBar = ({ title }) => {
  let handleClick = () => {
    let about = document.getElementById("about-dropdown");
    about.classList.toggle("visible");
   };
  return (
    

    <div className="top-bar">
      <div className="top-bar-left-section">
        <h3>{title}</h3>
        <div className="top-bar-left-section-lower">
          <i className="far fa-star"></i>
          <h4 className="top-bar-divider">|</h4>
          <h5>active</h5>
        </div>
      </div>
      <div className="top-bar-right">
        <span className="top-bar-about-button" onClick={handleClick}>About</span>
      </div>
    </div>
  )
};

export default TopBar;