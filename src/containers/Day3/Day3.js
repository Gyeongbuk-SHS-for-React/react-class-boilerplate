import React from "react";
import { Layout, Menu, Breadcrumb, Typography } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Routes, Route, useNavigate, useParams } from "react-router-dom";
import ContextAPI from "components/ContextAPI";
import UseEffectTest from "components/UseEffectTest";
import ToDoPractice from "components/ToDoPractice";

const { Title } = Typography;
const { Content, Sider } = Layout;

const Day3 = () => {
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
            onClick={() => navigate("context")}
            icon={<UserOutlined />}
          >
            Context API
          </Menu.Item>
          <Menu.Item
            key="2"
            onClick={() => navigate("effect")}
            icon={<UserOutlined />}
          >
            useEffects 연습
          </Menu.Item>
          <Menu.Item
            key="3"
            onClick={() => navigate("todo")}
            icon={<UserOutlined />}
          >
            ToDoApp 연습
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout style={{ padding: "0 24px 24px" }}>
        <Breadcrumb style={{ margin: "16px 0", fontSize: 18 }}>
          <Breadcrumb.Item>Course</Breadcrumb.Item>
          <Breadcrumb.Item>Day3</Breadcrumb.Item>
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
            <Route
              path=""
              element={
                <Title level={3}>
                  해당 프로젝트에서 연습 후 새로운 앱을 만들 예정입니다.
                </Title>
              }
            />
            <Route path="context" element={<ContextAPI />} />
            <Route path="effect" element={<UseEffectTest />} />
            <Route path="todo" element={<ToDoPractice />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Day3;
