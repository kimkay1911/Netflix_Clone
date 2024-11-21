import React, { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";
import { AiOutlineInfoCircle } from "react-icons/ai";
import {FaPlay} from 'react-icons/fa'
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import TopNav from "../Components/TopNav";
import Card from "../Components/Card";
import { fetchMovies, getGenres } from "./Index";
import SliderContainer from "../Components/SliderContainer";



 const Netflix = () => {
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const genresLoaded = useSelector((state) => state.netflix);
  const movies = useSelector((state) => state.netflix.movies);

  useEffect(()=>{
    getGenres(dispatch);
  }, [])

  useEffect(() => {
    
    if(genresLoaded){ 
      dispatch(fetchMovies({type: "all"}))
  }})
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.scrollY === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <HeroContainer>
      <div className="hero">
        <TopNav isScrolled={isScrolled} />
        <img
          src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1668267540/NetflixApp/avengers-age-of-ultron-team-together-poster-wallpaper-1600x600-92751_84_qvwbif.jpg"
          alt="Netflix Background"
          className="backgroundImage"
        />
      </div>
      <div className="container">
        <div className="title">
          <h1>Super man</h1>
          <p>
            Superman has appeared in countless comic books, television series,
            films, and animated shows. Actors like Christopher Reeve, Henry
            Cavill, and Brandon Routh have famously portrayed him on the big
            screen, each bringing a unique interpretation to the character.
            Superman’s story and character have inspired generations of fans and
            have become a cornerstone of superhero fiction. With his unshakable
            sense of duty, Superman continues to serve as an inspiration and a
            symbol of hope in popular culture, proving that even in the face of
            adversity, good can prevail.
          </p>
        </div>
        <div className="buttons">
          <button onClick={() => navigate("/player")} className="playBtn">Play</button>
          <button className="moreBtn">More Info</button>
        </div>
      </div>
      <SliderContainer movies={movies} />
    </HeroContainer>
  );
};
const HeroContainer = styled.div`
  .backgroundImage{
    background: rgba(0, 0, 0, 0.6);
    filter: brightness(40%);
  }
  .hero {
    position: relative;
    img{
      height: 100vh;
      width: 100vw;
    }
  }
  .container{
    position: absolute;
    bottom: 1.5rem;
  }
  .title{
    color: #fff;  
    margin-left: 2rem;
    h1{
      font-size: 73px;
      background: -webkit-linear-gradient(#eee, rgb(128, 13, 13));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
    }
    p{
      width: 650px;
      line-height: 1.3;
      font-size: 18px;
      text-shadow: 0 0 5px #000;
    }
  }
  .buttons{
    margin-left: 2rem;
    margin-top: 2rem;
    .playBtn{
      padding: 0.5rem 2rem;
      border: 2px solid #fff;
      background-color: #e50914;
      color: #fff;
      cursor: pointer;
      font-weight: bolder;
      font-size: 1.05rem;
      margin-right: 1rem;
      border-radius: 0.5rem;
    }
    .moreBtn{
      background-color: rgba(255, 255, 255, 0.1);
      color: #e50914;
      padding: 0.5rem 2rem;
      border: 2px solid #e50914;
      cursor: pointer;
      font-weight: bolder;
      font-size: 1.05rem;
      margin-right: 1rem;
      border-radius: 0.5rem;
    }
     .playBtn:hover{
      color: #e50914;
      background-color: rgba(255, 255, 255, 0.1);
      border: 2px solid #e50914;
      transition: 0.5s ease-in;
  }
    .moreBtn:hover{
      color: #fff;
      background-color: #e50914;
      transition: 0.5s ease-in;
      border: 2px solid #fff;
    }
  }`;
export default Netflix;
