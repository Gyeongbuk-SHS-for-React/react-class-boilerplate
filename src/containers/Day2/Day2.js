import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Routes, Route, useNavigate, useParams } from "react-router-dom";
import PropsTest from "components/PropsTest";
import PropsTest2 from "components/PropsTest2";
import PropsTest3 from "components/PropsTest3";
import StateTest from "components/StateTest";
import StateTest2 from "components/StateTest2";
import StateTest3 from "components/StateTest3";
import StateTest4 from "components/StateTest4";
import ComponentTest from "components/ComponentTest";
import Init from "components/Init";
const { Content, Sider } = Layout;

const Day2 = () => {
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
            onClick={() => navigate("props1")}
            icon={<UserOutlined />}
          >
            Props1
          </Menu.Item>
          <Menu.Item
            key="2"
            onClick={() => navigate("props2")}
            icon={<UserOutlined />}
          >
            Props2
          </Menu.Item>
          <Menu.Item
            key="3"
            onClick={() => navigate("props3")}
            icon={<UserOutlined />}
          >
            Props3
          </Menu.Item>
          <Menu.Item
            key="4"
            onClick={() => navigate("state1")}
            icon={<UserOutlined />}
          >
            State1
          </Menu.Item>
          <Menu.Item
            key="5"
            onClick={() => navigate("state2")}
            icon={<UserOutlined />}
          >
            State2
          </Menu.Item>
          <Menu.Item
            key="6"
            onClick={() => navigate("state3")}
            icon={<UserOutlined />}
          >
            State3
          </Menu.Item>
          <Menu.Item
            key="7"
            onClick={() => navigate("state4")}
            icon={<UserOutlined />}
          >
            State4
          </Menu.Item>
          <Menu.Item
            key="8"
            onClick={() => navigate("component")}
            icon={<UserOutlined />}
          >
            Component
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
            <Route path="props1" element={<PropsTest />} />
            <Route path="props2" element={<PropsTest2 />} />
            <Route path="props3" element={<PropsTest3 />} />
            <Route path="state1" element={<StateTest />} />
            <Route path="state2" element={<StateTest2 />} />
            <Route path="state3" element={<StateTest3 />} />
            <Route path="state4" element={<StateTest4 />} />
            <Route path="component" element={<ComponentTest />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Day2;
