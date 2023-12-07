const visibPopUp_ = {
    data:false
};

export const visibPopUp = (state = visibPopUp_, action) => {

    switch (action.type) {
        case "changeVisib":
            return ({ ...state, data: action.data });
        default:
            return state;
    }

}