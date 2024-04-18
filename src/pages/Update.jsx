import "./Update.css";

import { useNavigate, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Button from "../components/Button";
import { useEffect, useState } from "react";

const Update = ({ onUpdate }) => {
  const param = useParams();

  const navi = useNavigate();

  const location = useLocation();
  const { boardInfo } = location.state;

  const [formData, setformData] = useState({
    title: "",
    date: "",
    content: "",
  });

  useEffect(() => {
    setformData({ ...boardInfo });
  }, [boardInfo]);

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setformData({
      ...formData,
      [name]: value,
    });
  };

  const submit = () => {
    onUpdate(formData);
    navi("/");
  };

  return (
    <div className="update">
      <div>
        <div className="title">
          <div>제목</div>
          <input name="title" value={formData.title} onChange={onChange} />
        </div>
        <div className="date">
          <div>날짜</div>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={onChange}
          />
        </div>
        <div className="content">
          내용
          <textarea
            name="content"
            value={formData.content}
            onChange={onChange}
          ></textarea>
        </div>
      </div>

      <div className="buttonArea">
        <Button type="PRIMARY" text="수정하기" onClick={submit} />
      </div>
    </div>
  );
};

export default Update;
