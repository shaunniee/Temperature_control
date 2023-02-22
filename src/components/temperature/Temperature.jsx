import React, { useState } from "react";
import styles from "./temperature.module.scss";

function Temperature() {
  const [temperature, setTemperauture] = useState(10);

  const emotion=[
    {temp:"hot",emoji:'🥵',value:20},
    {temp:"moderate",emoji:'😄'},
    {temp:'cold',emoji:'🥶',value:5}
  ]
  let max_temperature = 30;
  let min_temperature = -30;
  const redVal =
    (255 / (max_temperature - min_temperature)) *
    (temperature - min_temperature);
  const blueVal =
    (255 / (max_temperature - min_temperature)) *
    (max_temperature - temperature);
  const decreamentTemp = () => {
    if (temperature === -30) {
      return;
    } else {
      setTemperauture(temperature - 1);
    }
  };
  const increamentTemp = () => {
    if (temperature === 30) {
      return;
    } else {
      setTemperauture(temperature + 1);
    }
  };
  return (
    <div className={styles.container} >
        <span className={styles.emoji} role="img" aria-label="sheep">{temperature>20?emotion[0].emoji:temperature<5?
        emotion[2].emoji:emotion[1].emoji}</span>

      <div className={styles.temperature} style={{ backgroundColor : `rgb(${redVal}, 0, ${blueVal})` }}>{temperature} &deg; C</div>
      <div className={styles.button}>
        <button onClick={decreamentTemp} className={styles.button__1}>
          -
        </button>
        <button onClick={increamentTemp} className={styles.button__2}>
          +
        </button>
      </div>
    </div>
  );
}

export default Temperature;
