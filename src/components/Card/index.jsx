import React, {useState} from 'react';
import s from "../../pages/game/Game.module.scss";

const Card = ({value, question}) => {
    const [display, setDisplay] = useState(false);
    const timer = () => setTimeout(() => {
        setDisplay(false)
    }, 2000);

    return (
        <>
            <button onClick={() => {
                setDisplay(true);
                timer();
            }} className={s.qButton}>{value}</button>
            <div style={{
                width: "200px",
                position: "absolute",
                height: "200px",
                background: "red",
                display: `${display ? "block" : "none"}`
            }}>{question.question}?
            </div>
        </>
    );
};

export default Card;