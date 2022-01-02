import React, { useState } from "react";
import { Typography } from "antd";

const StateTest4 = () => {
  const [name, setName] = useState("");

  function handleClick() {
    setName(prompt("What is your name?"));
    alert(`Hello, ${name}!`);
  }

  return (
    <>
      <Typography.Title>
        prompt 창에 이름이 나오지 않는 오류를 수정해보세요.
      </Typography.Title>
      <button onClick={handleClick}>Greet</button>
    </>
  );
};

export default StateTest4;
