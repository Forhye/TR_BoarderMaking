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

  const [number, setNumber] = useState();

  const buttonNumber = (e) => {
    const inputNumber = e.target.value;

    setNumber(inputNumber);
  };

  const buttonClick = (alertnumber) => {
    alert(alertnumber + "번 입니다.");
  };

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

      <div>함수를 알아보기 위한 컴포넌트</div>
      <div>어떤 숫자를 받아 버튼을 눌렀을 때 (번입니다)로 나오게 해주세요.</div>
      <div>ex 10을 받으면 = 10번입니다.</div>

      <input type="text" name="value" onChange={buttonNumber} />
      <button
        onClick={() => {
          buttonClick(number);
        }}
      >
        버튼
      </button>

      <div>{number}번 입니다.</div>
    </div>
  );
};

export default SignUp;
