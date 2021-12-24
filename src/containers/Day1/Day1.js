import React from "react";
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Routes, Route, useNavigate, useParams } from "react-router-dom";
import HtmlTest from "components/HtmlTest";
import CssTest from "components/CssTest";
import Init from "components/Init";
const { Content, Sider } = Layout;

const Day1 = () => {
  const params = useParams();
  const navigate = useNavigate();

  return (
		<Layout style={{ height: "100%" }}>
			<Sider width={200} className="site-layout-background">
				<Menu
					mode="inline"
          selectable={false}
					style={{ height: "100%", borderRight: 0 }}
				>
					<Menu.Item key="1" onClick={() => navigate('html')} icon={<UserOutlined />}>
						HTML
					</Menu.Item>
          <Menu.Item key="2" onClick={() => navigate('css')} icon={<UserOutlined />}>
						CSS
					</Menu.Item>
          <Menu.Item key="3" icon={<UserOutlined />} onClick={() => {
            window.open('https://www.w3schools.com/html/default.asp', '_blank')
          }}>
						W3CSchool
					</Menu.Item>
				</Menu>
			</Sider>
			<Layout style={{ padding: "0 24px 24px" }}>
				<Breadcrumb style={{ margin: "16px 0" }}>
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
            <Route path="html" element={<HtmlTest />} />
            <Route path="css" element={<CssTest />} />
          </Routes>
				</Content>
			</Layout>
		</Layout>
	);
}

export default Day1;
