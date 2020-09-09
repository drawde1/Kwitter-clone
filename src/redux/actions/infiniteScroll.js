export const ADD_TO_LIST = 'ADD_TO_LIST'

export const infiniteScroll = (amountToAdd) => 
{
    return ({type: ADD_TO_LIST, payload: amountToAdd})
}