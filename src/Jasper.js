import React from "react";
import HTMLFlipBook from "react-pageflip";
import { useRef,useState,useEffect } from "react";
import image12 from "./images/IMG_6989.JPG";
import image1 from './images/IMG_8001.JPG'
import image2 from './images/IMG_5857.JPG'
import image3 from './images/IMG_4542.JPG'
import image4 from  './images/IMG_6432 copy.jpg'
import image5 from './images/IMG_5530.JPG'
import image6 from './images/IMG_1923 2.JPG'
import image7 from './images/IMG_5770.JPG'
import image8 from './images/IMG_8864.JPG'
import image9 from './images/IMG_6425.JPG'
import image10 from './images/IMG_2685.JPG'
import "/Users/test/Downloads/callapp/callaoo/src/flipbook.css";
import { Link } from "react-router-dom";
import Confetti from "react-confetti";
import music from './music/utomp3.com - John K  ilym Lyrics.mp3'
export default function Jasper() {
  const book = useRef();
  const audioRef = useRef(null); // Reference for the audio element
  const [isPlaying, setIsPlaying] = useState(false); // Track play/pause state
  const [currentPage, setCurrentPage] = useState(0); // Track current page
  const totalPages = 11; // Total number of pages

  const handleFlip = (page) => {
    setCurrentPage(page); // Update the current page index
  };
  const pages = [
    {
      title: "Happy birthday love",
      image: image1,
      content:
       "I created this custom website for you so you won't lose these cards. Play music for the complete experience."
    },

    {
      title: "First abroad holiday",
      image: image12,
      content:
      "Our first holiday abroad together, despite the issue I had with Jet2holidays, was such a great memory with you babe."
    },
    {
      title: "Your fav pic style",
      image: image2,
      content:
      "We have a few pictures like this. I know you enjoy taking them with me—it shows how free we are with each other."
    },
    {
      title: "First time in stoke",
      image: image3,
      content:
        "First time you visited your fav place out of all the places we've lived together, you thought I  bite  but look at you now 🤣🤣 .",
    },
    {
      title: "Fleetwood memory",
      image: image4,
      content:
        " My favorite memory in fleetwood was the day I gave you a surpirsed visit, love the smiles on your face and hope to keep them forever ❤️❤️",
    },
    {
      title: "First time in london",
      image: image5,
      content:
        "First time in  london together, barely two month we've known each other. Thanks for taking the leap of faith with me  ❤️❤️.",
    },
    {
      title: "After proposal",
      image:image6,
      content:
        "Few days after I proposed, thought we moved to the next level  of our love, I  love you scatter ❤️❤️. ",
    },
    {
      title: "Fun night",
      image: image7,
      content:
        "We've been to numerous resturant together but this was the night you got drunk, was quite fun and I enjoyed it, make I laugh small 🤣🤣 ",
    },
    {
      title: "Demure pregnant woman ",
      image: image8,
      content:
        "Still maintaining your beauty on your journey to turning me to a dad, its a priceless moment for me  ❤️❤️.",
    },
    {
      title: "Deal sealed",
      image: image9,
      content:
        "The beuatiful day we signed the contract of forever, nothing has changed since then  apart from loving you more ❤️❤️ ",
    },
    {
      title: 'cheers to forever Jeane',
      image: image10,
      content:
        "The whole internet won't be enough to to tell the story. I love you more than the bad days ahead ❤️❤️",
    },

    
  ];

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

 
  return (
    <>
      <Confetti width={window.innerWidth} height={window.innerHeight} color={"#FF5722"} />
      <div className="book-container">
        <HTMLFlipBook
          ref={book}
          width={400}
          height={600}
          className="flipbook"
          onFlip={(e) => handleFlip(e.data)} // Update current page on flip
        >
          {pages.map((page, index) => (
            <div className="page" key={index}>
              <h3 className="page-title">{page.title}</h3>
              <img src={page.image} alt={`Page ${index + 1}`} className="page-image" />
              <p className="page-content">{page.content}</p>
              <h2 className="count">
                {index + 1}/{totalPages}
              </h2>
            </div>
          ))}
        </HTMLFlipBook>

        <div className="jastper-btn-con">
          <button onClick={() => book.current.pageFlip().flipPrev()}>Prev</button>
          {currentPage < totalPages - 1 && (
            <button onClick={() => book.current.pageFlip().flipNext()}>Next</button>
          )}
          <Link to={"/"}>
            <button>Home</button>
          </Link>
          <button onClick={togglePlayPause}>
            {isPlaying ? "Pause ⏸️" : "Play Music"}
          </button>
          <audio ref={audioRef} src={music} />
        </div>
      </div>
    </>
  );
}
