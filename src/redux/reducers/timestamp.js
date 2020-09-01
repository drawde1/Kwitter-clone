const INITIAL_STATE = {
    checkInTime: new Date().toLocaleTimeString()
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ‘TIME_STAMP':
            return { ...state, checkInTime: action.payload };

        case 'DISPLAY_TIME':
            return { ...state, [action.payload.id]: action.payload };

        default:
            return state;

    }
};
