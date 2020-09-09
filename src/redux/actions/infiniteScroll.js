export const ADD_TO_LIST = 'ADD_TO_LIST'
export const RESET_LIST = 'RESET_LIST'

export const infiniteScroll = (amountToAdd) => 
{
    const payload = amountToAdd
    
    return ({type: ADD_TO_LIST, payload})
    
}

export const restInfiniteScroll = (initialSize) =>
{
    const payload = initialSize
    return ({type: RESET_LIST,payload})
}