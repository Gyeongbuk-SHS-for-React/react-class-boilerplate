import React from "react";
import { Layout, Menu, Breadcrumb, Typography } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Routes, Route, useNavigate, useParams } from "react-router-dom";
import StateTest from "components/StateTest";
import PropsTest from "components/PropsTest";
import UseEffectTest from "components/UseEffectTest";

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
            key="2"
            onClick={() => navigate("state")}
            icon={<UserOutlined />}
          >
            State 연습
          </Menu.Item>
          <Menu.Item
            key="3"
            onClick={() => navigate("props")}
            icon={<UserOutlined />}
          >
            Props 연습
          </Menu.Item>
          <Menu.Item
            key="4"
            onClick={() => navigate("effect")}
            icon={<UserOutlined />}
          >
            useEffects 연습
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
                  리액트 기초와 Movie App 클론 코딩은 day3 컴포넌트와 별도의
                  파일로 진행합니다.
                </Title>
              }
            />
            <Route path="state" element={<StateTest />} />
            <Route path="props" element={<PropsTest />} />
            <Route path="effect" element={<UseEffectTest />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Day3;
