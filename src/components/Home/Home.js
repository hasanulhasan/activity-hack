import React, { useState } from 'react';
import Activity from '../Activity/Activity';
import Header from '../Header/Header';
import Question from '../Question/Question';
import './Home.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const notify = () => toast("Congratulations!! You have completed your activity!", { position: 'top-center' });
  const [countTime, setCountTime] = useState([]);
  const [breakTime, setBreakTime] = useState("0");

  console.log(countTime)
  const handalBreakTime5 = (e) => {
    const getBreak = countTime.innerText = 5;

    localStorage.setItem("break", JSON.stringify(getBreak))

    setBreakTime(getBreak)
  }
  const handalBreakTime10 = (e) => {
    const getBreak = countTime.innerText = 10;

    localStorage.setItem("break", JSON.stringify(getBreak))

    setBreakTime(getBreak)
  }
  const handalBreakTime15 = (e) => {
    const getBreak = countTime.innerText = 15;

    localStorage.setItem("break", JSON.stringify(getBreak))

    setBreakTime(getBreak)
  }
  const handalBreakTime20 = (e) => {
    const getBreak = countTime.innerText = 20;

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
          <h3>Age: 25</h3>
        </div>
        <h2 className='margin-top'>Break in Activity</h2>
        <div className="breaks">
          <ol>
            <li onClick={handalBreakTime5}><span>5</span>min</li>
            <li onClick={handalBreakTime10}><span>10</span>min</li>
            <li onClick={handalBreakTime15}><span>15</span>min</li>
            <li onClick={handalBreakTime20}><span>20</span>min</li>
          </ol>
        </div>
        <h2 className='margin-top'>Details of Activity</h2>
        <div className='activity-details'>

          <h3>Activity time: {
            countTime.reduce((prev, curr) => parseInt(prev) + parseInt(curr.time), 0)
          }minutes</h3>
          <h3>Break time: {breakTime} minutes</h3>
        </div>
        <div>

          <button className='activity-btn' onClick={notify}>Activity completed</button><ToastContainer></ToastContainer>
        </div>
      </div>
    </div>
  );
};

export default Home;