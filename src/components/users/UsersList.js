import React, { useState, useEffect} from "react";
import {  useDispatch,useSelector} from "react-redux";
import {getUserList} from '../../redux/actions/user'
import { User } from "./User";
import {infiniteScroll} from '../../redux/actions/infiniteScroll'
import {restInfiniteScroll} from '../../redux/actions/infiniteScroll'
import './user.css'

export const  UsersList = () =>
{
    const dispatch = useDispatch()
    useEffect(()=>{dispatch(restInfiniteScroll(0))},[])
    useEffect(()=>{dispatch(getUserList({limit:10, offset:0}))},[])
    const {userList,userListParams} = useSelector((state)=>({
        userList: state.userList.users,
        userListParams: state.infiniteScroll,
    }))
    
    
    const handleScroll = (event) =>
   {
     
     const {scrollHeight,clientHeight,scrollTop} = event.currentTarget
     if(clientHeight + scrollTop >= scrollHeight-30)
     {
       dispatch(infiniteScroll(10))
       dispatch(getUserList(userListParams))
     }
   }
    console.log(userList)
    return(
        <>
          <div className= 'scrollBox' onScroll ={handleScroll}>
            {userList.map((user) => (
          <User pictureLocation={user.pictureLocation} 
          username={user.username}
          displayName ={user.displayName}
          key = {user.username} 
          updatedAt = {user.updatedAt}
          createdAt ={user.createdAt}
          about = {user.about}
          />
            ))}
        </div>
        </>
    )
    
}
