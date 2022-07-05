import React from "react";

export const Sidebar = ({user}) => {
  return (
    <nav id="sidebar" className="text-white bg-dark">
      {/* <div className="sidebar-header">
        <h3>Rubrik</h3>
      </div>
      <a href="/" class="d-flex align-items-center ms-2 mb-2 mb-md-0 me-md-auto text-white text-decoration-none">
        <h3 class="fs-4">Rubrik</h3>
      </a>
      <hr></hr> */}

      <ul className="nav nav-pills flex-column mb-auto p-2">
        <img
          src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
          width="125" className="rounded-circle mx-auto d-block shadow-4"
          alt="Avatar"
        />
        <p className="text-center text-white mt-2">Welcome {user?.name}</p>
        <li  className="nav-item">
          <a href="#homeSubmenu" className="nav-link active"  data-toggle="collapse" aria-expanded="false">
            Feeds
          </a>
        </li>
        <li className="nav-item">
          <a href="#pageSubmenu" className="nav-link" data-toggle="collapse" aria-expanded="false">
            profile
          </a>
        </li>
        <li className="nav-item">
          <a href="/dashboard" className="nav-link">Explore</a>
        </li>
        <li className="nav-item">
          <a href="/dashboard" className="nav-link">Settings</a>
        </li>
      </ul>
    </nav>
  );
};
