import React from "react";
import { Typography } from "antd";

const StateTest2 = () => {
  let firstName = "";
  let lastName = "";

  function handleFirstNameChange(e) {
    firstName = e.target.value;
  }

  function handleLastNameChange(e) {
    lastName = e.target.value;
  }

  function handleReset() {
    firstName = "";
    lastName = "";
  }

  return (
    <>
      <Typography.Title>인풋 입력 오류를 수정해보세요.</Typography.Title>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          placeholder="First name"
          value={firstName}
          onChange={handleFirstNameChange}
        />
        <input
          placeholder="Last name"
          value={lastName}
          onChange={handleLastNameChange}
        />
        <h1>
          Hi, {firstName} {lastName}
        </h1>
        <button onClick={handleReset}>Reset</button>
      </form>
    </>
  );
};

export default StateTest2;
