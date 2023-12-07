import React, { useState } from 'react'; //тарифы
import styles from './styles/rates.module.scss';
import content from './contentRates';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';

export default function Rates() {

  const [active, setActive] = useState(false);

  const activeBlock = (event) => {
  dispatch({type:"changeState",payload:event.target.id })
  }

  const dispatch = useDispatch();


  return (
    <div className={styles.wrapperRates}>
      <div className={styles.titleBlock}>Тарифы</div>
      <div className={styles.contentBlock}>
        {
          content.map((item, index) => {
            return (
              <div className={classNames([styles.cardRates], { 'active': active })} key={index} id = {index} onClick={activeBlock}>
                <div className={styles.topPartCard}>
                  <div className={styles.titleCard}>
                    <span>{item.title}</span>
                  </div>
                  <div className={styles.period}>
                    {item.period + item.days}
                  </div>
                </div>
                <div className={styles.middlePart}>
                  <div className={styles.price}> {item.price + item.currency}</div>
                  <div className={styles.add}  id={index}>
                    <div id = {index}>&#10006;</div>
                  </div>
                </div>
                <div className={styles.bottomPart}>
                  {(item.price / item.period).toFixed(2) + item.currency + item.text}
                </div>

              </div>
            )
          })

        }

      </div>
    </div>
  );
}
