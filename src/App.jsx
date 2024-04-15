import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";

import Create from "./pages/Create";
import Home from "./pages/Home";
import Info from "./pages/Info";
import Exam from "./pages/Exam";
import SignUp from "./pages/SignUp";
import FunctionExam from "./components/FunctionExam";

function App() {
  const [board, setBoard] = useState([]);

  const onUpdate = (data) => {
    const newData = {
      id: board.length + 1,
      ...data,
    };
    setBoard([newData, ...board]);
  };

  console.log(board);

  const [userSign, setUserSign] = useState([]);

  const userSignUpdate = (data) => {
    setUserSign([data, ...userSign]);
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Home data={board} />}></Route>
        <Route path="/info/:id" element={<Info />}></Route>
        <Route path="/create" element={<Create onUpdate={onUpdate} />}></Route>
        <Route path="/exam" element={<Exam />}></Route>
        <Route
          path="/signup"
          element={<SignUp userSignUp={userSignUpdate} />}
        ></Route>
        <Route path="/exam2" element={<FunctionExam />}></Route>
      </Routes>
    </>
  );
}

export default App;
