import React, { useState } from "react";

const ToDoPractice = () => {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  return (
    <div>
      <h1>할일 수 :</h1>
      <form>
        <input placeholder="할 일 입력"></input>
        <button>등록</button>
      </form>
    </div>
  );
};

export default ToDoPractice;
