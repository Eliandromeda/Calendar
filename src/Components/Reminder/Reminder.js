import React from "react";
import '../../../public/Images/edit.svg'
import styles from './Reminder.module.scss'
import Weather from '../Weather/weather';

const Reminder = (props) => {
  return (
    <div className={styles['Reminder']} style={{ backgroundColor: props.currentReminder.color }}>
      <Weather city={props.city}/>
      <time>{props.currentReminder.time}</time>
      <label>{props.currentReminder.description}</label>
      <div class={styles['Reminder__modify']}>
        <button onClick={() => props.onEditReminder(props.currentReminder)}>
        <span style={{background: `url('../../../public/Images/edit.svg')`}}></span>
          Edit
        </button>
        <button
          onClick={() => props.onDeleteReminder(props.currentReminder.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Reminder;
