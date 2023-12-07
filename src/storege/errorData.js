const defaultEnter = {
    data: false,
    enter:0
}

 export const errorData = (state = defaultEnter, action)=>   {

    switch(action.type){
        case "error":
            return({...state, data: action.data});
        
        default:
        return state;
    }

}

