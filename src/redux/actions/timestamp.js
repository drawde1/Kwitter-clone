export const timeStamp = (time) => {
    return {
        type: ‘TIME_STAMP',
    payload: time
    };
};

export const displayTime = () => {
    return (dispatch) => {
        const response = new Date().toLocaleTimeString();
        dispatch({ type: 'DISPLAY_TIME', payload: response });
    }
};
