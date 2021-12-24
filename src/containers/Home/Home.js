import React from 'react';
import { Layout, Timeline, Typography } from 'antd';
const { Title } = Typography;


const Home = () => {
  return (
    <Layout style={{ height: "100%" }}>
      <Title level={3}>강의 목차</Title>
      <Timeline mode={"left"} style={{ marginTop: 20 }}>
        <Timeline.Item label="Day 1">개발환경 설치</Timeline.Item>
        <Timeline.Item label="Day 2">리액트 알아가기</Timeline.Item>
        <Timeline.Item label="Day 3">클론 코딩</Timeline.Item>
        <Timeline.Item label="Day 4">Open API 활용하기</Timeline.Item>
        <Timeline.Item label="Day 5">자신만의 페이지 만들기</Timeline.Item>
      </Timeline>
    </Layout>
  )
}

export default Home
