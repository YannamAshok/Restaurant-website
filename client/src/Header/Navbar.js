import React from "react";
import { Link } from "react-router-dom";

export const Navbar = ({user}) => {

  const logout=()=>{
    localStorage.clear()
  }

  console.log(user);
  return (
    <nav class="navbar navbar-expand-lg navbar-light " style={{backgroundColor:"#e3f2fd"}}>
      <div class="container-fluid">
        <a class="navbar-brand fw-bold" href="#">
          Rubrik
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          {user ? (
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="index.html"
                >
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="index.html"
                >
                  {user.name}
                </a>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/login" onClick={()=>{
                  logout()
                }}>
                  Logout
                </Link>
              </li>
            </ul>
          ) : (
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="index.html"
                >
                  Home
                </a>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/register">
                  Register
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/login">
                  Login
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};
