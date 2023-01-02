import React from "react";
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";
import db from './firebase';
import { useState,useEffect } from "react";
import { collection, query, getDocs } from "firebase/firestore"; 
import { getDefaultAppConfig } from "@firebase/util";

function Feed() {
  const [posts,setPosts] = useState([]);

  useEffect(() => async function (){
    const querySnapshot = await getDocs(collection(db, "posts"));
    setPosts(querySnapshot.docs.map((doc)=> ({id : doc.id, data : doc.data() })))
  },[])

  console.log(posts)
  return <div className = "feed">
    <StoryReel />
    <MessageSender />
    {posts.map((post) => (<Post key = {post.data.id} message = {post.data.message} timestamp = {post.data.timestamp} username = {post.data.username} image = {post.data.image}  profilePic={post.data.profilePic}/>))}

  </div>;
}

export default Feed;
