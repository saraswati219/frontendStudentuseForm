import "./App.css";
import Register from "./Component/Register";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import ViewStudents from "./Component/ViewStudents.jsx";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./Component/Navbar.jsx";
import Home from "./Component/Home.jsx";
import Login from "./Component/Login.jsx";
import Update from "./Component/Update.jsx";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/viewstudents" element={<ViewStudents />}></Route>
          <Route path="/update/:id" element={<Update />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
