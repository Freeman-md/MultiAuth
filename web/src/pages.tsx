import { Route, Routes } from "react-router";
import Profile from "./pages/Profile";
import Logout from "./pages/Logout";
import Home from "./pages/Home";

export default function Pages() {
  return (
    <Routes>
      <Route path="/profile" element={<Profile />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
