import React  from 'react'
import { createTimestamp } from '../../functions/createTimestamp'
import { useEffect,} from 'react'
import {  useDispatch,useSelector} from "react-redux";
import {addLike} from '../../redux/actions/messages'
import { deleteMessage,getMessageList} from '../../redux/actions/messages'
export const Message = (props) =>
{
//TODO: handle delete message
//TODO: handle likes add & delete


    // id: 0,
    // text:'',
    // username: '',
    // createdAT:'',
    // likes:[],
    
    // 2020-09-03T14:27:16.454Z
    const msgListParams =
  {
    limit: 10,
    offset: 0
  }
  const dispatch = useDispatch()
const handleDelete = () =>
{
    console.log(props.msgId)
    dispatch(deleteMessage(props.msgId))
    // dispatch(getMessageList(msgListParams))
}
 let timestamp = createTimestamp(props.createdAt)
// // useEffect(()=>{})
// componentDidMount(()=>{timestamp = })

 return (  <>
        <p>user:{props.username}</p>
        <p>text:{props.text}</p>
        <p>likes:{props.likes.length}</p>
        <p>time: {timestamp.time}<span> date:{timestamp.date}</span></p>
        <button >like</button><button onClick ={handleDelete}>x</button>
        

    </>)
}