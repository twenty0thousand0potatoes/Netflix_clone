import information from './filmsStorege';


const defaultInfo = {
    info: information,
}

 export const filmReducer = (state = defaultInfo, action)=>   {
    switch(action.type){
        case "sort":
            return({...state, info: action.info});
        default:
        return state;
    }

}

