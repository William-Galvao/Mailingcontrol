import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<Login />} path="/login" />
        <Route element={<Home />} path="/" />
      </Routes>
    </div>
  );
}

export default App;
