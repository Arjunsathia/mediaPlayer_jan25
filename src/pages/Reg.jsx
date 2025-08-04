import React, { useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { registerUser, allUserApi } from "../services/allApis";

function Reg() {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const nav = useNavigate();

  const handleSubmit = async () => {
    const { username, email, password } = data;
    if (!username || !email || !password) {
      alert("Please enter all fields!");
    } else {
      const users = await allUserApi();
      const existing = users.data.find(
        (item) => item.email === data.email || item.username === data.username
      );
      if (existing) {
        alert("User already exists!");
      } else {
        const result = await registerUser(data);
        if (result.status === 201) {
          alert("Registration successful");
          setData({ username: "", email: "", password: "" });
          nav("/log");
        } else {
          alert("Registration failed");
        }
      }
    }
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <div className="row shadow rounded-4 overflow-hidden w-100" style={{ maxWidth: "900px" }}>
        {/* Left Image Section */}
        <div className="col-md-6 d-none d-md-flex align-items-center justify-content-center p-4 ">
          <img
            src="https://img.freepik.com/premium-vector/secure-login-form-page-with-password-computer-padlock-3d-vector-icon-cartoon-minimal-style_365941-1119.jpg?semt=ais_hybrid&w=740"
            alt="Register Illustration"
            className="img-fluid"
            style={{ maxHeight: "60vh" }}
          />
        </div>

        {/* Right Form Section */}
        <div className="col-md-6  d-flex flex-column justify-content-center p-4">
          <h2 className="text-center mb-4">Register</h2>

          <FloatingLabel controlId="floatingUsername" label="Username" className="mb-3">
            <Form.Control
              type="text"
              value={data.username}
              onChange={(e) => setData({ ...data, username: e.target.value })}
              placeholder="Username"
            />
          </FloatingLabel>

          <FloatingLabel controlId="floatingEmail" label="Email address" className="mb-3">
            <Form.Control
              type="email"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              placeholder="name@example.com"
            />
          </FloatingLabel>

          <FloatingLabel controlId="floatingPassword" label="Password" className="mb-4">
            <Form.Control
              type="password"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
              placeholder="Password"
            />
          </FloatingLabel>

          <div className="d-flex justify-content-between align-items-center mb-3">
            <button className="btn btn-info w-50" onClick={handleSubmit}>
              Register
            </button>
            <Link to="/log" className="text-decoration-none ms-3">
              <small>Already have an account!</small>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reg;
