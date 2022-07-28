import { useState, useEffect } from 'react';
import './App.css';
import Video from './components/Video/Video';
import db from './firebase';
import { collection, getDocs } from 'firebase/firestore';



function App() {

  const [videos, setVideos] = useState([]);

  useEffect(() => {

    const colRef = collection(db, 'videos'); //collection reference
        getDocs(colRef)
          .then((snapshot) => {
            setVideos(snapshot.docs.map((doc) => doc.data()))
            // console.log(videos)
          });

    // const querySnapshot = getDocs(collection(db, 'videos'));
    // querySnapshot.forEach((doc) => {
    //   console.log(doc.id , "=>", doc.data()); 
    // });


  }, []);

  return (

    <div className="app">

        <div className="appVideos">

          { videos.map(({url, channel, description, song, likes, messages, shares}, index) => {
              return (
                  <Video
                    key={index}
                    url={url}
                    channel={channel}
                    description={description}
                    song={song}
                    likes={likes}
                    messages={messages}
                    shares={shares}
                  />
              )
          })}
            
        </div>

    </div>

  );
};

export default App;
