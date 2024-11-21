import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import {BsArrowLeftShort} from 'react-icons/bs'

const Player = () => {
  const navigate = useNavigate();
  return (
    <PlayerComponent>
      <div className='player'>
        <div className='arrow'>
          <BsArrowLeftShort className='icon' onClick={()=>navigate(-1)}/>
        </div>
        <div>
          <video src='https://res.cloudinary.com/ehizeex-shop/video/upload/v1668377666/NetflixApp/Action_mlw9wx.mp4'
            autoPlay
            controls
            loop
          />
        </div>
      </div>
    </PlayerComponent>
  )
}
const PlayerComponent = styled.div `
.player{
  height: 100vh;
  width: 100vw;
  .arrow{
    position: absolute;
    top: 1rem;
    left: 1rem;
    z-index: 1;

  }
  .icon{
    color: #fff;
    font-size: 3rem;
    cursor: pointer;
  }
}
video{
    height: 100vh;
    width: 100vw;
  }
`
export default Player