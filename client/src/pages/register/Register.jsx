import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../../services/auth";

import "./Register.css";
export default function Register() {
  let history = useNavigate();
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");
  const [dob, setDob] = useState("");

  return (
    <div className="Register">
      <div className="heading">
        <h1 className="welcome">Create an Account</h1>
        {error !== "" && (
          <h2 style={{ color: "red", fontStyle: "italic" }}>{error}</h2>
        )}
      </div>
      <form className="form">
        <input
          className="input"
          type="text"
          name="first_name"
          placeholder="First Name..."
          id="fname"
          onChange={() => {
            setFname(document.getElementById("fname").value);
          }}
          required
        />

        <input
          className="input"
          type="text"
          name="last_name"
          placeholder="Last Name..."
          id="lname"
          onChange={() => {
            setLname(document.getElementById("lname").value);
          }}
          required
        />

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

        <input
          className="input"
          id="repass"
          type="password"
          name="repwd"
          placeholder="Re enter Password..."
          onChange={() => {
            setRePassword(document.getElementById("repass").value);
          }}
          required
        />
        <div>
          DOB :{" "}
          <input
            type="date"
            id="birthday"
            name="birthday"
            onChange={() => {
              setDob(document.getElementById("birthday").value);
              console.log(document.getElementById("birthday").value);
            }}
          />
        </div>

        <button
          disabled={email === "" || password === "" || fname === ""}
          type="button"
          className="regbutton"
          onClick={async () => {
            if (password !== repassword) {
              setError("Passwords do not match");
              return;
            }
            const _error = await register({
              fname,
              lname,
              email,
              password,
              dob
            });
            setError(_error);
            if (_error === "") {
              history("/");
            }
          }}
        >
          Register
        </button>
      </form>
    </div>
  );
}
