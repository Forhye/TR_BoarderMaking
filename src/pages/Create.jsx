import "./Create.css";
import Button from "../components/Button";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = ({ onCreate }) => {
  const navigate = useNavigate();

  const handleCreate = (path) => {
    navigate(path);
  };

  const [dataInfo, setDataInfo] = useState({
    title: "",
    date: "",
    content: "",
  });

  const changeInfo = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setDataInfo({
      ...dataInfo,
      [name]: value,
    });
  };

  const submit = () => {
    onCreate(dataInfo);
    handleCreate("/");
  };

  return (
    <div className="create_info">
      <div>
        <div className="title">
          <div>제목</div>
          <input type="text" name="title" onChange={changeInfo} />
        </div>
        <div className="date">
          <div>날짜</div>
          <input type="date" name="date" onChange={changeInfo} />
        </div>
        <div className="content">
          내용
          <textarea name="content" onChange={changeInfo}></textarea>
        </div>
      </div>

      <Button type="PRIMARY" text="작성하기" onClick={submit} />
    </div>
  );
};

export default Create;
