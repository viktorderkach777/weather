
const initialState = {
    tiles: [],
    loading: true

};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'Tiles_Loaded':
            return {
                tiles: action.payload,
                loading: false
            };
        default:
            return state;
    }


    //return state;
};

export default reducer;