"use client";
import { useState } from "react";
import Login from "../_components/Login";
import SignUp from "../_components/SignUp";
import Navigation from "../_components/Navigation";

const Ecommerce = () => {
  const [login, setLogin] = useState(true);
  return (
    <>
      <Navigation />
      {login ? <Login /> : <SignUp />}

      <div className="d-flex justify-content-center mt-3">
        <button onClick={() => setLogin(!login)} className="btn btn-primary ">
          {login
            ? "If you haven't an account yet, Sign up"
            : "If you have an account already, Log in"}
        </button>
      </div>
    </>
  );
};

export default Ecommerce;
