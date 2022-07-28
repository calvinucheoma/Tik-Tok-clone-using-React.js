import React from 'react';
import './VideoFooter.css';
import { MusicNote } from '@mui/icons-material';
// import Ticker from 'react-ticker';


const VideoFooter = ({channel, description, song}) => {

  return (

    <div className='videoFooter'>

        <div className="videoFooterText">

            <h3> @{channel} </h3>
            <p> {description} </p>

            <div className="videoFooterTicker">

                <MusicNote className='videoFooterIcon' />

                  <div className='scrollingText'>
                    <p> {song} </p>
                  </div>
                  

                {/* <Ticker mode="smooth">
                    {
                      ({index}) => (
                        <>
                            <p>Duuude</p>
                        </>
                      )
                    }
                </Ticker> */}

            </div>

        </div>

        <img 
          className='videoFooterRecord' 
          src="https://static.thenounproject.com/png/934821-200.png" alt="Record label" 
        />

    </div>

  )

};

export default VideoFooter;