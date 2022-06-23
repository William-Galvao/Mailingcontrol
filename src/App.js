import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./Firebase/firebase";
import NewData from "./Pages/NewData";

function App() {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const RequiredAuth = ({ children }) => {
    return user ? children : navigate("/login");
  };

  return (
    <div>
      <Routes>
        <Route element={<Login />} path="/login" />
        <Route
          element={
            <RequiredAuth>
              <Home />
            </RequiredAuth>
          }
          path="/"
        />
        <Route
          element={
            <RequiredAuth>
              <NewData />
            </RequiredAuth>
          }
          path="/newdata"
        />
      </Routes>
    </div>
  );
}

export default App;
