import React, { useState, useEffect } from 'react';
import styles from "../styles/CountdownTimer.module.css";


function CountdownTimer() {
  const calculateTimeLeft = () => {
    const defaultDays = 60;
    const placementDate = new Date();
    placementDate.setDate(placementDate.getDate() + defaultDays);

    const difference = placementDate.getTime() - new Date().getTime();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) return;
    timerComponents.push(
      <span key={interval}>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <section className={styles.countdownTimer}>
      <h2 className={styles.title}>Days until campus placements</h2>
      <div className={styles.timerDisplay}>
        {timerComponents.length ? (
          timerComponents
        ) : (
          <span>Placements are here! Good luck!</span>
        )}
      </div>
    </section>
  );
}

export default CountdownTimer;
