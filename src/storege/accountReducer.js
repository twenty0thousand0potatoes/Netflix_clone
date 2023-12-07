const enterAccount = {
    data:false
};

export const accountEnter = (state = enterAccount, action) => {
    switch (action.type) {
        case "EnterAccount":
            return ({ ...state, data: action.data });
        default:
            return state;
    }

}



