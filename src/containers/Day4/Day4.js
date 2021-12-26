import React from "react";
import { Result } from "antd";
import { SmileOutlined } from "@ant-design/icons";

const Day4 = () => {
  return (
    <Result
      icon={<SmileOutlined />}
      style={{
        height: "100%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
      title="외부 데이터를 가지고 나만의 컴포넌트 혹은 페이지를 만들어보세요"
    ></Result>
  );
};

export default Day4;
