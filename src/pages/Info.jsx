import "./Info.css";

import { useParams } from "react-router-dom";
import Button from "../components/Button";

const Info = ({ boardInfo }) => {
  const param = useParams();

  console.log(boardInfo);

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
        <Button type="DELETE" text="삭제하기" />
        <Button type="PRIMARY" text="수정하기" />
      </div>
    </div>
  );
};

export default Info;
