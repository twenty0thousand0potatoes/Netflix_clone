import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import style from './style/account.module.scss';
import users from '../../storege/accountInfoBase';
import rate from '../sections/contentRates'
import Iterator from './Iterator';

export default function Account() {

  const dispatch = useDispatch();
  const colorPhoto = [
    {
      id: 0,
      color: 'red'
    },
    {
      id: 1,
      color: 'green'
    },
    {
      id: 2,
      color: 'yellow'
    },
    {
      id: 3,
      color: 'blue'
    }
  ];

  const randomColor = () => {
    const colorNum = Math.random() * 4;
    return colorPhoto[colorNum.toFixed(0)].color
  }

   const dataUser = useSelector(state => state.data.data);
  

  const favorite = useSelector(state => state.favorite.data);

  const favourites = () => {

    if (favorite.films.length == 0) {
      return <Iterator info = {"У вас пока нет избранных вильмов или сериалов!"}/>;
    }
  }

  return (
    <div className={style.wrapperAccount}>
      <div className={style.HeaderAccount}>
        <div>
          <div className={style.photo} style={{ backgroundColor: randomColor() }}>
            <span>{users[dataUser].email[0].toUpperCase()}</span>
          </div>
          <div className={style.nameAccount}>{users[dataUser].email}</div>
        </div>
        <div className={style.outAccount}>
          <Link to='*'>
            <button type='button' onClick={() => {
              dispatch({ type: "EnterAccount", data: false });
            }}>
              Выйти
            </button>

            <Link to='*' onClick={() => {
              dispatch({ type: "EnterAccount", data: true });
            }}>
              <button type='button'>
                На главную
              </button>
            </Link>
          </Link>
        </div>
      </div>

      <div className={style.middlePartAccount}>
        <div className={style.rate}>
          <h2>У вас подключен тариф:"{rate[users[dataUser].rate].title}"</h2>
        </div>

        <div className={style.favourites}>
          Избранное:
          <div>
            {
              favourites()
             }
             {favorite.films.map((item, index)=>{
              return <div>{item.title}</div>
             })}
          </div>
        </div>
      </div>

    </div>
  );


}

