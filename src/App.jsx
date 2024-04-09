import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import './App.css'


import Create from './pages/Create'
import Home from './pages/Home'
import Info from './pages/Info'
import Create2 from './pages/Create2'

const mokData = [
  {
    id: 1,
    title: "1번 글 제목입니다.",
    content: "1번 글 내용 입니다.",
    date: new Date().getTime()
  }, {
    id: 2,
    title: "2번 글 제목입니다.",
    content: "2번 글 내용 입니다.",
    date: new Date().getTime()
  }, {
    id: 3,
    title: "3번 글 제목입니다.",
    content: "3번 글 내용 입니다.",
    date: new Date().getTime()
  }
]



function App() {

  const [boardUpdate, setUpdate] = useState(mokData);

  const onUpdate = (data) => {

    setUpdate([data, ...boardUpdate]);
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Home data={boardUpdate} />}></Route>
        <Route path='/info/:id' element={<Info />}></Route>
        <Route path='/create' element={<Create onUpdate={onUpdate} />}></Route>
        <Route path='/create2' element={<Create2 />}></Route>
      </Routes>
    </>
  )
}

export default App
