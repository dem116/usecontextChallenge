import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ThemeContext } from '../themes/ThemeContext';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import MyJob from '../pages/MyJob';

const RoutesApp = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Router>
      <div className={`App ${theme}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/myjob" element={<MyJob />} />
        </Routes>
      </div>
    </Router>
  );
};

export default RoutesApp;