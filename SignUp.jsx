import React, { useState } from "react";
import styled from "styled-components";
import { firebaseAuth } from "../Utils/Firebase-config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import Header from "../Components/Header";
import BackgroundImage from "../Components/BackgroundImage";
import { useNavigate } from "react-router-dom";



const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formValues, setFormValues] = useState({ email: "", password: "" });

  const handleSignIn = async () => {
    try {
      const { email, password } = formValues;
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.log(error);
    }
  };

  const navigate = useNavigate();
  onAuthStateChanged(firebaseAuth, currentUser => {
    if (currentUser) navigate ('/')
  })
  return (
    <div>
      <Container>
        <BackgroundImage />
        <div className="content">
          <Header login />
          <div className="body">
            <div className="text">
              <h1>Unlimited movies, TV shows and more.</h1>
              <h4>Watch anywhere. Cancel anytime.</h4>
              <h6>
                Ready to watch? Enter your email to create or restart your
                membership.
              </h6>
            </div>
            <div className="form">
              {showPassword ? (
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={formValues.password}
                  onChange={(e) =>
                    setFormValues({
                      ...formValues,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
              ) : (
                <input
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  value={formValues.email}
                  onChange={(e) =>
                    setFormValues({
                      ...formValues,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
              )}

              {showPassword ? (
                <button onClick={handleSignIn}>Sign Up</button>
              ) : (
                <button onClick={() => setShowPassword(true)}>
                  Get Started
                </button>
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
const Container = styled.div`
  position: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.7);
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-col: 15vh 85vh;
  }
  .body {
    display: flex;
    flex-direction: column;
    ${'' /* justify-content: center; */}
    align-items: center;
    gap: 1rem;
  }
  .text {
    font-family: "Netflix Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    color: #fff;
    text-align: center;
  }
  .text h1 {
    font-size: 3rem;
    font-weight: 500;
    margin-bottom: 0;
  }
  .text h4 {
    font-size: 2rem;
    font-weight: 400;
    padding: -1rem;
    margin-top: 0;
  }
  .text h6 {
    font-size: 1.5rem;
    font-weight: 400;
    padding: -1rem;
    margin-top: 0;
  }
  .form {
    display: grid;
    grid-template-columns: ${({ showPassword }) =>
      showPassword ? "1fr 1fr" : "2fr 1fr"};
    ${"" /* gap: 1rem; */}
  }
  .form input {
    padding: 0.75rem;
    color: black;
    border: none;
    outline: none;
    font-size: 16px;
    width: 25rem;
    border-radius: 0.2rem;
  }
  .form button {
    background-color: #e50914;
    cursor: pointer;
    color: #fff;
    border: none;
    border-radius: 0.2rem;
    font-weight: bolder;
    font-size: 1.05rem;
    width: 10rem;
    outline: none;
  }

  ${
    "" /* .form button {
    padding: 0.5rem;
    border: none;
    background-color: #e50914;
    color: #fff;
    cursor: pointer;
    width: 10rem;
    outline: none;
    border-radius: 0.2rem;
    font-weight: bolder;
    font-size: 1.05rem;
    margin: 1rem auto;
  } */
  }
  .form button:hover {
    opacity: 0.6;
    transition: 0.2s ease-in;
  }
`;
export default SignUp;
