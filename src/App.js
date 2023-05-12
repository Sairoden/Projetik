// Libraries
import { Routes, Route } from "react-router-dom";

// Styles
import "./App.css";

// Components
import Dashboard from "./pages/dashboard/Dashboard";
import Create from "./pages/create/Create";
import Signup from "./pages/signup/Signup";
import Project from "./pages/project/Project";
import Login from "./pages/login/Login";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="container">
      <Navbar element={<Navbar />} />
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/create" element={<Create />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/projects/:id" element={<Project />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
