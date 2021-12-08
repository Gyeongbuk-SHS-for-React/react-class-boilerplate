import React, { lazy } from "react";
import './App.less';
import { Layout, Menu } from 'antd';
import { Routes, Route, useNavigate } from "react-router-dom";
import { course } from "./course"

const { Header } = Layout;

const lazyLoader = (component) => {
  return lazy(() => import(`./containers/${component}`));
}

const routerMap = course.map(({ _, path, component }, key) => {
	const Comp = lazyLoader(component);
  return <Route path={`/${path}/*`} element={<Comp />} key={key} />
});

function App() {
  const navigate = useNavigate()
  

  return (
    <Layout style={{ height: "100%" }}>
      <Header className="header">
        <div className="logo" onClick={() => navigate("/")} style={{ color: "white", fontWeight: 'bold', width: 200, marginRight: '10px' }}>
          GB SW HS 리액트 강의
        </div>
        <Menu theme="dark" mode="horizontal" style={{ width: '100%', display: 'flex' }}>
          {course.map(({ title, path }, key) => {
            return <Menu.Item key={key} onClick={() => {
              navigate(`/${path}`)
            }}>{title}</Menu.Item>
          })}
        </Menu>
      </Header>
      <React.Suspense fallback={<>Loading...</>}>
        <Routes>
          {routerMap}
        </Routes>
      </React.Suspense>
      
    </Layout>
  );
}

export default App;
