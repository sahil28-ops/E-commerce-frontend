import React, { useState } from "react";
import "./SignUp.css";
import axios from "axios";

const SignUp = () => {
  const [signup, setSignUp] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
    address: "",
  });

  const fields = [
    { name: "name", type: "text", placeholder: "Enter Name", label: "Name" },
    {
      name: "email",
      type: "email",
      placeholder: "Enter Email",
      label: "Email",
    },
    {
      name: "password",
      type: "password",
      placeholder: "Enter Password",
      label: "Password",
    },
    {
      name: "mobile",
      type: "number",
      placeholder: "Enter Mobile Number",
      label: "Mobile No",
    },
    {
      name: "address",
      type: "text",
      placeholder: "Enter Address",
      label: "Address",
    },
  ];

  const handleSignUpData = async (e) => {
    e.preventDefault();
    // console.log(signup);

    setSignUp({ name: "", email: "", password: "", mobile: "", address: "" });
    const { name, email, password, mobile, address } = signup;
    const response = await axios.post(`http://localhost:3001/register`, {
      name,
      email,
      password,
      mobile,
      address,
    });
    //
    if (response.data.success) {
      console.log(response.data.message);
    } else if (response.data.message) {
      console.log(response.data.message);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center ">
      <div
        className="card p-4 shadow"
        style={{ maxWidth: "500px", width: "100%" }}
      >
        <div className="text-center mb-4">
          <h1 className="h4">Sign Up</h1>
          <p className="text-muted">Create Your New Account Here</p>
        </div>
        <form>
          <ul className="list-unstyled">
            {fields.map((curEle, index) => (
              <li key={curEle.id || index} className="mb-3">
                <label htmlFor={curEle.name} className="form-label">
                  {curEle.label}
                </label>
                <input
                  type={curEle.type}
                  placeholder={curEle.placeholder}
                  name={curEle.name}
                  id={curEle.name}
                  className="form-control"
                  onChange={(e) =>
                    setSignUp({ ...signup, [curEle.name]: e.target.value })
                  }
                  value={signup[curEle.name]}
                />
              </li>
            ))}
          </ul>
          <button
            type="submit"
            className="btn btn-success w-100"
            onClick={handleSignUpData}
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
