import React, { Component } from "react";
import { Typography } from "antd";

const { Title } = Typography;

export default class Init extends Component {
  render() {
    return <Title level={3}>왼쪽 메뉴를 클릭해 주세요</Title>;
  }
}
