import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './styles/sideMenu.module.scss';
import './styles/sideMenu.css';
import { Link } from 'react-router-dom';


export default function Sidemenu() {

    const dispatch = useDispatch();

    const visibSideMenu = useSelector(state => state.sideMenu.visib);

    const visibSideMenuFun = () => {
        dispatch({ type: "visibState", payload: !visibSideMenu });
    }


 let path = '';
    const enterAccount = useSelector(state => state.account.data);

        if (enterAccount) {
          path = 'account';  
        }



    return (
        <div className={classNames(style.wrapperSideMenu, { 'visibSideMenu': visibSideMenu })}>
            <div className={style.listBlock}>
                <ul>
                    <li>
                        <Link to="library" >Библиотека фильмов</Link>
                    </li>
                    <li>
                        <Link to={path} >
                            Аккаунт
                        </Link>

                    </li>
                </ul>
            </div>
            <div className={classNames(style.arrowBlock, { 'rotateArrow': visibSideMenu })} onClick={visibSideMenuFun}>
                <span>&rArr;</span>
            </div>
        </div>
    );
}
