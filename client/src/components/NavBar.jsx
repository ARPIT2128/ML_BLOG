import React, { useEffect, useState } from "react";
import "./NavBar.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

function NavBar() {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out successful");
      })
      .catch((error) => console.log(error));
  };

  return (
    <nav className="navbar-login bg-body-tertiary">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <Link to="/" className="navbar-brand">
          <img
            src="/icon.png"
            alt="Logo"
            className="d-inline-block align-text-center"
          />
          THE NEURAL NEWS
        </Link>
        <ul className="navbar-nav flex-row">
          <li className="nav-item p-2">
            <Link to="/Explore" className="nav-link">
              Explore
            </Link>
          </li>

          <li className="nav-item p-2">
            <Link to="/Login" className="nav-link">
              Login
            </Link>
          </li>
          <li className="nav-item p-2">
            {authUser ? (
              <div className="auth-details-container">
                <Link className="nav-link" onClick={userSignOut}>
                  Sign Out
                </Link>
                <p>{`Signed In as ${authUser.email}`}</p>
              </div>
            ) : (
              <p>Signed Out</p>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default NavBar;
