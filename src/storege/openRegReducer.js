const defaultVisibReg = {
    visibReg : true,
}

 export const openRegReducer = (state = defaultVisibReg, action)=>   {

    switch(action.type){
        case "openReg":
            return({...state, visibReg: action.data});
        
        case "closeReg":
            return({...state, visibReg: action.data});

        default:
        return state;
    }

}

const defaulEmail = {
    email: null,
}

export const insertEmail = (state = defaulEmail, action)=>   {

    switch(action.type){
        case "insertEmail":
            return({...state, email: action.data});
        
        default:
        return state;
    }

}