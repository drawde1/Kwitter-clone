import React from "react";
import { createTimestamp } from "../../functions/createTimestamp";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteMessage } from "../../redux/actions/messages";
import { MessageList } from "semantic-ui-react";
export const Message = props => {
  //TODO: handle delete message
  //TODO: handle likes add & delete
  const dispatch = useDispatch();

  // id: 0,
  // text:'',
  // username: '',
  // createdAT:'',
  // likes:[],

  // 2020-09-03T14:27:16.454Z

  let timestamp = createTimestamp(props.createdAt);
  // // useEffect(()=>{})
  // componentDidMount(()=>{timestamp = })

  const handleDelete = () => {
    dispatch(deleteMessage(props.id));

    // if (deleteMessage === false) {
    //     const result = await this.axiosInstance.delete("/messageid" + Message, {

    //     [],
    //     });
    //         .then(res => res.json())
    //         .then(result => {
    //             console.log(result)
    //             setActive(true)
    //             deleteMessage(result)
    //         })
    //         .catch(error => console.log(error))
    // } else {
    //     setActive(false)
  };

  return (
    <>
      <p>user:{props.username}</p>
      <p>text:{props.text}</p>
      <p>likes:{props.likes.length}</p>
      <p>
        time: {timestamp.time}
        <span> date:{timestamp.date}</span>
      </p>
      <button>like</button>
      <button>x</button>
      <button onClick={handleDelete}> Delete Message </button>
    </>
  );
};
