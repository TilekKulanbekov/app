import React from "react";
import s from "../scores/Scores.module.scss";

const Scores = () => {
  return (
    <div className={s.root}>
      <div className={s.table}>
        <p className={s.name}>Tilek</p>
        <p className={s.score}>1000</p>
      </div>
    </div>
  );
};

export default Scores;
