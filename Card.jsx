import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IoPlayCircleSharp } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
import { RiThumbUpFill, RiThumbDownFill } from "react-icons/ri";
import { BiChevronDown } from "react-icons/bi";
import { BsCheck } from "react-icons/bs";

const Card = () => {
  const [onHovered, setOnHovered] = useState(false);
  const navigate = useNavigate();
  return (
    <CardContainer
      onMouseEnter={() => setOnHovered(true)}
      onMouseLeave={() => setOnHovered(false)}
    >
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaCor4AIV__zuNlgGZTSr424NdUudWBQKBrA&usqp=CAU"
        alt="Card Image"
        onClick={() => navigate("/Player")}
      />
      {onHovered && (
        <div className="hover">
          <div className="image-video-wrapper">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaCor4AIV__zuNlgGZTSr424NdUudWBQKBrA&usqp=CAU"
              alt="Card Image"
              onClick={() => navigate("/Player")}
            />
            <video
              src="https://res.cloudinary.com/ehizeex-shop/video/upload/v1668377666/NetflixApp/Action_mlw9wx.mp4"
              autoPlay
              controls
              loop
            />
            <div className="info-container">
              <h3 className="movieTitle" onClick={() => navigate("/Player")}>
                Red Notice
              </h3>
              <div className="icons">
                <div className="controls">
                  <IoPlayCircleSharp
                    title="play"
                    onClick={() => navigate("/Player")}
                  />
                  <RiThumbUpFill title="like" />
                  <RiThumbDownFill title="dislike" />
                  <AiOutlinePlus title="add to my list" />
                  <BsCheck title="remove from my list" />
                </div>
                <div className="info">
                  <BiChevronDown title="more info" />
                </div>
              </div>
              <div className="genres">
                <ul>
                  <li>Action</li>
                  <li>Comedy</li>
                  <li>Crime</li>
                  <li>Romance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </CardContainer>
  );
};
const CardContainer = styled.div`
  margin-top: 1rem;
  background-color: #e50914;
  max-width: 230px;
  width: 230px;
  height: 100px;
  cursor: pointer;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
    cursor: pointer;
    z-index: 10;
  }
  .hover {
    width: 20rem;
    height: max-content;
    border-radius: 5px;
    cursor: pointer;
    z-index: 99;
    position: absolute;
    top: -18vh;
    left: 0;
    border: 0.1rem solid gray;
    background-color: #181818;
    transition: 0.3s ease-in-out;
    .image-video-wrapper {
      width: 100%;
      height: 140px;
      position: relative;
      img {
        width: 100%;
        height: 150px;
        object-fit: cover;
        border-radius: 5px;
        top: 0;
        left: 0;
        z-index: 4;
        ${'' /* position: absolute; */}
        transition: 0.3s ease-in-out;
      }
      video {
        position: absolute;
        width: 100%;
        height: 150px;
        object-fit: cover;
        border-radius: 5px;
        top: 0;
        left: 0;
        z-index: 4;
        transition: 0.3s ease-in-out;
      }
      .info-container {
      display: flex;
      flex-direction: column;
      background-color: #181818;
      gap: 0.5rem;
      padding: 1rem;
      .movieTitle {
        color: #fff;
        font-size: 1.2rem;
      }
    }
    .icons {
      display: flex;
      gap: 1rem;
      justify-content: space-between;
      .controls {
        display: flex;
        gap: 0.5rem;
      }
      svg {
        cursor: pointer;
        transition: 0.3s ease-in-out;
        color: #fff;
        font-size: 1.5rem;
        border: 1px solid #b8b8b8;
        border-radius: 50%;
        &:hover {
          color: #b8b8b8;
        }
      }
      .info {
        svg {
          cursor: pointer;
          transition: 0.3s ease-in-out;
          color: #fff;
          font-size: 1.5rem;
          border: 1px solid #b8b8b8;
          border-radius: 50%;
        }
      }
    }
    .genres {
      display: flex;
      ul {
        display: flex;
        gap: 0.5rem;
        li {
          padding-right: 0.5rem;
          color: #fff;
          margin-right: 0.8rem;
        }
        li:first-of-type {
          list-style-type: none;
        }
      }
    }
    }
  }
`;
export default Card;
