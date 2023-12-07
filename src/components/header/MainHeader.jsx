import React, {useState, useEffect} from 'react';
import './styles/mainHeader.css'
import Logo from './Logo';
import EnterButton from './EnterButton';
import classNames from 'classnames';


export default function MainHeader() {


  return (
    <div className='headerWrapper'>
      <Logo />
      <div className='rightPart'>
        <EnterButton />
      </div>
    </div>
  );
}
