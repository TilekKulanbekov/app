import React from 'react';
import s from "../../pages/game/Game.module.scss";

const Category = ({data}) => {
    return (
        <p className={s.category}>{data}</p>
    );
};

export default Category;