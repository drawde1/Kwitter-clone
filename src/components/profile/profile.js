import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Loader } from "../loader";
import "./Profile.css";
import { updateuser } from "../../redux/actions/user";
import Api from "../../utils/api"
import { getUserInfo } from '../../redux/actions'
import { Message } from '../feed/Message'
import { infiniteScroll } from '../../redux/actions/infiniteScroll'
import { restInfiniteScroll } from '../../redux/actions/infiniteScroll'
import { getMessageListByUser } from '../../redux/actions'
import 'semantic-ui-css/semantic.min.css'
import { deleteUser } from '../../redux/actions/user'


export const Profile = () => {
  const INITIALSTATE = {
    displayName: "",
    about: "",
    password: "",
  };

  const [state, setState] = useState(INITIALSTATE);
  const [isToggled, setToggle] = useState({ isToggled: false });
  const {
    username,
    startingUsername,
    userPicture,
    messageList,
    bio,
    name,
    msgListParams,
    count,
    loadingUserInfo,

  } = useSelector(state => ({
    loadingUserInfo: state.getUser.loading,
    startingUsername: state.auth.username,
    username: state.getUser.username,
    userPicture: state.getUser.pictureLocation,
    name: state.getUser.displayName,
    bio: state.getUser.about,
    count: state.getMessageListByUser.count,
    messageList: state.getMessageListByUser.messages,
    msgListParams: state.infiniteScroll,
  }))

  const dispatch = useDispatch();
  const picture = useRef(null);

  useEffect(() => { dispatch(getMessageListByUser({ limit: 10, offset: 0 }, startingUsername)) }, [])
  useEffect(() => { dispatch(getUserInfo(startingUsername)) }, [])
  useEffect(() => { dispatch(restInfiniteScroll(0)) }, [])

  const addPic = async (event) => {
    event.preventDefault();
    const picdata = new FormData(picture.current);
    const results = await Api.addPicture(username, picdata);
    dispatch(getUserInfo(username));
  };


  const deleteTheUser = () => {
    dispatch(deleteUser(username));
  };


  useEffect(() => {
    dispatch(getMessageListByUser(msgListParams, username))

  }, [])

  const handleUpdate = (event) => {
    event.preventDefault()
    dispatch(updateuser({ ...state, username }));
    setToggle((prevState) => ({ ...prevState, isToggled: false }))

  }

  const handleChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    setState((prevState) => ({ ...prevState, [inputName]: inputValue }));
  };

  const setPic = async event => {
    event.preventDefault();
    const picdata = new FormData(picture.current);
    const results = await Api.getPictures(username, picdata);
  };


  const handleScroll = (event) => {

    const { scrollHeight, clientHeight, scrollTop } = event.currentTarget

    if (clientHeight + scrollTop >= scrollHeight && msgListParams.offset < count) {
      console.log('end')
      dispatch(infiniteScroll(5))

      dispatch(getMessageListByUser(msgListParams, username))
    }
  }

  const handleToggle = () => {
    setToggle((prevState) => ({ ...prevState, isToggled: true }))
    setState((prevState) => ({ ...prevState, INITIALSTATE }))
  }

  return (
    <React.Fragment>
      <div id="bigsplit">
        <div id="smallsplit">
          {loadingUserInfo && <Loader />}
          <div class="ui card">
            <div class="image">
              <img id="image2"
                src={userPicture ? "https://kwitter-api.herokuapp.com" + userPicture : 'https://drawde1.github.io/Kwitter-user.png'}
                width="200"
                height="200" />
            </div>

            <div class="content">
              <a class="header">{name}</a>
              <div class="meta">
                <span class="date">SE April 2020</span>
              </div>
              <div class="description">
                {bio}
              </div>
            </div>
          </div>
          <div />

          <button onClick={handleToggle} className={isToggled.isToggled ? "hidden" : "show"}>edit profile</button>
          <div className={!isToggled.isToggled ? "hidden" : "show"}>
            <br />
            <div id="photo">
              <h2>Add or Change photo</h2>
              <form ref={picture} onSubmit={addPic}>
                <input type='file' name='picture'></input>
                <br />
                <br />
                <br />
                <button type='submit'>Upload My Picture</button>
              </form>
            </div>
            <br />
            <br />
            <div id="user">
              <h2>Update User Info</h2>
              <form id="update-form" onSubmit={handleUpdate}>
                <label htmlFor="displayName">New Name:</label>
                <input
                  type="text"
                  name="displayName"
                  value={state.displayName}
                  autoFocus
                  required
                  onChange={handleChange}
                />
                <br />
                <label htmlFor="password">New Password:</label>
                <input
                  type="text"
                  name="password"
                  value={state.password}
                  autoFocus
                  required
                  onChange={handleChange}
                />
                <br />
                <label htmlFor="about">New Bio:</label>
                <input
                  type="text"
                  name="about"
                  value={state.about}
                  autoFocus
                  required
                  onChange={handleChange}
                />
                <br />
                <br />
                <button onClick={() => updateuser(state.displayName, state.password, state.about, username)} type="submit">
                  Update Profile
          </button>
              </form>
            </div>
          </div>
        </div>
        <div>
          <div id="msgtitle">
            <center><h2>Your Messages</h2></center>
          </div>
          <div className='scrollBox' onScroll={handleScroll}>
            {messageList.map((message) => (
              <Message text={message.text}
                username={message.username}
                msgId={message.id}
                key={message.id}
                likes={message.likes}
                createdAt={message.createdAt}
                profile={true}
              />
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
