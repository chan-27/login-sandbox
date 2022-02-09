import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/auth";

import "./Login.css";
export default function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="Login">
      <div className="heading">
        <h1 className="welcome">Welcome</h1>
        {error && <h2 style={{ color: "red", fontStyle: "italic" }}>error</h2>}
      </div>
      <form>
        <div className="username">
          <input
            className="input"
            type="email"
            name="email"
            placeholder="Email..."
            id="email"
            onChange={() => {
              setEmail(document.getElementById("email").value);
            }}
            required
          />
        </div>

        <div className="password">
          <input
            className="input"
            id="pass"
            type="password"
            name="pwd"
            placeholder="Password..."
            onChange={() => {
              setPassword(document.getElementById("pass").value);
            }}
            required
          />
        </div>

        <button
          disabled={email === "" || password === ""}
          type="button"
          className="button"
          onClick={async () => {
            const user = await login({
              email,
              password
            });
            console.log(user);
            if (user !== undefined) {
              navigate("/home", {
                state: user
              });
            } else {
              setError(true);
            }
          }}
        >
          Login
        </button>
      </form>

      <button
        type="button"
        className="button"
        onClick={() => {
          navigate("/register");
        }}
      >
        Register
      </button>
    </div>
  );
}
