import React, { useEffect, useState } from 'react';
import './Activity.css'

const Activity = ({ countTime, setCountTime, breakTime, setBreakTime }) => {
  const [activities, setActivities] = useState([])
  useEffect(() => {
    fetch('activity.json')
      .then(res => res.json())
      .then(data => setActivities(data))
    const old = JSON.parse(localStorage.getItem("break"));
    if (old) {
      setBreakTime(old);
      return;
    }
    else {
      setBreakTime(breakTime);
      return;
    }

  }, [])

  return (
    <div className='activity'>
      {
        activities.map(activity => <SingleActivity activity={activity} key={activity.id} countTime={countTime} setCountTime={setCountTime}></SingleActivity>)
      }
    </div>
  );
};

const SingleActivity = ({ activity, countTime, setCountTime }) => {
  const { name, time, img } = activity;
  const handalCart = () => {
    const info = {
      name, time, img
    }
    if (countTime) {
      setCountTime([...countTime, info]);
      return;
    }
    else {
      setCountTime([info])
    }

  }

  return (
    <div className='activityItem'>
      <img alt='..' src={img}></img>
      <h2>Name : {name}</h2>
      <h2>Time : {time} minutes</h2>
      <button onClick={handalCart}>Add to List</button>
    </div>
  )
}

export default Activity;