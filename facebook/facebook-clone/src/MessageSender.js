import React from 'react';
import './MessageSender.css';
import { Avatar } from '@material-ui/core';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useState } from 'react';
import { useStateValue } from './StateProvider';
import { collection, doc, serverTimestamp, setDoc } from "firebase/firestore"; 
import db from './firebase';


function MessageSender() {
    const [{user}, dispatch] = useStateValue();

    const [input,setInput] = useState("");
    const [imageUrl, setImageUrl] = useState("")
    const handleSubmit = (e) =>
    {
        e.preventDefault();
        
        const docRef = doc(collection(db, "posts"));
        setDoc(docRef, {
            message : input,
            timestamp : serverTimestamp(),
            profilePic : user.photoURL,
            username : user.displayName,
            image : imageUrl,
        });



  

     
    }

  return (
    <div className='MessageSender'>
      <div className="messageSender__top">
        <Avatar src = {user.photoURL}/>
        <form>
            <input value = {input} onChange={ (e) => setInput(e.target.value)} className='messageSender__input' placeholder={`what's on your mind?, ${user.displayName}`} />
            <input value = {imageUrl} onChange = {(e) => setImageUrl(e.target.value)} type="text" placeholder='image URL (Optional)'/>
            <button onClick={handleSubmit} type = "submit">Hidden Submit</button>
        </form>
      </div>
      <div className="messageSender__bottom">
        <div className="messageSender__option">
            <VideocamIcon style = {{color : "red"}} />
            <h3>Live Video</h3>
        </div>

        <div className="messageSender__option">
            <PhotoLibraryIcon style = {{color : "red"}}/>
            <h3>Photo/Video</h3>
        </div>
        <div className="messageSender__option">
        <InsertEmoticonIcon style = {{color : "orange"}}/>
        <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  )
}

export default MessageSender
