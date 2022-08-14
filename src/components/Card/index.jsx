import React, {useEffect, useState} from "react";
import s from "../../pages/game/Game.module.scss";

const Card = ({value, question, answers, setAnswerBool, setAnswerValue}) => {
    let intervalFunc;

    const [userAnswer, setUserAnswer] = useState('');

    const [display, setDisplay] = useState(false);
    const [timerValue, setTimerValue] = useState(10);

    const timerFunc = (intervalFunc) => {
        clearInterval(intervalFunc);
        setDisplay(false);
        setTimerValue(10)
    };

    const timer = () => {
        intervalFunc = setInterval(() => {
            if (timerValue > 0) {
                setTimerValue((prev) => prev - 1);
            }
        }, 1000);

        setTimeout(() => {
            timerFunc(intervalFunc)
        }, 10000);
    };

    const [randomAnswers, setRandomAnswers] = useState([]);

    useEffect(() => {
        const arr = [];
        for (let i = 0; i < 3; i++) {
            const random = Math.floor(Math.random() * (answers.length - 1));
            arr.push(answers[random]);
        }
        arr.push(question.answer);
        setRandomAnswers(arr)
    }, []);

    const sendAnswer = () => {
        timerFunc(intervalFunc);
        if (userAnswer === question.answer) {
            setAnswerBool(true);
            setAnswerValue(question.value)
        } else {
            setAnswerBool(false);
            setAnswerValue(-question.value)
        }
    };

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
                style={{
                    display: `${display ? "block" : "none"}`,
                }} className={s.modalWindow}>
                <div className={s.card}>
                    <div className={s.cat}>
                        <p className={s.cardTitle}>{question.category && question.category.title}</p>
                        <span className={s.point}>{question.value}</span>
                    </div>
                    <div className={s.line}></div>
                    <p className={s.question}>{question.question}?</p>
                    <div className={s.line}></div>
                    <ul className={s.answers}>
                        {randomAnswers && randomAnswers.map((rA, idx) => (
                            <li key={rA + idx} className={s.answer}>{rA}</li>
                        ))}
                    </ul>
                    <input onChange={(e) => setUserAnswer(e.target.value)} type="text" placeholder="Ответ"
                           className={s.input}/>
                    <div className={s.bottom}>
                        <p className={s.timer}>Осалось {timerValue} секунд</p>
                        <button onClick={sendAnswer} className={s.smButton}>Ответить</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;
