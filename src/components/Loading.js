import React from "react";
import "./Loading.css"; // All CSS goes here

const LoadingScreen = () => {
  return (
    <div className="loading-wrapper">
      {/* GRADIENT SPINNER */}
      <div className="spinner-box">
        <div className="circle-border">
          <div className="circle-core"></div>
        </div>  
      </div>

      {/* SPINNER ORBITS */}
      <div className="spinner-box">
        <div className="blue-orbit leo"></div>
        <div className="green-orbit leo"></div>
        <div className="red-orbit leo"></div>
        <div className="white-orbit w1 leo"></div>
        <div className="white-orbit w2 leo"></div>
        <div className="white-orbit w3 leo"></div>
      </div>

      {/* GRADIENT CIRCLE PLANES */}
      <div className="spinner-box">
        <div className="leo-border-1">
          <div className="leo-core-1"></div>
        </div> 
        <div className="leo-border-2">
          <div className="leo-core-2"></div>
        </div> 
      </div>

      {/* SPINNING SQUARES */}
      <div className="spinner-box">
        <div className="configure-border-1">  
          <div className="configure-core"></div>
        </div>  
        <div className="configure-border-2">
          <div className="configure-core"></div>
        </div> 
      </div>

      {/* LOADING DOTS */}
      <div className="spinner-box">
        <div className="pulse-container">  
          <div className="pulse-bubble pulse-bubble-1"></div>
          <div className="pulse-bubble pulse-bubble-2"></div>
          <div className="pulse-bubble pulse-bubble-3"></div>
        </div>
      </div>

      {/* SOLAR SYSTEM */}
      <div className="spinner-box">
        <div className="solar-system">
          <div className="earth-orbit orbit">
            <div className="planet earth"></div>
            <div className="venus-orbit orbit">
              <div className="planet venus"></div>
              <div className="mercury-orbit orbit">
                <div className="planet mercury"></div>
                <div className="sun"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* THREE QUARTER SPINNER */}
      <div className="spinner-box">
        <div className="three-quarter-spinner"></div>
      </div>

      {/* LOADING TEXT */}
      <p className="loading-text">loading...</p>
    </div>
  );
};

export default LoadingScreen;
