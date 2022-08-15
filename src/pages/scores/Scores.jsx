import React, { useEffect } from "react";
import s from "../scores/Scores.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { saveName, saveTotalValue } from "../../store/reducers/staticData";

const Scores = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { staticData } = useSelector((name) => name);
  const { name } = staticData;
  const { totalValue } = staticData;
  const { allPlays } = staticData;

  const playAgainHandler = () => {
    navigate("/");
    dispatch(saveTotalValue(""));
    dispatch(saveName(""));
  };

  return (
    <div className={s.root}>
      <h1 className={s.title}>Результатс</h1>
      <button className={s.button} onClick={playAgainHandler}>
        PLAY AGAIN
      </button>

      <table className={s.table}>
        <tr className={s.rows}>
          <td className={s.id}>№</td>
          <td className={s.name}>Name</td>
          <td className={s.score}>Total value</td>
        </tr>
        <div className={s.line}></div>
        {allPlays && allPlays.length > 0
          ? allPlays.map((el, idx) => (
              <tr className={s.rows}>
                <td className={s.id1}>{idx}</td>
                <td className={s.name1}>{el.name}</td>
                <td className={s.score1}>{el.answerTotal}</td>
              </tr>
            ))
          : ""}
      </table>
    </div>
  );
};

export default Scores;
