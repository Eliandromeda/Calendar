import * as eventsNames from './eventsName';

const AddReminderEvent = (reminder) => {
  return {
    type: eventsNames.ADD_REMINDER,
    reminder: reminder
  }
}

export const addReminder = reminder => {
  return dispatch => {
    dispatch(AddReminderEvent(reminder));
  };
};
