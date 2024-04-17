import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";

import Create from "./pages/Create";
import Home from "./pages/Home";
import Info from "./pages/Info";

function App() {
  const [board, setBoard] = useState([]);
  const [id, setId] = useState();

  //★★자식이 부모에게 프롭스로 전달할수는 없지만
  //★★★자식에게서 데이터를 받아올 수는 있다.

  const getId = (id) => {
    setId(id);
  };

  const boardInfo = board.find((item) => item.id === id);

  //변수.find((파인드변수)=>파인드변수.찾으려는 값 === 찾으려는 값)

  const onUpdate = (data) => {
    const newData = {
      id: board.length + 1,
      ...data,
    };
    setBoard([newData, ...board]);
  };

  const [userSign, setUserSign] = useState([]);

  const userSignUpdate = (data) => {
    setUserSign([data, ...userSign]);
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Home data={board} getId={getId} />}></Route>
        <Route
          path="/info/:id"
          element={<Info boardInfo={boardInfo} />}
        ></Route>
        <Route path="/create" element={<Create onUpdate={onUpdate} />}></Route>
      </Routes>
    </>
  );
}

export default App;
