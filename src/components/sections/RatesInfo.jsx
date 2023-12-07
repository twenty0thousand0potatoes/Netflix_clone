import React, { useState, useEffect } from 'react';
import styles from '../sections/styles/ratesInfo.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import info1 from './contentPromoTexts';
import promo from '../../storege/promoBase';
import users from '../../storege/accountInfoBase';


export default function RatesInfo(props) {

    const dispatch = useDispatch();
    const numBlock = useSelector(state => state.text.data);

    
    const info = info1[numBlock];

    const [usePromo, setUsePromo] = useState(false);
    const enterAccount = useSelector(state => state.account.data);

    useEffect(() => {
        setfinallyPrice(info.price)
    }, [info]);

    const [finallyPrice, setfinallyPrice] = useState(info.price);;

    const countTheCost = () => {
        if (enterAccount) {
            promo.forEach(element => {
                if (document.getElementById('promoTextArea').value == element.promo && !usePromo) {
                    setfinallyPrice(info.price * (1 - (element.discount / 100)));
                    setUsePromo(true);
                }
            });
        }

        else{
          dispatch({type:'changeVisib', data: true});  
        }

    }

    const numaccount = useSelector(state => state.data.data);
    const rate =  useSelector(state => state.text.data)

    const subscription = () =>{
        users[numaccount].rate = rate;
    }

    return (
        <div className={styles.wrapperRatesInfo}>
            <div className={styles.topPartInfoBlock}>
                <div className={styles.titleInfoBlock}><span>
                    {info.defaultTitle}</span>
                    <p>{info.defaultText}</p>
                </div>
                <div className={styles.middlePart}>
                    <div className={styles.list}>
                        <div className={styles.leftPatr}>
                            <ul>
                                <li><span className={styles.boldText}>{info.boldText}</span> {info.text1}</li>
                                <li>{info.text2}<span className={styles.boldText}>{info.boldText1}</span></li>
                                <li>
                                    {info.text3}</li>
                                <li>{info.text4}</li>
                            </ul>
                        </div>

                        <div className={styles.rightPart}>
                            <ul>
                                <li> {info.text5} <span className={styles.boldText}>{info.boldText2}</span></li>
                                <li>
                                    {info.text6}</li>
                                <li>
                                    {info.text7}</li>
                                <li>
                                    {info.text8}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.wrapperPromoCode}>
                <div className={styles.promoCode}>

                    <form className={styles.promoCodeForm}>
                        <div className={styles.topPartForm}>
                            <div className={styles.ticketPromoCode}>
                            </div>
                            <input type='text' placeholder='Введите промокод...' id='promoTextArea' />
                        </div>
                        <button type='button' className={styles.btnUsePromo} onClick={countTheCost}>Применить Промокод</button>
                        <div className={styles.middlePartForm}>
                            <span>Стоимость тарифа:{info.price}$</span>
                        </div>
                        <div className={styles.bottomPartForm}>
                            <button type='button' onClick={subscription}>Оформить подписку</button>
                            <div className={styles.usePromoPrice}>{finallyPrice.toFixed(2)}$</div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
}
