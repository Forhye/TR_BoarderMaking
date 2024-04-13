import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";

import Create from "./pages/Create";
import Home from "./pages/Home";
import Info from "./pages/Info";
import Exam from "./pages/Exam";
import SignUp from "./pages/SignUp";

function App() {
  const [boardUpdate, setUpdate] = useState([]);

  const onUpdate = (data) => {
    setUpdate([data, ...boardUpdate]);
  };

  const [userSign, setUserSign] = useState([]);

  const userSignUpdate = (data) => {
    setUserSign([data, ...userSign]);
    console.log(data);
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Home data={boardUpdate} />}></Route>
        <Route path="/info/:id" element={<Info />}></Route>
        <Route path="/create" element={<Create onUpdate={onUpdate} />}></Route>
        <Route path="/exam" element={<Exam />}></Route>
        <Route
          path="/signup"
          element={<SignUp userSignUp={userSignUpdate} />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
