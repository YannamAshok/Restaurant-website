import React, { useState } from "react";
import { fetchData } from "../Fetch";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

export const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
    name: "",
  });

  const { name, email, password } = user;

  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    fetchData(
      "/user",
      {
        name,
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
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.message,
        })

        console.log(error);
      });
  };

  return (
    <div class="container h-100">
      <div class="row align-items-center h-100">
        <div class="col"></div>
        <div class="col h-100">
          <div class="card p-4 rounded mt-4">
            <h3>Register</h3>
            <form onSubmit={onSubmit}>
              <div class="mt-4">
                <input
                  type="name"
                  class="form-control"
                  placeholder="Enter username"
                  name="name"
                  required=""
                  onChange={onChange}
                />
              </div>

              <div class="mt-4">
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
                  onChange={onChange}
                  required=""
                />
              </div>
              <div class="mt-4">
                <button
                  type="submit"
                  value="submit"
                  class="btn btn btn-primary w-auto"
                >
                  Register
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
