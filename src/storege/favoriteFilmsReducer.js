import { useSelector } from "react-redux";


const dataUser = {
    data:{
    film: [],
    index: 0
    }
}


export const favoriteReducer = (state = dataUser, action) => {
    console.log(action.data)
    switch (action.type) {
        case "favorite":
            return ({ ...state, data: action.data });
        default:
            return state;
    }

}