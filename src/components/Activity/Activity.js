import React, { useEffect, useState } from 'react';
import './Activity.css'
const Activity = () => {

  const [activities, setActivities] = useState([])

  useEffect(() => {
    fetch('activity.json')
      .then(res => res.json())
      .then(data => setActivities(data))
  }, [])

  return (
    <div className='activity'>
      {
        activities.map(activity => <SingleActivity activity={activity} key={activity.id}></SingleActivity>)
      }
    </div>
  );
};

const SingleActivity = (props) => {
  const [countTime, setCountTime] = useState(0);
  const { name, time, img, id } = props.activity;
  const timeAdding = (time) => {
    setCountTime(countTime + time);
    console.log(countTime);
  }
  return (
    <div className='activityItem'>
      <img src={img}></img>
      <h2>Name : {name}</h2>
      <h2>Time : {time} minutes</h2>
      <button onClick={() => timeAdding(time)}>Add to List</button>
    </div>
  )
}

export default Activity;