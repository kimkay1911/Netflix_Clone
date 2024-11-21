import React from "react";
import { AiOutlineLogout } from "react-icons/ai";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { firebaseAuth } from "../Utils/Firebase-config";
import { signOut, onAuthStateChanged } from "firebase/auth";

const TopNav = ({isScrolled}) => {
  const navLinks = [
    { name: "Home", link: "/" },
    { name: "Sign Up", link: "/signup" },
    { name: "Movie Page", link: "/moviepage" },
    { name: "Player", link: "/player" },
  ];

  const navigate = useNavigate();
  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (!currentUser) navigate("/login");
  });
  return (
    <NavContainer>
     <nav className={`${isScrolled ? "scrolled" : "notScrolled"}`}>
      <div className="leftSide">
        <div className="logo">
            <img src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1668265433/NetflixApp/2560px-Netflix_2015_logo.svg_rbicwl_knwp6f.png"
            alt="Netflix Logo"/>
        </div>
        <div className="links">
            {navLinks.map(({name, link})=>{
                return (
                    <li key={name}><Link to={link}>{name}</Link></li>
                )
            })}
        </div>
      </div>
      <div className="rightSide">
        <button onClick={() => signOut(firebaseAuth)}>
          <AiOutlineLogout />
        </button>
      </div>
      </nav>
    </NavContainer>
  );
};

const NavContainer = styled.div`
    .notScrolled{
        display: flex;
    }
    .scrolled{
        display: flex;
        background-color: black;
    }
    nav {
        position: sticky;
        display: flex;
        justify-content: space-between;
        align-items: center;
        top: 0;
        left: 0;
        height: 6rem;
        width: 100%;
        background-color: black;
        z-index: 2;
        position: fixed;
        padding: 0.4rem;
        transition: 0.5s ease-in-out;
        .leftSide {
            display: flex;
            align-items: center;
            gap: 2rem;
            .logo {
                img {
                    height: 3rem;
                    width: 10rem;
                    padding: 2rem;
                }
            }
            .links {
                display: flex;
                gap: 3rem;
                li {
                    list-style-type: none;
                    a {
                        color: white;
                        text-decoration: none;
                    }
                }
            }
    }
    .rightSide {
        button {
            padding: 0.2rem;
            border: none;
            background-color: #e50914;
            color: #fff;
            cursor: pointer;
            width: 2rem;
            height: 2rem;
            outline: none;
            border-radius: 50%;
            font-weight: bolder;
            font-size: 2.05rem;
            margin: 1rem auto;
            margin-right: 2rem;
        }
        button:hover {
            ${'' /* opacity: 0.8; */}
            color: #e50914;
      background-color: #fff;
      transition: 0.5s ease-in;
        }
    }
`;
export default TopNav;
