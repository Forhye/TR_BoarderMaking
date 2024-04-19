import { Route, Routes } from "react-router-dom";
import { useState, useReducer } from "react";
import "./App.css";

import Create from "./pages/Create";
import Update from "./pages/Update";
import Home from "./pages/Home";
import Info from "./pages/Info";

const mockData = [
  {
    id: 1,
    title: "1번째 글 제목",
    date: "2024-04-15",
    content: "1번째 글의 내용ㅇㅇㅇㅇㅇ",
  },
  {
    id: 2,
    title: "2번째 글 제목",
    date: "2024-04-25",
    content: "2번째 글의 내용ㅇㅇㅇㅇㅇ",
  },
];

const boardReducer = (state, action) => {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) =>
        item.id === action.data.id ? action.data : item
      );
    case "DELETE":
      console.log(action.data);
      return state.filter((item) => item.id !== action.data);
    default:
      return state;
  }
};

function App() {
  const [board, dispatch] = useReducer(boardReducer, [...mockData]);
  const [id, setId] = useState();

  //★★자식이 부모에게 프롭스로 전달할수는 없지만
  //★★★자식에게서 데이터를 받아올 수는 있다.

  const getId = (id) => {
    setId(id);
  };

  const boardInfo = board.find((item) => item.id === id);

  //변수.find((파인드변수)=>파인드변수.찾으려는 값 === 찾으려는 값)

  const onCreate = (data) => {
    dispatch({
      type: "CREATE",
      data: {
        id: board.length + 1,
        ...data,
      },
    });
  };

  const onUpdate = (data) => {
    dispatch({
      type: "UPDATE",
      data: data,
    });
  };

  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      data: id,
    });
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Home data={board} getId={getId} />}></Route>
        <Route
          path="/info/:id"
          element={<Info boardInfo={boardInfo} onDelete={onDelete} />}
        ></Route>
        <Route path="/create" element={<Create onCreate={onCreate} />}></Route>
        <Route
          path="/update/:id"
          element={<Update getId={getId} onUpdate={onUpdate} />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
