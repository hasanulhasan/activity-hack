import React, { useState } from 'react';
import Activity from '../Activity/Activity';
import Header from '../Header/Header';
import Question from '../Question/Question';
import './Home.css'

const Home = () => {
  const [countTime, setCountTime] = useState([]);
  const [breakTime, setBreakTime] = useState("0");
  console.log(countTime)
  const handalBreakTime = (e) => {
    const getBreak = e.target.childNodes[0].innerText;

    localStorage.setItem("break", JSON.stringify(getBreak))

    setBreakTime(getBreak)
  }
  return (
    <div className='HomeItems'>
      <div className="activity-container">
        <Header></Header>
        <Activity countTime={countTime} setCountTime={setCountTime} breakTime={breakTime} setBreakTime={setBreakTime}></Activity>
        <Question></Question>
      </div>
      <div className="info-container">
        <h1>Information</h1>
        <div className='info'>
          <h3>Name: Md Hasanul Karim</h3>
          <h3>Location: Chittagong</h3>
        </div>
        <h2 className='margin-top'>Break in Activity</h2>
        <div className="breaks">
          <ol>
            <li onClick={handalBreakTime}><span>5</span>min</li>
            <li onClick={handalBreakTime}><span>10</span>min</li>
            <li onClick={handalBreakTime}><span>15</span>min</li>
            <li onClick={handalBreakTime}><span>20</span>min</li>
          </ol>
        </div>
        <h2 className='margin-top'>Details of Activity</h2>
        <div className='activity-details'>

          <h3>Activity time: {
            countTime.reduce((prev, curr) => parseInt(prev) + parseInt(curr.time), 0)
          }minutes</h3>
          <h3>Break time: {breakTime} minutes</h3>
        </div>
        <button className='activity-btn'>Activity completed</button>
      </div>
    </div>
  );
};

export default Home;