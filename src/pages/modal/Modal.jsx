import React from "react";
import s from "../modal/Modal.module.scss";

const Modal = () => {
  return (
    <div className={s.root}>
      <p className={s.name}>как вас зовут</p>
      <input className={s.input} type="text" placeholder="Ведите ваше имя" />
      <span className={s.validation}>бла бла блааавыаываыввфы</span>
      <button className={s.button}>Начать игру</button>
    </div>
  );
};

export default Modal;
