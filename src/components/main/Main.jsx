import React from 'react';
import './styles/main.css';
import MainText from './MainText';
import Registration from './Registration';
import RegistrationPopUp from './RegistrationPopUp';
import { useState } from 'react';
import EnterPopUo from './EnterPopUo';
import Sidemenu from './sidemenu';

export default function Main(props) {

    return (
        <div className='wrapperMainPart'>
            <div className='backgraundWrapper'>
            <Sidemenu />
                <div className='wrapperMainParts'>
                    <MainText />
                    <Registration />
                    <RegistrationPopUp />
                    <EnterPopUo />
                </div>
            </div>
        </div>
    );
}
