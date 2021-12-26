import React, { lazy } from "react";
import "./App.less";
import { Layout, Menu } from "antd";
import { Routes, Route, useNavigate } from "react-router-dom";
import { course } from "./course";
import soco from "./imgs/soco.png";

const { Header } = Layout;

const lazyLoader = (component) => {
  if (component === undefined) return;
  return lazy(() => import(`./containers/${component}`));
};

const routerMap = course.map(({ _, path, component }, key) => {
  const Comp = lazyLoader(component);
  return <Route path={`/${path}/*`} element={<Comp />} key={key} />;
});

function App() {
  const navigate = useNavigate();

  return (
    <Layout style={{ height: "100%" }}>
      <Header className="header">
        <img
          className="logo"
          src={soco}
          onClick={() => navigate("/")}
          style={{ width: 80, height: 80, marginRight: 120 }}
        />
        <Menu
          theme="dark"
          mode="horizontal"
          style={{ width: "100%", display: "flex", fontWeight: "bold" }}
        >
          {course.map(({ title, path }, key) => {
            if (title) {
              return (
                <Menu.Item
                  key={key}
                  onClick={() => {
                    navigate(`/${path}`);
                  }}
                >
                  {title}
                </Menu.Item>
              );
            }
          })}
        </Menu>
      </Header>
      <React.Suspense fallback={<>Loading...</>}>
        <Routes>{routerMap}</Routes>
      </React.Suspense>
    </Layout>
  );
}

export default App;
