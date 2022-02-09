import "./styles.css";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";
import Home from "./pages/home/Home.jsx";
import NoMatch from "./pages/no_match/NoMatch.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/home" element={<Home />} />

          <Route exact path="/*" element={<NoMatch />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
