import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";
import React, { useState, useEffect } from "react";
import "./Login.scss";
const Login = () => {
  //signIN
  const [email_in, signinsetEmail] = useState("");
  const [password_in, signinsetPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email_in, password_in)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  //signUP
  const [email, signupsetEmail] = useState("");
  const [password, signsetPassword] = useState("");

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const signUpButton = document.getElementById("signUp");
    const signInButton = document.getElementById("signIn");
    const container = document.getElementById("container");

    signUpButton.addEventListener("click", () => {
      container.classList.add("right-panel-active");
    });

    signInButton.addEventListener("click", () => {
      container.classList.remove("right-panel-active");
    });

    return () => {
      signUpButton.removeEventListener("click", () => {
        container.classList.add("right-panel-active");
      });

      signInButton.removeEventListener("click", () => {
        container.classList.remove("right-panel-active");
      });
    };
  }, []);

  return (
    <>
      <div className="container" id="container">
        <div className="form-container sign-up-container">
          <form onSubmit={signUp}>
            <h1>Create Account</h1>
            <div className="social-container">
              <i className="fab fa-google-plus-g">
                <img
                  src="./google-logo.png"
                  alt="google_logo"
                  className="google-logo"
                />
              </i>
            </div>
            <span>or use your email for registration</span>
            <input
              type="email"
              placeholder="Email"
              autoComplete="email"
              onChange={(e) => signupsetEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              autoComplete="current-password"
              onChange={(e) => signsetPassword(e.target.value)}
              required
            />
            <button type="submit">Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form onSubmit={signIn}>
            <h1>Sign in</h1>
            <div className="social-container">
              <i className="fab fa-google-plus-g">
                <img
                  src="./google-logo.png"
                  alt="google_logo"
                  className="google-logo"
                />
              </i>
            </div>
            <span>or use your account</span>
            <input
              type="email"
              placeholder="Email"
              autoComplete="email"
              onChange={(e) => signinsetEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              autoComplete="current-password"
              onChange={(e) => signinsetPassword(e.target.value)}
              required
            />
            <button type="submit">Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button className="ghost" id="signIn">
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className="ghost" id="signUp">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
