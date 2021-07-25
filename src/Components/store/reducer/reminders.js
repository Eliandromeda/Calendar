import { createStore } from "redux";
import * as actions from '../events/eventsName';
import uniqueId from "../../../../node_modules/uuid/dist/v4";

const initState = {
  id: null,
  description: "",
  time: null,
  color: '#000000',
  date: '',
  day: '',
};

const AddNewReminder = (prevState = { reminder: initState }, action) => {
  const reminder = {
    id: uniqueId(),
    description: action.reminder.description,
    color: action.reminder.color,
    time: action.reminder.time,
  }
  return {
    ...prevState,
    [action.reminder.day] : prevState[action.reminder.day] ?
    prevState[action.reminder.day].concat(reminder) : [reminder]
  }
};

const updateReminder = ( prevState = {reminder: initState}, action) => {
  const updateReminders = [];
  [...prevState[action.reminder.day]].forEach(reminder => {
    if(action.reminder.id === reminder.id) {
      reminder = {
        id :reminder.id,
        description: action.reminder.description,
        color: action.reminder.color,
        time: action.reminder.time,
        day: action.reminder.day,
      }
    }
    updateReminders.push(reminder);
  });

  return {
    ...prevState,
    [action.reminder.day] : updateReminders
  };
}

const deleteReminder = ( prevState = {reminder: initState}, action) => {
  return {
    ...prevState,
    [action.reminder.day]: [...prevState[action.reminder.day]].filter(reminder => {
      return reminder.id !== action.reminder.id;
    })
  }
}

const reducer = (prevState = { reminder: initState }, action) => {
  switch(action.type) {
    case actions.ADD_REMINDER:
      return AddNewReminder(prevState, action);
    case actions.UPDATE_REMINDER:
      return updateReminder(prevState, action);
    case actions.DELETE_REMINDER:
      return deleteReminder(prevState, action);
    default:
      return prevState;
  }
};

const store = createStore(reducer);

export default store;
