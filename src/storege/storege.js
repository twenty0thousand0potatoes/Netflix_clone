import { createStore, combineReducers } from "redux";
import { insertEmail, openRegReducer } from "./openRegReducer";
import { openEnterReducer } from "./openEnterReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import {promoReduser} from "./promoReducer"; 
import {textInfoReduser} from "./textRateInfo";
import { sideMenuReduser } from "./sideMenuReducer";
import { filmReducer } from "./filterFilmReducer";
import { accountEnter } from "./accountReducer";
import { visibPopUp } from "./visibPopUp";
import { errorData } from "./errorData";
import { numData } from "./enterNumReducer";
import { UserData } from "./dataUser";
import { CounterReducer } from "./counterReducer";
import { favoriteReducer } from "./favoriteFilmsReducer";

const rootReducer = combineReducers({
    reg: openRegReducer,
    enter: openEnterReducer,
    email:insertEmail,
    promoInfo:promoReduser,
    text:textInfoReduser,
    sideMenu:sideMenuReduser,
    infoFilms:filmReducer,
    account:accountEnter,
    popUp:visibPopUp,
    error:errorData,
    num:numData,
    data:UserData,
    count:CounterReducer,
    favorite:favoriteReducer,

})

const storege = createStore(rootReducer, composeWithDevTools());

export default storege;
