import React, {useState} from "react";
import s from "../modal/Modal.module.scss";
import {useNavigate} from "react-router";
import {useDispatch} from "react-redux";
import {saveName} from "../../store/reducers/staticData";

const Modal = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [name, setName] = useState('');

    const saveNameHandler = (e) => {
        e.preventDefault();
        if (name) {
            dispatch(saveName(name));
            navigate('/game')
        }
    };

    return (
        <section className={s.main}>
            <div className={s.root}>
                <p className={s.name}>как вас зовут</p>
                <form onSubmit={saveNameHandler}>
                    <input required onChange={(e) => setName(e.target.value)} className={s.input} type="text"
                           placeholder="Ведите ваше имя"/>
                    <span className={s.validation}>бла бла блааавыаываыввфы</span>
                    <button type="submit" className={s.button}>Начать игру</button>
                </form>
            </div>
        </section>
    );
};

export default Modal;
