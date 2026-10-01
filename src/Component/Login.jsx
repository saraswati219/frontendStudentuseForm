import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const nav = useNavigate();
  function login() {
    nav("/viewstudents");
  }

  return (
    <div
      style={{
        backgroundColor: "lightyellow",
        padding: "20px",
        width: "300px",

        justifyContent: "center",
        textAlign: "center",
      }}
    >
      Username :<input type="username" placeholder="Enter username"></input>
      <br></br>
      Password :<input type="password" placeholder="Enter password"></input>
      <br></br>
      <br></br>
      <button className="btn btn-success" onClick={login}>
        Log in
      </button>
    </div>
  );
};

export default Login;
