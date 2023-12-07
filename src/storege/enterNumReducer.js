const numEnter = {
    data:false
}
 export const numData = (state = numEnter, action)=>   {
    switch(action.type){
        case "enter":
            return({...state, data: action.data});
        
        default:
        return state;
    }
}