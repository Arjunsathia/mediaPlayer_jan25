import React, { useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../services/allApis";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const nav = useNavigate();
  const handleSubmit = async () => {
    console.log(user);
    const { email, password } = user;
    if (!email || !password) {
      alert("enter valid inputs!!");
    } else {
      const result = await loginUser(email, password);
      console.log(result);
      if (result.data.length > 0) {
        alert("Login successful");
        setUser({
          username: "",
          password: "",
        });
        nav("/dash");
      } else {
        alert("login failed !! invaild email or password");
      }
    }
  };
  return (
    <>
      <div
        className="container-fluid d-flex justify-content-center align-items-center"
        style={{ height: "90vh" }}
      >
        <div className="w-75 border border-2 shadow p-3">
          <div className="row">
            <div className="col">
              <img
                style={{ height: "40vh" }}
                src="https://img.freepik.com/premium-vector/secure-login-form-page-with-password-computer-padlock-3d-vector-icon-cartoon-minimal-style_365941-1119.jpg?semt=ais_hybrid&w=740"
                alt=""
              />
            </div>
            <div className="col">
              <h2>Login</h2>
              <div className="my-4">
                <FloatingLabel
                  controlId="floatingInput"
                  label="Email address"
                  className="mb-3"
                >
                  <Form.Control
                    type="email"
                    onChange={(e) =>
                      setUser({ ...user, email: e.target.value })
                    }
                    placeholder="name@example.com"
                  />
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingPassword"
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                  label="Password"
                >
                  <Form.Control type="password" placeholder="Password" />
                </FloatingLabel>
              </div>
              <div className="d-flex justify-content-between">
                <button className="btn btn-secondary" onClick={handleSubmit}>
                  Login
                </button>
                <Link to={"/reg"}>New User ?</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
