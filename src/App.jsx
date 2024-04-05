import './App.css'
import { Route, Routes } from 'react-router-dom'

import Button from './components/Button'
import BoardList from './components/BoardList'
import BoardItem from './components/BoardItem'

import Home from './pages/Home'
import Create from './pages/Create'
import Info from './pages/Info'

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

  return (
    <>
      <Routes>
        <Route path="/" element={<Home data={mokData} />}></Route>
        <Route path='/info/:id' element={<Info />}></Route>
        <Route path='/create' element={<Create />}></Route>
      </Routes>
    </>
  )
}

export default App
