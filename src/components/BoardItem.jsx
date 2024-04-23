import { useContext } from "react";
import "./BoardItem.css";

import { useNavigate } from "react-router-dom";
import { GetIdContext } from "../App";

const BoardItem = ({ id, title, content, date }) => {
  const getId = useContext(GetIdContext);

  const navigate = useNavigate();

  const clickHandler = (id) => {
    navigate(`/info/${id}`);
    getId(id);
  };

  return (
    <div className="Board" onClick={() => clickHandler(id)}>
      <div className="title">{title}</div>
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
    </div>
  );
};

export default BoardItem;
