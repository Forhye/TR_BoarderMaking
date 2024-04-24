import "./Home.css";
import Button from "../components/Button";
import BoardList from "../components/BoardList";

import { useNavigate } from "react-router-dom";
import { useContext, useReducer, useState } from "react";
import { BoardStateContext } from "../App";

function selectReducer(state, action) {
  let sortedState;
  switch (action) {
    case "DESC":
      sortedState = [...state].sort((a, b) => {
        return b.id - a.id;
      });
      return sortedState;
    case "ASC":
      sortedState = [...state].sort((a, b) => {
        return a.id - b.id;
      });
      return sortedState;
    default:
      return state;
  }
}

const Home = () => {
  const data = useContext(BoardStateContext);
  const navigate = useNavigate();

  const handleCreate = (path) => {
    navigate(path);
  };

  const [board, dispatch] = useReducer(selectReducer, data);
  const [search, setSearch] = useState("");

  const onSearch = (e) => {
    setSearch(e.target.value);
  };

  const filterSearch = () => {
    if (search === "") {
      return data;
    }
    const searchData = data.filter((data) =>
      data.title.toLowerCase().includes(search.toLowerCase())
    );
    return searchData;
  };

  const searchButton = () => {
    filterSearch();
  };

  const selectedChange = (e) => {
    dispatch(e.target.value);
    //dispatch({type : e.target.value}); ->  switch(action.type)
  };

  return (
    <div className="Home">
      <h1 className="home_title">게시판 제목</h1>

      <div className="action_tab">
        <div className="sort">
          <select onChange={selectedChange}>
            <option value="">정렬</option>
            <option value="DESC">최신순</option>
            <option value="ASC">오래된순</option>
          </select>
        </div>
        <div className="create">
          <Button
            type="PRIMARY"
            text="작성하기"
            onClick={() => handleCreate("/create")}
          />
        </div>
      </div>

      <div className="list">
        <BoardList data={board} />
      </div>

      <div>페이징</div>

      <div className="search">
        <input
          className="input"
          type="text"
          placeholder="검색어를 입력하세요"
          onChange={onSearch}
          value={search}
        ></input>
        <div className="button">
          <Button type="SEARCH" text="검색" onClick={searchButton} />
        </div>
      </div>
    </div>
  );
};

export default Home;
