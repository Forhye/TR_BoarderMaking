import "./Info.css";

import { useParams, Navigate, useNavigate } from "react-router-dom";
import Button from "../components/Button";

const Info = ({ boardInfo, onDelete }) => {
  const param = useParams();

  const navigate = useNavigate();
  //  const handleNavi = (path) => {
  //    navigate(path);
  //  };

  const onClickUpdate = () => {
    navigate(`/update/${boardInfo.id}`, { state: { boardInfo } });
  };

  const onClickDelete = () => {
    onDelete(boardInfo.id);
    navigate("/");
  };

  return (
    <div className="create_info">
      <div>
        <div className="title">
          <div>제목</div>
          <input name="title" value={boardInfo.title} readOnly />
        </div>
        <div className="date">
          <div>날짜</div>
          <input name="date" value={boardInfo.date} readOnly />
        </div>
        <div className="content">
          내용
          <textarea
            name="content"
            value={boardInfo.content}
            readOnly
          ></textarea>
        </div>
      </div>

      <div className="buttonArea">
        <Button type="DELETE" text="삭제하기" onClick={onClickDelete} />
        <Button type="PRIMARY" text="수정하기" onClick={onClickUpdate} />
      </div>
    </div>
  );
};

export default Info;
