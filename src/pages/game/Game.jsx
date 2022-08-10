import React, {useEffect, useState} from "react";
import s from "../game/Game.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import Card from "../../components/Card";
import Category from "../../components/Category";
import {getQuestions} from "../../store/reducers/jService";

const Game = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [categories, setCategories] = useState([]);
    const [cards, setCards] = useState([]);

    const {staticData} = useSelector((name) => name);
    const {name} = staticData;

    const {jsServices} = useSelector((questions) => questions);
    const {questions} = jsServices;

    useEffect(() => {
        if (!name) {
            navigate('/')
        }
    }, [name]);

    useEffect(() => {
        dispatch(getQuestions())
    }, []);

    useEffect(() => {
        if (questions) {
            //filter by no values
            const qRes = questions.filter(q => q.value);
            //find categories
            const cAll = Array.from(new Set(qRes.map(q => q.category.title)));
            const cEqualFive = cAll.map((cr) => {
                let count = 0;
                qRes.map((qr) => {
                    if (qr.category.title === cr) {
                        count += 1
                    }
                });
                if (+count === 5) {
                    return cr
                }
            });
            const cRes = cEqualFive.filter(c => c).slice(0, 5);
            setCategories(cRes);
            setCards(qRes);
        }
    }, [questions]);
    console.log(questions)
    return (
        <div className={s.root}>
            <h1 className={s.title}>Svoya Igra</h1>
            <div className={s.game}>
                <div className={s.categories}>
                    {categories && categories.map((c, idx) => (
                        <div className={s.questions}>
                            <React.Fragment key={idx}>
                                <Category data={c}/>
                            </React.Fragment>
                            {cards && cards.map((q) => (
                                q.category.title === c
                                    ? <React.Fragment key={q.id}>
                                        <Card question={q} value={q.value}/>
                                    </React.Fragment>
                                    : ''
                            ))
                            }
                        </div>
                    ))}
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
