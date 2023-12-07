
import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import style from './style/library.module.scss';



export default function LibraryBlock() {

    const information = useSelector(state => state.infoFilms.info)

    const enterAccount = useSelector(state => state.account.data);

    const dispatch = useDispatch();

    const count = useSelector(state => state.count.data);

    const favorite = useSelector(state => state.favorite.data);

    const addFavorite = (e) => {
        if (enterAccount) {
            favorite.films[count] = information[e.target.id];
            dispatch({type:'count', data: count+1});
            dispatch({type:'favorite', data:favorite});
        }
    }
    return (
        <div className={style.wrapperLibraryBlock}>

            <div className={style.wrapperCards}>
                {
                    information.map((item, index) => {

                        return (
                            <div className={style.cardFilm} key={index}>
                                <div className={style.topPartCard}>
                                    <img src={item.img} />
                                    <div className={style.toolsButton}>
                                        <button type='button' onClick={addFavorite} id={index}>Добавить в избранное</button>
                                        <button type='button' onClick={() => {
                                            window.location.href = 'https://www.kinopoisk.ru/'
                                        }}>Смотреть</button>
                                    </div>
                                </div>
                                <div className={style.bottomPartCard}>
                                    <div className={style.titleFilm}>{item.title}</div>
                                    <div className={style.duration} >{item.duration}</div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>



        </div>
    );
}
