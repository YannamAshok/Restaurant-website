import React from "react";

export const Sidebar = ({user}) => {
  return (
    <nav id="sidebar">
      <div className="sidebar-header">
        <h3>Rubrik</h3>
      </div>

      <ul className="list-unstyled components">
        <img
          src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
          class="rounded-circle shadow-4"
          style={{width:"150px"}}
          alt="Avatar"
        />
        <p>Welcome {user?.name}</p>
        <li className="active">
          <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false">
            Feeds
          </a>
        </li>
        <li>
          <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false">
            profile
          </a>
        </li>
        <li>
          <a href="#">Explore</a>
        </li>
        <li>
          <a href="#">Settings</a>
        </li>
      </ul>
    </nav>
  );
};
