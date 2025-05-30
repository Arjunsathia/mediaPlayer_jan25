import React, { useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { registerUser, allUserApi } from "../services/allApis";
import { useNavigate } from "react-router-dom";

function Reg() {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const nav = useNavigate();
  console.log(data);
  const handleSubmit = async () => {
    const { username, email, password } = data;
    if (!username || !email || !password) {
      alert("Enter valid input!!");
    } else {
      // console.log(data);
      const users = await allUserApi();
      // console.log(users);
      // console.log(data);
      const existing = users.data.find(
        (item) => item.email == data.email || item.username == data.username
      );
      // console.log(existing);
      if (existing) {
        alert("ALREADY EXIST");
      } else {
        const result = await registerUser(data);
        console.log(result);
        if (result.status == 201) {
          alert("Registration successfull");
          nav("/log");
          setData({
            username: "",
            email: "",
            password: "",
          });
        } else {
          alert("Registration failed");
        }
      }
    }
  };

  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center"
      style={{ height: "90vh" }}
    >
      <div className="w-75 border border-2 shadow p-3">
        <div className="row">
          <div className="col d-flex justify-content-center align-items-center">
            <img
              style={{ height: "40vh" }}
              src="https://img.freepik.com/premium-vector/secure-login-form-page-with-password-computer-padlock-3d-vector-icon-cartoon-minimal-style_365941-1119.jpg?semt=ais_hybrid&w=740"
              alt=""
              className="align-items-center"
            />
          </div>
          <div className="col">
            <h2>Registration</h2>
            <div className="my-4">
              <FloatingLabel
                controlId="floatingInput"
                label="Email address"
                className="mb-3"
              >
                <Form.Control
                  type="email"
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                  placeholder="name@example.com"
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInp"
                label="User name"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  onChange={(e) =>
                    setData({ ...data, username: e.target.value })
                  }
                  placeholder="User name"
                />
              </FloatingLabel>
              <FloatingLabel controlId="floatingPassword" label="Password">
                <Form.Control
                  type="password"
                  onChange={(e) =>
                    setData({ ...data, password: e.target.value })
                  }
                  placeholder="Password"
                />
              </FloatingLabel>
            </div>
            <div className="d-flex justify-content-between">
              <button className="btn btn-secondary" onClick={handleSubmit}>
                Register
              </button>
              <Link to={"/log"}>Already have an Account</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reg;
