import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Feed from "./components/Feed";
import Login from "./components/login";
import Requests from "./components/Requests";
import Profile from "./components/Profile";
import Connections from "./components/Connections";
import Pagenotfound from "./components/Pagenotfound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Body />}>
        <Route index element={<Feed />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/connections" element={<Connections />} />
        <Route path="/requests" element={<Requests />} />
        <Route path="*" element={<Pagenotfound/>} />
      </Route>
    </Routes>
  );
}

export default App;
