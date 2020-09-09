export const ADD_TO_LIST = 'ADD_TO_LIST'

export const infiniteScroll = (amountToAdd) => 
{
    const payload = amountToAdd
    console.log(payload)
    return ({type: ADD_TO_LIST, payload})
    
}