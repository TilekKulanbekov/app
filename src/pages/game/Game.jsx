import React from "react";
import s from "../game/Game.module.scss";

const Game = () => {
  return (
    <div className={s.root}>
      <h1 className={s.title}>Svoya Igra</h1>
      <div className={s.game}>
        <div className={s.categories}>
          <p className={s.category}>Lorem, ipsum.</p>
        </div>
        <div className={s.questions}>
          <button className={s.qButton}>100</button>
          <button className={s.qButton}>200</button>
          <button className={s.qButton}>300</button>
          <button className={s.qButton}>400</button>
          <button className={s.qButton}>500</button>
        </div>
      </div>
      <div className={s.container}>
        <div className={s.box}>
          <p className={s.trueOrFalse}>Не Верно!</p>
          <p className={s.score}>100</p>
        </div>
        <div className={s.finish}>
          <p className={s.counter}>1000</p>
          <button className={s.button}>Закончить игру</button>
        </div>
      </div>
    </div>
  );
};

export default Game;
