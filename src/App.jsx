import { Routes, Route, Navigate } from "react-router";
import Login from "./pages/auth/login.jsx";
import Register from "./pages/auth/Register.jsx";
import Home from "./pages/home/Home.jsx";
import "./App.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
};

export default App;
