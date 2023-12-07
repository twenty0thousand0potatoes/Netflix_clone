import React from 'react';
import { useDispatch } from 'react-redux';
import './styles/main.css';


export default function Registration() {

  const dispatch = useDispatch();


  return (
    <div className='wrapperRegistration'>
      <input type='text' placeholder='Адрес электронной почты...' id='userEmail' />
      <button type='button' onClick={() => {

        dispatch({ type: "openReg", data: false });
        
        dispatch({type:"insertEmail", data:document.getElementById('userEmail').value});

      }}>
        
        Перейти к просмотру<span>&#10149;</span></button>
    </div>
  );
}
