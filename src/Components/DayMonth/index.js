import React, { useState } from "react";
import { ReactComponent as Icon } from "../Icons/Reminder.svg";
import styles from "./DayMonth.module.scss";
import ReminderForm from "../Reminder/ReminderForm";
import Reminder from "../Reminder/Reminder";
import { useDispatch, useSelector } from "react-redux";

const DayMonth = (props) => {
  const [showReminderForm, setShowReminder] = useState(false);
  const dispatch = useDispatch();
  const reminder = useSelector((state) => {
    return state.reminder;
  });
  const [reminderState, setReminderState] = useState(reminder);

  const reminders = useSelector((state) => {
    return (
      state[props.day] &&
      state[props.day].sort((a, b) => a.time ? a.time.localeCompare(b.time) : '')
    );
  });

  const activeReminderForm = () => {
    setReminderState(reminder);
    setShowReminder(true);
  };

  const cancelSubmit = () => {
    setShowReminder(false);
  };

  const AddEditReminder = (event, updateReminder) => {
    event.preventDefault();
    const reminder = {
      ...updateReminder,
      date: props.date ? props.date : "",
      day: props.day,
    };
    if (!updateReminder.id) {
      dispatch({ type: "ADD_REMINDER", reminder: reminder });
    } else {
      dispatch({ type: "UPDATE_REMINDER", reminder: reminder });
    }
    setShowReminder(false);
  };

  const handleEditReminder = (editReminder) => {
    setReminderState(editReminder);
    setShowReminder(true);
  };

  const deleteReminder = (idReminder) => {
    if (idReminder) {
      const reminder = {
        id: idReminder,
        day: props.day,
      };
      dispatch({ type: "DELETE_REMINDER", reminder: reminder });
    }
  };

  const classFirstDayMonth = props.firstDay
    ? `${styles["DayMonth"]} ${styles[`firstDay-${props.firstDay}`]}`
    : `${styles["DayMonth"]}`;

  return (
    <div className={classFirstDayMonth}>
      <div className={styles['DayMonth__header']}>
        <label>{props.day}</label>
        <Icon onClick={activeReminderForm} className={styles.DayMonth__icon} />
      </div>
      {showReminderForm ? (
        <ReminderForm
          onSubmit={AddEditReminder}
          onCancelSubmit={cancelSubmit}
          reminder={reminderState}
          day={props.day}
        />
      ) : (
        ""
      )}
      <React.Fragment>
        {reminders &&
          reminders.map((reminder, i) => {
            return (
              <Reminder
                key={i}
                currentReminder={reminder}
                onEditReminder={handleEditReminder}
                onDeleteReminder={deleteReminder}
                city='bogota'
              />
            );
          })}
      </React.Fragment>
    </div>
  );
};

export default DayMonth;
