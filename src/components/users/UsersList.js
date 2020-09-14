import React, { useEffect} from "react";
import {  useDispatch,useSelector} from "react-redux";
import {getUserList} from '../../redux/actions/user'
import { User } from "./User";
import {infiniteScroll} from '../../redux/actions/infiniteScroll'
import {restInfiniteScroll} from '../../redux/actions/infiniteScroll'
import './user.css'
import {Loader} from '../loader/Loader'
export const  UsersList = () =>
{
    const dispatch = useDispatch()
    useEffect(()=>{dispatch(restInfiniteScroll(0))},[])
    useEffect(()=>{dispatch(getUserList({limit:10, offset:0}))},[])
    const {userList,userListParams,userListLoader} = useSelector((state)=>({
        userList: state.userList.users,
        userListParams: state.infiniteScroll,
        userListLoader: state.userList.loading,
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

    return(
        <>
        {userListLoader && <Loader/>}
          <div className= 'scrollBox' onScroll ={handleScroll}>
            {userList.map((user) => (
          <User pictureLocation={user.pictureLocation} 
          username={user.username}
          displayName ={user.displayName}
          key = {user.username} 
          about = {user.about}
          />

            ))}
        </div>
        </>
    )
    
}
