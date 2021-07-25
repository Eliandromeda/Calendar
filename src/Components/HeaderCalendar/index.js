import styles from "../HeaderCalendar/Header.module.css";

const HeaderCalendar = (props) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.header__month}>{props.currentMonth}</h1>
      <div className={styles.header__week}>
        {props.week.map((day, i) => {
          return (
            <strong className={styles.header__week__item} key={i}>
              {day}
            </strong>
          );
        })}
      </div>
    </header>
  );
};

export default HeaderCalendar;
