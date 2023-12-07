import classNames from 'classnames';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './styles/main.css';
import users from '../../storege/accountInfoBase'


export default function EnterPopUo() {

    const dispatch = useDispatch();

    const visib = useSelector(state => state.enter.visibEnter);

    const enter = () => {
        const userInfo = {
            email: '',
            password: ''
        }
        if(document.getElementById('emailarea').value != ''){
            userInfo.email = document.getElementById('emailarea').value;
        }

        if(document.getElementById('passwordarea').value != ''){
            userInfo.password = document.getElementById('passwordarea').value;
        }

        getInformation(userInfo);
    }

    const redForm = useSelector(state => state.error.data);
  
   const getInformation = (param) => {
    users.forEach(element => {
        
        if (element.email == param.email) {
            if (element.password == param.password) {
                console.log('jr')
                dispatch({type:'enter', data:true});
                setTimeout(() => {
                    dispatch({ type: 'enter', data: false });
                    dispatch({type:'closeEnter', data:true});
                    dispatch({type:'EnterAccount',data:true });
                }, 2000);
                dispatch({type:'userData', data:element.index});
                dispatch({type:'favorite', data:{films:[], index:element.index}})
            }
            else {
               Error()
            }
        }
        else{
            Error();
        }
    });
}

const Error = () =>{
    dispatch({ type: "error", data:true});
    setTimeout(() => {
        dispatch({ type: 'error', data: false });
    }, 2000);
}

const numEnter = useSelector(state => state.num.data);

    return (
        <div className={classNames('wrapperRegistrationPopUp', { 'visib': visib })} >
            <div className={classNames("contentBlock",{'error':redForm, 'good':numEnter})} >

                <form id='enterPoint' >
                    <div className='topPartForm' >
                        <h2>Войти</h2>
                        <span onClick={() => {
                            dispatch({ type: "closeEnter", data: true })
                        }}>&#10006;</span>
                    </div>
                    <input type='text' placeholder='Логин или email' required  id='emailarea'/>
                    <input type='email' placeholder='Пароль'  id='passwordarea'/>
                    <button type='button' onClick={enter}>Войти</button>
                    <div className='bottomPartForm'>
                        <p>Ещё не зарегестрированы? Создайте аккаунт прямо сейчас! <span><a onClick={() => {
                            dispatch({ type: "closeEnter", data: true });
                            dispatch({ type: "openReg", data: false })
                        }}>Зарегестрироваться</a></span></p>
                    </div>
                </form>

            </div>
        </div>
    );
}
