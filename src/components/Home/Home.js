import React, { useState } from 'react';
import Activity from '../Activity/Activity';
import Header from '../Header/Header';
import './Home.css'

const Home = () => {
  const [countTime, setCountTime] = useState([]);
  console.log(countTime)
  return (
    <div className='HomeItems'>
      <div className="activity-container">
        <Header></Header>
        <Activity countTime={countTime} setCountTime={setCountTime}></Activity>
      </div>
      <div className="info-container">
        <h1>Informations</h1>
        <div className='info'>
          <h3>Name: Md Hasanul Karim</h3>
          <h3>Location: Chittagong</h3>
        </div>
        <h2 className='margin-top'>Break in Activity</h2>
        <div className="breaks">
          <ol>
            <li>5min</li>
            <li>10min</li>
            <li>15min</li>
            <li>20min</li>
          </ol>
        </div>
        <h2 className='margin-top'>Details of Activity</h2>
        <div className='activity-details'>

          <h3>Activity time: minutes</h3>
          <h3>Break time: 0 minutes</h3>
        </div>
        <button className='activity-btn'>Activity completed</button>
      </div>
    </div>
  );
};

export default Home;