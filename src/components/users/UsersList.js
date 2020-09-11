import React, { useState, useEffect} from "react";
import {  useDispatch,useSelector} from "react-redux";
import {getUserList} from '../../redux/actions/user'



export const  UsersList = () =>
{
    const {userList,userListParams} = useSelector((state)=>({
        userList: state.usersList.users,
        userListParams: state.infiniteScroll,
    }))
    useEffect(()=>{dispatch(getUserList(userListParams))},[])
    const dispatch = useDispatch()
    
    console.log(userList)
    return(
        <>
        </>
    )
    
}
