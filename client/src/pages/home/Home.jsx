import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Home.css";
export default function Home() {
  const data = useLocation();
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (data.state === undefined || data.state === null) {
      navigate("/");
    } else {
      setUser(data.state);
    }
  }, []);

  if (user === undefined || user === null) return <div />;

  return (
    <div className="home">
      <h1>WELCOMEEEE </h1>
      <h2>{user.lname}</h2>

      <section>
        <h2>Personal Information</h2>
        <ul>
          <li>Name : {user.fname}</li>
          <li>email : {user.email}</li>
          <li>Gender</li>
          <li>DOB : {user.dob}</li>
        </ul>
      </section>
    </div>
  );
}
