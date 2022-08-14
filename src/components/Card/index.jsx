import React, { useState } from "react";
import s from "../../pages/game/Game.module.scss";

const Card = ({ value, question }) => {
  const [display, setDisplay] = useState(false);
  const timer = () =>
    setTimeout(() => {
      setDisplay(false);
    }, 10000);

  return (
    <>
      <button
        onClick={() => {
          setDisplay(true);
          timer();
        }}
        className={s.qButton}
      >
        {value}
      </button>
      <div
        className={s.card}
        style={{
          display: `${display ? "block" : "none"}`,
        }}
      >
        <div className={s.cat}>
          <p className={s.cardTitle}>Category loha</p>
          <span className={s.point}>100</span>
        </div>
        <div className={s.line}></div>
        <p className={s.question}>{question.question}?</p>
        <div className={s.line}></div>
        <ul className={s.answers}>
          <li className={s.answer}>a)</li>
          <li className={s.answer}>b)</li>
          <li className={s.answer}>c)</li>
          <li className={s.answer}>d)</li>
        </ul>
        <input type="text" placeholder="Ответ" className={s.input} />
        <div className={s.bottom}>
          <p className={s.timer}>Осалось 10 секунд</p>
          <button className={s.smButton}>Ответить</button>
        </div>
      </div>
    </>
  );
};

export default Card;
