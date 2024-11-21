import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Header = (props) => {
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      <div className='logo'>
        <img alt='Netflix logo' src='https://res.cloudinary.com/ehizeex-shop/image/upload/v1668265433/NetflixApp/2560px-Netflix_2015_logo.svg_rbicwl_knwp6f.png'/>
      </div>
      <button onClick={()=>navigate(props.login ? '/login' : '/signup')}>
        {props.login ? 'Log In' : 'Sign In'}
      </button>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4rem;
  .logo{
    img{
      height: 3rem;
      cursor: pointer;
    }
  }
  button{
      padding: 0.5rem 1rem;
      border-radius: 5px;
      background-color: #e50914;
      color: white;
      font-weight: bold;
      cursor: pointer;
      border: 1px solid #e50914;
    }
`
export default Header