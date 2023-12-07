import React, { useState, useEffect } from 'react';
import style from './style/sort.module.scss';
import './style/click.css';
import info from '../../storege/filmsStorege';
import { useDispatch } from 'react-redux';


export default function SortBlock(props) {

    const dispatch = useDispatch();

    const clickFilter = (event) => {
        if (filterBlock != undefined) {
            filterBlock.classList.remove('clickFilter');
            setFilterBlock(document.getElementById(event.target.id));
        }
        else {
            setFilterBlock(document.getElementById(event.target.id));
        }

    }

    const [filterBlock, setFilterBlock] = useState();

    useEffect(() => {
        if (filterBlock != undefined) {
            filterBlock.classList.add('clickFilter');
        }
    }, [filterBlock]);

    const throwOff = () => {
        if (filterBlock != undefined) {
            filterBlock.classList.remove('clickFilter');
        }
        setFilterBlock(undefined);

        dispatch({ type: 'sort', info: info });
    }



    const YearFilter = () => {
        const year = info.concat();
        year.sort(function (a, b) {

            if (a.year > b.year) {
                return 1;
            }

            if (a.year < b.year) {
                return -1;
            }

            return 0;
        });
        dispatch({ type: 'sort', info: year });
    }



    const Rating = () => {
        const rating = info.concat();
        rating.sort(function (a, b) {

            if (a.rating > b.rating) {
                return 1;
            }

            if (a.rating < b.rating) {
                return -1;
            }

            return 0;

        });

        dispatch({ type: 'sort', info: rating });
    }

    const Country = () => {
        const country = info.concat();

        country.sort(function (a, b) {

            if (a.country > b.rountry) {
                return 1;
            }

            if (a.country < b.country) {
                return -1;
            }

            return 0;

        });
        dispatch({ type: 'sort', info: country });
    }

    const All = () => {
        dispatch({ type: 'sort', info: info });
    }

    const Films = () => {
        let iterator = 0;
        const films = [];
        info.forEach(element => {
            if (element.gender =='film') {
                films[iterator] = element;
                iterator++;
            }
        });

        
         dispatch({ type: 'sort', info: films });
    }

    const SoapOpera = () => {
        let iterator = 0;
        const films = [];
        info.forEach(element => {
            if (element.gender =='soap opera') {
                films[iterator] = element;
                iterator++;
            }
        });

        
         dispatch({ type: 'sort', info: films });
    }



    return (
        <div className={style.wrapperSortBlock}>
            <div className={style.wrapperTitle}>
                Фильтры
            </div>

            <div className={style.filters} onClick={clickFilter}>
                <div>
                    <span id='all' onClick={All}>Все</span>
                </div>
                <div>
                    <span id='films' onClick={Films}> Фильмы</span>
                </div>
                <div>
                    <span id='soap_opera' onClick={SoapOpera}>Сериалы</span>
                </div>
            </div>

            <div className={style.sortList} id='list'>
                <div onClick={YearFilter}>Год Выпуска</div>
                <div onClick={Rating}>Рейтинг</div>
                <div onClick={Country}>Страна</div>
            </div>

            <div className={style.throwOff}>
                <button type='button' onClick={throwOff}>Сбросить</button>
            </div>
        </div>
    );

}
