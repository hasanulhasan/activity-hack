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
        activities.map(activity => <SingleActivity activity={activity}></SingleActivity>)
      }
    </div>
  );
};

const SingleActivity = (props) => {
  const { name, time, img } = props.activity
  const timeAdding = () => {
    console.log('clicked')
  }
  return (
    <div className='activityItem'>
      <img src={img}></img>
      <h1>Name : {name}</h1>
      <h1>Time taken : {time}</h1>
      <button onClick={timeAdding}>Add to List</button>
    </div>
  )
}

export default Activity;