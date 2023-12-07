const count = {
    data:0
};

export const CounterReducer = (state = count, action) => {
    switch (action.type) {
        case "count":
            return ({ ...state, data: action.data });
        default:
            return state;
    }

}



