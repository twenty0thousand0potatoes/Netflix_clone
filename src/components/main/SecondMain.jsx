import React, { useState, useEffect } from 'react';
import style from './styles/sections.module.scss';
import photo from '../../images/Group 1.png';

export default function SecondMain() {

    return (
        <>
            <div className={style.wrapper}>
                <div className={style.leftPart}>
                    <div className={style.titleBlock}>
                        <h2>Смотрите ваши любимые фильмы и сериалы в любом месте.</h2>
                    </div>
                    <div className={style.contentText}>
                        <span>Наш сервис всегда с вами, в мобильном телефоне, в ноутбуке, в телевизоре, везде, где есть доступ к интернету. Также наш сервис доступен для TV.</span>
                    </div>
                </div>
                <div className={style.rightPart}>
                    <div className={style.wrapperSlaider}>
                        <img src={photo} />
                    </div>
                </div>
            </div>
        </>
    );
}
