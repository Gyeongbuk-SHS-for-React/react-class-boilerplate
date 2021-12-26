import React from "react";
import { Layout, Typography, Collapse } from "antd";
import "./Home.css";

const { Title } = Typography;

const classContent = [
  ["강사 소개", "개발환경 설정", "HTML 기초", "Css 기초"],
  [
    "React 소개",
    "React 기본 개념 소개",
    "Context API 소개",
    "NPM 모듈 소개",
    "NPX 소개",
  ],
  ["React 기본 개념 클론코딩", "CreatReactApp", "영화앱 클론코딩"],
  ["네트워크 통신 기본 개념 소개", "개인 프로젝트 시작"],
  ["개인 프로젝트 마무리 및 발표", "강의 마무리 및 개인 질문"],
];

const Home = () => {
  return (
    <Layout style={{ height: "100%", alignItems: "center" }}>
      <Title level={2} style={{ marginTop: 200 }}>
        강의 목차
      </Title>

      <Collapse style={{ width: 600, marginTop: 100, overflow: "auto" }} bordered={false}>
        {classContent.map((item, idx) => (
          <Collapse.Panel
            header={<div>{idx + 1} 일차</div>}
            className="custom-panel"
          >
            {item.map((content) => (
              <p>{content}</p>
            ))}
          </Collapse.Panel>
        ))}
      </Collapse>
    </Layout>
  );
};

export default Home;
