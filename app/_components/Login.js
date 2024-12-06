import { useState } from "react";
import "./Login.css";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

const Login = () => {
  const [login, setLogin] = useState({ email: "", password: "" });
  const router = useRouter();
  const fields = [
    {
      name: "email",
      type: "email",
      placeholder: "Enter email",
      label: "Email",
    },
    {
      name: "password",
      type: "password",
      placeholder: "Enter password",
      label: "Password",
    },
  ];

  const handleLoginData = async (e) => {
    e.preventDefault();
    // console.log(login);
    setLogin({ email: "", password: "" });
    const { email, password } = login;
    let response = await axios.post(`http://localhost:3001/login`, {
      email,
      password,
    });
    if (response.data.success) {
      console.log(response.data.message);
      router.push("/ecommerce/dashboard");
      localStorage.setItem("auth", JSON.stringify(response.data));
    } else if (response.data.message) {
      console.log(response.data.message);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center ">
      <div
        className="card p-4 shadow"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <div className="text-center mb-4">
          <h1 className="h4">Welcome Back</h1>
          <p className="text-muted">Log in to your account</p>
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
                    setLogin({ ...login, [curEle.name]: e.target.value })
                  }
                  value={login[curEle.name]}
                />
              </li>
            ))}
          </ul>
          <button
            type="submit"
            className="btn btn-primary w-100"
            onClick={handleLoginData}
          >
            Login
          </button>
          {/* <p> if you don't have account the go to <Link href={'/SignUp'}>SignUp</Link></p> */}
        </form>
      </div>
    </div>
  );
};

export default Login;
