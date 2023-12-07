import React from 'react';
import './styles/main.css';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import users from '../../storege/accountInfoBase';

export default function RegistrationPopUp() {

const dispatch = useDispatch();

const visib = useSelector(state => state.reg.visibReg);
const defaultEmail = useSelector(state => state.email.email);


const authentication = () =>{

    const userInfo = {
        email: '',
        password: ''
    }
    if(document.getElementById('regemailarea').value != '' && document.getElementById('regemailarea').length !=0){
        userInfo.email = document.getElementById('regemailarea').value;
    }

    if(document.getElementById('regpasswordarea').value != '' && document.getElementById('regpasswordarea').length !=0){
        userInfo.password = document.getElementById('regpasswordarea').value;
    }
    getInformation(userInfo);
}

const redForm = useSelector(state => state.error.data);
const numEnter = useSelector(state => state.num.data);


const getInformation = (param) => {
    users.forEach(element => {
        if (element.email != param.email ) {
            if (element.password != param.password ) {
                const obj = {
                    email:param.email,
                    password:param.password,
                    rate:0, 
                    index:users.length,
                    favourites:null,
                }
               users[users.length] = obj;
               console.log(users)
               dispatch({type:'enter', data:true});
            
               setTimeout(() => {
                dispatch({type:'enter', data:false});
                dispatch({type:'closeReg', data:true});
               }, 2000);
            }
            else {
               Error();
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

    return (
        <div className={classNames('wrapperRegistrationPopUp', { 'visib': visib })}>
            <div className={classNames("contentBlock",{'error':redForm, 'good':numEnter})} >
                <form>
                    <div className='topPartForm'>
                        <h2>Регистрация</h2>
                        <span onClick={()=>{
                            dispatch({type:"closeReg", data:true})
                        }}>&#10006;</span>
                    </div>
                    <input type='text' placeholder='Укажите ваш email...' required  id='regemailarea' defaultValue={defaultEmail}/>
                    <input type='email' placeholder='Придумайте пароль..' required  id='regpasswordarea' />
                    <button type='button' onClick={authentication}>Зарегестрироваться</button>?
                    <div className='bottomPartForm'>
                        <p>Уже есть аккаунт? Тогда быстрее проходите аутентификацию и наслаждайтесь любимыми фильмами и сериалами. <span><a onClick={() => {
                            dispatch({type:"closeReg", data:true});
                            dispatch({type:"openEnter", data:false});
                        }}>Войти</a></span></p>
                    </div>
                </form>
            </div>
        </div>
    );
}
