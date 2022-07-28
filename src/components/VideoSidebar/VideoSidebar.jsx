import React, { useState } from 'react';
import './VideoSidebar.css';
import { FavoriteBorder, Favorite, Chat, Share } from '@mui/icons-material';


const VideoSidebar = ({likes, shares, messages}) => {

  const [liked, setLiked] = useState(false);

  return (

    <div className='videoSidebar'>

        <div className="videoSidebarIcons">
            {
              liked ? (
                     <Favorite onClick={(e) => setLiked(false)} fontSize="medium" />
                   ) : (
                     <FavoriteBorder onClick={(e) => setLiked(true)} fontSize="medium"/>
                    )
            }   
            <p> {liked ? likes + 1: likes} </p>
        </div>

        <div className="videoSidebarIcons">
            <Chat fontSize="medium"/>
            <p> {messages} </p>
        </div>

        <div className="videoSidebarIcons">
            <Share fontSize="medium" />
            <p> {shares} </p>
        </div>
        
    </div>

  )

};

export default VideoSidebar;