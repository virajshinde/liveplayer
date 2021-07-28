import React, {useRef,useEffect} from 'react'
import ReactDOM from 'react-dom'
import Plyr from 'plyr';
import 'plyr/dist/plyr.css'
const video = 'video.mp4'




 

const Player = () => {
    
     useEffect(() => {
    const textInput = window.document.getElementById('player')

    const player = new Plyr(textInput, {
        autoplay: true,
        muted:false,
        controls: [
            'play-large', // The large play button in the center
            'restart', // Restart playback
            'rewind', // Rewind by the seek time (default 10 seconds)
            'play',
            'fast-forward', // Fast forward by the seek time (default 10 seconds)
            'progress', // The progress bar and scrubber for playback and buffering
            'current-time', // The current time of playback
            'duration', // The full duration of the media
            'mute', // Toggle mute
            'volume', // Volume control
            'captions', // Toggle captions
            'settings', // Settings menu
            'pip', // Picture-in-picture (currently Safari only)
            'airplay', // Airplay (currently Safari only)
            'download', // Show a download button with a link to either the current source or a custom URL you specify in your options
            'fullscreen', // Toggle fullscreen

            
        ]
       
      })

      var currentDate = new Date();  
      var seconds = currentDate.getMinutes()
      console.log(seconds)
      console.log(seconds*60)

      console.log(player)
    //   loadTime = new Date().getTime() / 1000;
      player.once('canplay',() =>{
        // console.log('PLayed')
       
      var dur = player.duration 
     
      player.currentTime = seconds*60
      player.play()
        
    })
    
})
  
return(
        <div>
            <div >
            <video id="player" playsInline controls data-poster="/path/to/poster.jpg" autoPlay muted>
            <source src={video} type="video/mp4" />
            <source src="/path/to/video.webm" type="video/webm" />
            <track kind="captions" label="English captions" src="/path/to/captions.vtt" srcLang="en" default />
            </video>
            </div>
        </div>
        
    )
}

export default Player