import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login/Login";
import Header from "./components/Header/Header";
import SignUp from "./components/SignUp/SignUp";
import Practice from "./components/practice/Practice";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/practice" element={<Practice />} />
      </Routes>
    </>
  );
}

export default App;
