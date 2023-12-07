
import info from '../components/sections/contentPromoTexts.js';

const promoState = info;

export const promoReduser = (state = promoState, action) => {
    switch (action.type) {
        case "changeState":
            return ({ ...state, visibEnter: action.data });
        default:
            return state;
    }

}