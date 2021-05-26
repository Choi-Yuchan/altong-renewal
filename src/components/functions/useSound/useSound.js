import { useRef, useState, useEffect } from 'react';

//keysound on/off function
const useSound = (url, toggle) => {
    const element = useRef();
    const [audio] = useState(new Audio (url))
  
    const makeAudio = document.body.appendChild(audio);
  
    const bleep = () => {
      makeAudio.play();
    }

    useEffect(() => {
      if(toggle){
        window.addEventListener('keydown', bleep);
      } 
      return () => {
        if(toggle){
          window.removeEventListener('keydown', bleep);
        }
      }
    },[toggle]);
  
    return element;
  }

  export default useSound;