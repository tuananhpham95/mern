import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProfileLayout from "./layouts/ProfileLayout/ProfileLayout";
import AuthLayout from "./layouts/AuthLayout/AuthLayout";
import ResetLayout from "./layouts/ResetLayout/ResetLayout";
import ActivateLayout from "./layouts/ActivateLayout/ActivateLayout";
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";

function App() {
  const { isLoggedIn } = useContext(AuthContext);

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
