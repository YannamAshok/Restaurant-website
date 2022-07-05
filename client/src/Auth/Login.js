import React, { useState } from "react";
import { fetchData } from "../Fetch";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    fetchData(
      "/auth",
      {
        email,
        password,
      },
      "POST"
    )
      .then((data) => {
        localStorage.setItem("user", JSON.stringify(data));
        navigate("/dashboard");
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div class="container">
      <div class="row align-items-center">
        <div class="col"></div>
        <div class="col">
          <div class="card p-4 rounded mt-4">
            <h3>Login</h3>
            <form action="#" method="post" onSubmit={onSubmit}>
              <div class=" mt-4">
                <input
                  type="email"
                  class="form-control"
                  placeholder="Enter email"
                  name="email"
                  required=""
                  onChange={onChange}
                />
              </div>
              <div class="mt-4">
                <input
                  type="password"
                  class="form-control"
                  placeholder="Enter password"
                  name="password"
                  required=""
                  onChange={onChange}
                />
              </div>
              <div class=" mt-4">
                <button
                  type="submit"
                  value="submit"
                  class="btn btn btn-primary w-auto"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
        <div class="col"></div>
      </div>
    </div>
  );
};
