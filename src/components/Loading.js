import React from 'react';
import './Loading.css'; // optional external CSS

const Loading = () => {
  return (
    <div className="loading-wrapper">
      <div className="loading-spinner" />
      <p className="loading-text">Loading, please wait...</p>
    </div>
  );
};

export default Loading;
