import React, {useEffect} from "react";
import s from "../scores/Scores.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import {saveName, saveTotalValue} from "../../store/reducers/staticData";

const Scores = () => {
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const {staticData} = useSelector((name) => name);
    const {name} = staticData;
    const {totalValue} = staticData;
    const {allPlays} = staticData;

    const playAgainHandler = () => {
        navigate('/');
        dispatch(saveTotalValue(''));
        dispatch(saveName(''));
    };

    return (
        <div className={s.root}>
            <div className={s.table}>
                <p className={s.name}>{name}</p>
                <p className={s.score}>{totalValue}</p>
            </div>
            <button onClick={playAgainHandler}>PLAY AGAIN</button>
            <br/>
            <br/>
            <br/>
            <br/>
            <table>
                <tr>
                    <td>№</td>
                    <td>Name</td>
                    <td>Total value</td>
                </tr>
                {
                    allPlays && allPlays.length > 0
                        ? allPlays.map((el, idx) => (
                            <tr>
                                <td>{idx}</td>
                                <td>{el.name}</td>
                                <td>{el.totalValue}</td>
                            </tr>
                        ))
                        : ''
                }
            </table>
        </div>
    );
};

export default Scores;
