import { useState } from "react";
import { TimePicker } from "antd";
import moment from "moment";
import ColorPicker from "../ColorPicker/ColorPicker";
import "antd/dist/antd.css";
import styles from './ReminderForm.module.scss';

const ReminderForm = (props) => {
  const [reminder, setReminder] = useState(props.reminder);

  const color = '#000000';

  const format = "HH:mm";
  const time = reminder.time
    ? moment(reminder.time, format)
    : moment("00:00", format);

  const addReminder = (e) => {
    if (reminder.description.length) {
      props.onSubmit(e, reminder);
    }
  };

  const changeDescription = ({ target }) => {
    setReminder((prevState) => {
      return {
        ...prevState,
        description: target.value,
      };
    });
  };

  const changeColor = (color) => {
    setReminder((prevState) => {
      return {
        ...prevState,
        color: color.color,
      };
    });
  };

  const changeTime = (e, timeString) => {
    setReminder((prevState) => {
      return {
        ...prevState,
        day: props.day,
        time: timeString,
      };
    });
  };

  return (
    <form onSubmit={addReminder} className={styles['Form']}>
      <textarea
        placeholder="Reminder"
        maxLength="30"
        value={reminder.description}
        onChange={changeDescription}
      ></textarea>
      <TimePicker size="small" defaultValue={time} onChange={changeTime} />
      <label>Color</label>
      <ColorPicker color={reminder.color || color } onChangeColor={changeColor} style={styles['Form__Color']} />
      <button>Submit</button>
      <button onClick={props.onCancelSubmit}>Cancel</button>
    </form>
  );
};

export default ReminderForm;
