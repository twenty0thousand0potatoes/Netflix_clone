import React, { useState, } from 'react';
import MainHeader from './components/header/MainHeader.jsx';
import Main from './components/main/Main';
import SecondMain from './components/main/SecondMain';
import Rates from './components/sections/Rates.jsx';
import RatesInfo from './components/sections/RatesInfo.jsx';
import { Routes, Route } from 'react-router-dom';
import MainLibraryPage from './components/movie library/MainLibraryPage';
import style from './MainComponent.module.scss';
import Account from './components/account/Account.jsx';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import '../src/main.css';

export default function MainPage() {

  const visib = useSelector(state => state.popUp.data);
  const dispatch = useDispatch();

  return (
    <div>
      <div className={classNames(style.enterAccountPopUp, { 'visib': !visib })} onClick={() => {
        dispatch({type:'changeVisib', data : false});
      }}>
        <div className={style.textPopUp}>       Пожалуйста, войдите в аккаунт!
        </div>
      </div>
      <MainHeader />
      <Routes>
        <Route path='*' element={<>
          <Main />
          <SecondMain />
          <Rates />
          <RatesInfo />
        </>}>
        </Route>
        <Route path='library' element={<MainLibraryPage />}></Route>
        <Route path='account' element={<Account />}></Route>
      </Routes>
      <footer className={style.wrapperFooter}>
        <div> ООО "Fadelix"</div>
        <div>Адрес: Беларусь, г. Минск, ул. Беллоруская 21, 310-А или г. Жодино, ул. Гагарино, 30-15</div>
        <div>Телефон: +375(44)654-43-34</div>
        <div>Почта: fadeev_a.it.belstu@inbox.ru</div>
      </footer>
    </div>
  );
}
