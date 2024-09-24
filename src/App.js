import React from 'react';
import ImageGallery from './ImageGallery'; // Assuming correct path
import Login from './Login'; // Assuming correct path
import './App.css'; // Assuming you have a general stylesheet

const App = () => {
  return (
    <div className="app-container">
      <div className="login-section">
        <Login />
      </div>
      <div className="gallery-section">
        <ImageGallery />
      </div>
    </div>
  );
};

export default App;
