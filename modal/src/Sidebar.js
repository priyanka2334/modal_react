
import React, { useState, useEffect } from 'react';
import './App.css';

function Sidebar({ onFilterChange }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="sidebar">
      <h2>Digital Watch</h2>
      <div className="clock">{time.toLocaleTimeString()}</div>
      <button className="sidebar-button" onClick={() => onFilterChange('all')}>All Tasks</button>
      <button className="sidebar-button" onClick={() => onFilterChange('upcoming')}>Upcoming Tasks</button>
      <button className="sidebar-button" onClick={() => onFilterChange('in-progress')}>In Progress</button>
      <button className="sidebar-button" onClick={() => onFilterChange('completed')}>Completed Tasks</button>
    </div>
  );
}

export default Sidebar;
























