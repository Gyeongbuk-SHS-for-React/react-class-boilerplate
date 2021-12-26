import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Routes, Route, useNavigate, useParams } from "react-router-dom";
import JsxTest from "components/JsxTest";
import ContextAPI from "components/ContextAPI";
import Init from "components/Init";
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
          <Menu.Item
            key="1"
            onClick={() => navigate("jsx")}
            icon={<UserOutlined />}
          >
            JSX
          </Menu.Item>
          <Menu.Item
            key="2"
            onClick={() => navigate("context-api")}
            icon={<UserOutlined />}
          >
            Context API
          </Menu.Item>
          <Menu.Item
            key="3"
            icon={<UserOutlined />}
            onClick={() => {
              window.open(
                "https://beta.reactjs.org/learn/responding-to-events",
                "_blank"
              );
            }}
          >
            React.js Playground
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout style={{ padding: "0 24px 24px" }}>
        <Breadcrumb style={{ margin: "16px 0", fontSize: 18 }}>
          <Breadcrumb.Item>Course</Breadcrumb.Item>
          <Breadcrumb.Item>Day2</Breadcrumb.Item>
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
            <Route path="jsx" element={<JsxTest />} />
            <Route path="context-api" element={<ContextAPI />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Day1;
