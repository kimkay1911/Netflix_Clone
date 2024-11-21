import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { firebaseAuth } from "../Utils/Firebase-config";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import styled from "styled-components";
import Header from "../Components/Header";
import BackgroundImage from "../Components/BackgroundImage";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogIn = async () => {
    try {
      await signInWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.log(error);
    }
  };
  const navigate = useNavigate();
  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate("/");
  });
  return (
    <Wrapper>
      <BackgroundImage />
      <div className="loginContent">
        <Header />
        <div className="form-wrapper">
          <div className="form">
            <div className="title">
              <h1>Login</h1>
            </div>
            <div className="container">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email Address"
              />
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
              />
              <button onClick={handleLogIn}>Login</button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  position: relative;
  .loginContent {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.6);
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-col: 15vh 85vh;
  }
  .form-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    justify-content: center;
    height: 85vh;
    gap: 2rem;
  }
  .form {
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    background-color: rgba(0, 0, 0, 0.85);
    height: 70vh;
    border-radius: 0.5rem;
    width: 25vw;
    color: #fff;
  }
  .container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    input {
      padding: 0.5rem;
      border-radius: 0.2rem;
      border: none;
      outline: none;
      font-size: 1rem;
      height: 3rem;
      width: 20rem;
    }
    button {
      background-color: #e50914;
      color: #fff;
      padding: 0.75rem;
      border: none;
      border-radius: 0.2rem;
      cursor: pointer;
      width: 20rem;
      outline: none;
      font-weight: bolder;
      font-size: 1.05rem;
      margin: 1rem auto;
    }
    button:hover {
      opacity: 0.6;
      transition: 0.2s ease-in;
    }
  }
`;
export default LoginPage;
