import React, {useState} from 'react';
import style from './style/main.module.scss';
import { Link } from 'react-router-dom';
import LibraryBlock from './LibraryBlock';
import SortBlock from './SortBlock';


export default function MainLibraryPage() {

    return (
        <div className={style.wrapperLibrary}>
            <div className={style.TitlePage}>
                <div className={style.backMainPage}>

                    <Link to='*'>
                        <span>&lArr;</span>
                    </Link>
                    На главную /
                </div>
                <h1> Каталог</h1>
            </div>
            <SortBlock/>
            <LibraryBlock />
        </div>
    );
}
