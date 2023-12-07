const defaultEnter = {
    visibEnter: true,
}

 export const openEnterReducer = (state = defaultEnter, action)=>   {

    switch(action.type){
        case "openEnter":
            return({...state, visibEnter: action.data});
        
        case "closeEnter":
            return({...state, visibEnter: action.data});

        default:
        return state;
    }

}