import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './styles/mainHeader.css'

export default function EnterButton() {

  const dispatch =  useDispatch();
  const state = useSelector(state => state.enter.visibEnter)

  return (
    <div className='enterButtonWrapper'>
      <button type='button' onClick={()=>{
       dispatch({type:"openEnter", data:false});
       dispatch({type:"changeVisib", data:false});
       document.body.scrollIntoView({block:"start", behavior:"smooth"})
      }}>Войти</button>
    </div>
  );
}
