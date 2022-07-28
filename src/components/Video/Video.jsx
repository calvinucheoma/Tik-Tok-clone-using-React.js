import React, {useRef, useState} from 'react';
import './Video.css';
import VideoFooter from '../VideoFooter/VideoFooter';
import VideoSidebar from '../VideoSidebar/VideoSidebar';


const Video = ({url, channel, description, song, likes, messages, shares}) => {

  const videoRef = useRef(null);

  const [playing, setPlaying] = useState(false);

  const onVideoPress = () => {

    if (playing) {
        videoRef.current.pause();
        setPlaying(false);
    } else {
        videoRef.current.play();
        setPlaying(true);        
    }
  
  };

  return (

    <div className='video'>

        <video
            className='videoPlayer'
            loop
            ref={videoRef}
            onClick={onVideoPress}
            src={url}
        ></video>

        <VideoFooter channel={channel} description={description} song={song} />

        <VideoSidebar likes={likes} messages={messages} shares={shares} />        

    </div>

  )

};

export default Video;