import React from "react";
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Routes, Route, useNavigate, useParams } from "react-router-dom";
import JsxTest from "components/JsxTest";
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
					<Menu.Item key="1" onClick={() => navigate('jsx')} icon={<UserOutlined />}>
						JSX
					</Menu.Item>
					<Menu.Item key="2" icon={<UserOutlined />} onClick={() => {
						window.open('https://beta.reactjs.org/learn/responding-to-events', '_blank')
					}}>
						React.js Playground
					</Menu.Item>
				</Menu>
			</Sider>
			<Layout style={{ padding: "0 24px 24px" }}>
				<Breadcrumb style={{ margin: "16px 0" }}>
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
						<Route path="" element={<div>
							왼쪽 메뉴를 클릭해 주세요
						</div>} />
						<Route path="jsx" element={<JsxTest />} />
					</Routes>
				</Content>
			</Layout>
		</Layout>
	);
}

export default Day1;
