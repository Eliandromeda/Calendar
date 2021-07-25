import Calendar from "../Calendar";
import Header from '../HeaderCalendar/index'
import moment from "moment";
import DayMonth  from "../DayMonth";
import styles from  './Month.module.css';

const CalendarMonth = (props) => {
  const daysFromAWeek = moment.weekdaysShort();

  const daysBuild = () => {
    const componentsDays = [];
    const  days = moment().daysInMonth();

    for(let i=1; i <= days; i++) {
      let indexFirstDay = null;
      if(i === 1) {
        indexFirstDay = calculateDaysOffForFirst();
      }
      componentsDays.push(<DayMonth key={i} day={i} firstDay={indexFirstDay} />)
    }

    return componentsDays;
  }

  const calculateDaysOffForFirst =() => {
    let firstDayMonthIndex = 1;
    const firstDayOfMonth = moment().startOf('month').format('ddd');
    daysFromAWeek.forEach((value, index) => {
      if(firstDayOfMonth === value) {
        firstDayMonthIndex =  index + 1;
      }
    });
    return firstDayMonthIndex;
  }

  return (
    <Calendar>
      <Header week={daysFromAWeek} currentMonth={moment().format("MMMM")} />
      <div className={styles.MonthContainer}>
        {daysBuild()}
      </div>
    </Calendar>
  );
};

export default CalendarMonth;
