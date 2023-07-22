import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProfileLayout from "./layouts/ProfileLayout/ProfileLayout";
import AuthLayout from "./layouts/AuthLayout/AuthLayout";
import ResetLayout from "./layouts/ResetLayout/ResetLayout";
import ActivateLayout from "./layouts/ActivateLayout/ActivateLayout";
import { AuthContext } from "./context/AuthContext";
import { useContext, useEffect } from "react";
import axios from "axios";

function App() {
  const { dispatch, token, isLoggedIn } = useContext(AuthContext);

  // get access token
  useEffect(() => {
    const _appSignging = localStorage.getItem("_appSignging");
    if (_appSignging) {
      const getToken = async () => {
        const res = await axios.post("/api/auth/access", null);
        dispatch({ type: "GET_TOKEN", payload: res.data.access_token });
        console.log(res.data);
      };
      getToken();
    }
  }, [dispatch, isLoggedIn]);

  // get user data
  useEffect(() => {
    if (token) {
      const getUser = async () => {
        dispatch({ type: "SIGNING" });
        const res = await axios.get("/api/auth/user", {
          headers: { Authorization: token },
        });
        dispatch({ type: "GET_USER", payload: res.data });
      };
      getUser();
    }
  }, [dispatch, token]);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={isLoggedIn ? <ProfileLayout /> : <AuthLayout />}
        />
        <Route path="/auth/reset-password/:token" element={<ResetLayout />} />
        <Route
          path="/api/auth/activate/:activation_token"
          element={<ActivateLayout />}
        />
      </Routes>
    </Router>
  );
}

export default App;
