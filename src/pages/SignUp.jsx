import "./SignUp.css";

import { useState } from "react";

const SignUp = ({ userSignUp }) => {
  const [sign, setSign] = useState({
    id: "",
    pass: "",
  });

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setSign({
      ...sign,
      [name]: value,
    });
  };

  // const onClick = () => {
  //   userSignUpdate(sign);
  // };

  return (
    <div className="SignUp">
      <div>회원정보를 받아 App컴포넌트의 user객체에 저장하기</div>

      <div className="Id">
        <div>아이디</div>
        <input type="text" name="id" onChange={onChange} />
      </div>
      <div className="Pw">
        <div>비밀번호</div>
        <input type="password" name="pass" onChange={onChange} />
      </div>

      <button
        onClick={() => {
          userSignUp(sign);
        }}
      >
        App컴포넌트로 전송하기
      </button>
    </div>
  );
};

export default SignUp;
