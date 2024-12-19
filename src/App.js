import React, { useState,useEffect,useRef } from "react";
import Confetti from "react-confetti";
import "./App.css";
import image1 from './images/bgimages/1af0af50-7821-449f-8ab1-dc5f5ffd3fed.JPG'
import image2 from './images/bgimages/2fc8f140-11b0-41e9-a305-996a1d6aab91.JPG'
import image3 from './images/bgimages/3a25267e-913f-4041-a40b-1fecb2d59060.JPG'
import image4 from './images/bgimages/3b080f6a-ba49-4b06-a5dd-3bf7846541c0.JPG'
import image5 from './images/bgimages/3c35f5e6-38a7-406b-81c4-d2ddffaea32b.JPG'
import image6 from './images/bgimages/9d2d98b0-307b-4cec-835d-65645a5a068b.JPG'
import image7 from './images/bgimages/9e503fbd-790d-4d5e-b108-b7870a37c197.JPG'
import image8 from './images/bgimages/36ff3f16-10df-480f-9db8-ebeb59214b8b.JPG'
import image9 from './images/bgimages/WhatsApp Image 2024-12-11 at 22.44.51.jpeg'
import image10 from './images/bgimages/WhatsApp Image 2024-12-11 at 22.50.18.jpeg'
import image11 from './images/bgimages/37330228-0266-4ab9-994d-eac7d848eca7.JPG'
import image12 from './images/bgimages/d50c24a3-9074-42a0-90fb-372f984d6093.JPG'
import musicFile from './music/happy-birthday-220024.mp3'
import { Link } from "react-router-dom";




const SimpleForm = () => {
  const images = [
   image1,image2,image3,image4,image5,image6,image7,image8,image9,image10,image11,image12
  ];

  const [birthday,setBirthday]=useState(false)
  const [jasperMessage, setJasperMessage] = useState(false)

  const audioRef = useRef(null); // Reference for the audio element
  const [isPlaying, setIsPlaying] = useState(false); // Track play/pause state

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    // Calculate total animation time
    const totalAnimationTime = images.length * 0.5 * 1200; // Each image drops after 0.5 seconds

    // Show birthday message after animations finish
    const timer = setTimeout(() => {
      setBirthday(true);
    }, totalAnimationTime);

    // Clear timeout on component unmount
    return () => clearTimeout(timer);
  }, [images.length]);


  function handleJasperClick (){
    setJasperMessage(true)
  }
  return (
    <div>
      
        <div>
          <div className="image-container">
            {images.map((src, index) => (
              <div className="images-con" key={index}>
                <img
                  src={src}
                  alt={` ${index + 1}`}
                  className="drop-animation"
                  style={{ animationDelay: `${index * 0.5}s` }} // Delay each image drop  
                />
              </div>
            ))}
          </div>

          {birthday && (
            <>
              <Confetti width={window.innerWidth} height={window.innerHeight} />
              <div className="details-con">
                <h2 style={{ color: 'black' }}>Happy Birthday wifey 😘🎂!</h2>
                <div className="btn-con">
                  <div>
                    <h6 style={{ color: 'black', fontSize: "12px" }}>Birthday Wishes</h6>
                  </div>
                  <Link to={'/jasper'}>
                  <button onClick={handleJasperClick}>Jasper ❤️</button>
                  </Link>
         
         <a href="https://go.screenpal.com/watch/cZlq31nnW2n" target="blank"><button>Family 👨‍👩‍👧‍👦 & Friends 👭</button></a>
        

                  <button onClick={togglePlayPause}> {isPlaying ? "Pause ⏸️" : "Play 🎶"} </button>
                  <audio ref={audioRef} src={musicFile} />
                </div>
              </div>
            </>
          )}
        </div>
  
    </div>
  );
};
export default SimpleForm;
