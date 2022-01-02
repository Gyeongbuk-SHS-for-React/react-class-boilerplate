import React, { useState } from "react";
import { pocketMonList } from "./data";
import { Typography } from "antd";

const StateTest = () => {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleNextClick() {
    setIndex(index + 1);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = pocketMonList[index];
  return (
    <>
      <Typography.Title>
        마지막 페이지로 이동되지 않는 오류를 수정해보세요.
      </Typography.Title>
      <button onClick={handleNextClick}>Next</button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {pocketMonList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? "Hide" : "Show"} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img src={sculpture.url} alt={sculpture.alt} />
    </>
  );
};

export default StateTest;
