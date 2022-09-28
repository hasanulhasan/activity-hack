import React from 'react';
import Activity from '../Activity/Activity';
import Header from '../Header/Header';
import './Home.css'

const Home = () => {
  return (
    <div className='HomeItems'>
      <div className="activity-container">
        <Header></Header>
        <Activity></Activity>

      </div>
      <div className="info-container">
        <h1>This is info</h1>
      </div>
    </div>
  );
};

export default Home;