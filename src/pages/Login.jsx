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
    const { email, password } = user;
    if (!email || !password) {
      alert("Please enter both email and password.");
    } else {
      const result = await loginUser(email, password);
      if (result.data.length > 0) {
        alert("Login successful");
        setUser({ email: "", password: "" });
        nav("/dash");
      } else {
        alert("Login failed! Invalid email or password.");
      }
    }
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <div className="row shadow rounded-4 overflow-hidden w-100" style={{ maxWidth: "900px" }}>
        {/* Left Image Section */}
        <div className="col-md-6 d-none d-md-block  p-4 d-flex align-items-center justify-content-center">
          <img
            src="https://img.freepik.com/premium-vector/secure-login-form-page-with-password-computer-padlock-3d-vector-icon-cartoon-minimal-style_365941-1119.jpg?semt=ais_hybrid&w=740"
            alt="Login Illustration"
            className="img-fluid"
            style={{ maxHeight: "60vh" }}
          />
        </div>

        {/* Right Login Form Section */}
        <div className="col-md-6 p-4">
          <h2 className="text-center mb-4">Login</h2>

          <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
            <Form.Control
              type="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              placeholder="name@example.com"
            />
          </FloatingLabel>

          <FloatingLabel controlId="floatingPassword" label="Password" className="mb-4">
            <Form.Control
              type="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              placeholder="Password"
            />
          </FloatingLabel>

          <div className="d-flex justify-content-between align-items-center mb-3">
            <button className="btn btn-info w-50" onClick={handleSubmit}>
              Login
            </button>
            <Link to="/reg" className="text-decoration-none ms-3">
              <small>New User?</small>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
