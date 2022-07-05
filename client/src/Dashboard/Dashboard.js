import React, { useEffect, useState } from "react";
import { deltetData, fetchData, getData } from "../Fetch";
import { Navbar } from "../Header/Navbar";
import { Sidebar } from "./Sidebar";
import moment from 'moment'
export const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [text, setText] = useState("");
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user"));
    setUser(user);
    getPosts(user._id);
  }, []);

  const getPosts = (id) => {
    setLoading(true);
    getData(`/posts/${id}`, null, "GET")
      .then((data) => {
        setPosts(data);
        setLoading(false);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log(posts);

  const addPost = () => {
    fetchData(
      `/posts/${user._id}`,
      {
        text,
      },
      "POST"
    )
      .then((data) => {
        setPosts([...posts, data]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deletePost=(id)=>{
    setLoading(true);
    deltetData(`/posts/${id}`,"DELETE")
      .then((data) => {
       let  filtredData=posts.filter((post)=>{
          return post._id !=id
        })
        setPosts(filtredData)

        setLoading(false);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="wrapper">
      <Sidebar user={user} />
      <div id="content">
        <Navbar user={user} />
        <div className="container">
        <div className="row" style={{ paddingTop: "20px" }}>
          <div className="col">
            <div className="posts d-flex justify-content-center">
              {loading ? (
                <h5>loading</h5>
              ) : (
                <div>
                  {posts.map((post) => {
                    return (
                      <div className="posts">
                        <div className="card">
                          <div className="card-body">
                            <div className="d-flex">
                            <img
                              src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
                              class="rounded-circle shadow-4"
                              style={{ width: "70px" }}
                              alt="Avatar"
                            />
                            <div className="text-start ms-2">
                           <h4> {post.name}</h4>
                           <h5>
                            { moment(post.date).format("DD/MM/YYYY")}
                            </h5>
                            </div>
                           </div>
                            <hr></hr>
                            <h5>{post.text}</h5>
                            <hr></hr>
                            <row className="d-flex justify-content-between">
                              <button className="btn btn-light text-center">
                                <i class="bi bi-heart-fill"></i> Like
                              </button>
                              <button class="btn btn-light">
                                {" "}
                                <i class="bi bi-pencil"></i>
                                 Comment
                              </button>
                              <button class="btn btn-light">
                                <i class="bi bi-share"></i>
                                 Share
                              </button>
                              <button class="btn btn-light" onClick={()=>{
                                deletePost(post._id)
                              }}>
                              <i class="bi bi-trash-fill"></i>                                
                                 Delete
                              </button>
                            </row>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
          <div className="col">
            <div className="post-form">
              {/* <div className=" p">
              <h3>Say Something...</h3>
            </div> */}
              <form
                className="form my-1"
                onSubmit={(e) => {
                  e.preventDefault();
                  addPost();
                }}
              >
                <div className="row">
                  <textarea
                    name="text"
                    cols="60"
                    rows="5"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Create a post"
                    required
                  ></textarea>
                </div>
                <div className="row">
                  <input
                    type="submit"
                    className="btn btn-dark my-1"
                    value="Submit"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};
