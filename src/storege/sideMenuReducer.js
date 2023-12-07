const visibState = {visib:false};

export const sideMenuReduser = (state = visibState, action) => {

    switch (action.type) {
        case "visibState":
            return ({ ...state, visib: action.payload });
        default:
            return state;
    }

}