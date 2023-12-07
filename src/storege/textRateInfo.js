
const textBlock = {data:0};

export const textInfoReduser = (state = textBlock , action) => {

    switch (action.type) {
        case "changeState":
            return ({ ...state, data: action.payload });

        default:
            return state;
    }
}