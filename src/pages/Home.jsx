import "./Home.css";
import Button from "../components/Button";
import BoardList from "../components/BoardList";

import { useNavigate } from "react-router-dom";

const Home = ({ data, getId }) => {
  const navigate = useNavigate();

  const handleCreate = (path) => {
    navigate(path);
  };

  return (
    <div className="Home">
      <h1 className="home_title">게시판 제목</h1>

      <div className="action_tab">
        <div className="sort">
          <select>
            <option value="">정렬</option>
            <option value="">최신순</option>
            <option value="">오래된순</option>
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
        <BoardList data={data} getId={getId} />
      </div>

      <div>페이징</div>

      <div className="search">
        <input
          className="input"
          type="text"
          placeholder="검색어를 입력하세요"
        ></input>
        <div className="button">
          <Button type="SEARCH" text="검색" />
        </div>
      </div>
    </div>
  );
};

export default Home;
