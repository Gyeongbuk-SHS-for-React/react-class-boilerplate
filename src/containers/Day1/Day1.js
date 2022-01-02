import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Routes, Route, useNavigate, useParams } from "react-router-dom";
import Init from "components/Init";
import BasicTest from "components/BasicTest";

const { Content, Sider } = Layout;

const Day1 = () => {
  const params = useParams();
  const navigate = useNavigate();

  return (
    <Layout style={{ height: "100%" }}>
      <Sider width={250} className="site-layout-background">
        <Menu
          mode="inline"
          selectable={false}
          style={{ height: "100%", borderRight: 0, fontSize: 18 }}
        >
          <Menu.Item key="1" icon={<UserOutlined />}>
            강의 소개
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />}>
            개발 환경 설정
          </Menu.Item>
          <Menu.Item
            key="3"
            onClick={() => navigate("basic")}
            icon={<UserOutlined />}
          >
            리액트 기본 개념 소개
          </Menu.Item>
          <Menu.Item
            key="4"
            onClick={() => navigate("jsx")}
            icon={<UserOutlined />}
          >
            JSX
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout style={{ padding: "0 24px 24px" }}>
        <Breadcrumb style={{ margin: "16px 0", fontSize: 18 }}>
          <Breadcrumb.Item>Course</Breadcrumb.Item>
          <Breadcrumb.Item>Day1</Breadcrumb.Item>
          <Breadcrumb.Item>{params["*"].toUpperCase()}</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          <Routes>
            <Route path="" element={<Init />} />
            <Route path="basic" element={<BasicTest />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Day1;
