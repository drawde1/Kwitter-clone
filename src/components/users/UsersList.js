import React, { useState, useEffect} from "react";
import {  useDispatch,useSelector} from "react-redux";
import {getUserList} from '../../redux/actions/user'
export const  UsersList = () =>
{
    useEffect(()=>{dispatch(getUserList(msgListParams))},[])
    const dispatch = useDispatch()
    const {userList} = useSelector((state)=>{
        userList: state.usersList.users
    })
    console.log(userList)
    return(
        <>
        </>
    )
    
}
