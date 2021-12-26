import React, { Component } from "react";
import { Result, Button } from "antd";
import { FrownOutlined } from "@ant-design/icons";

class ErrorBoundary extends Component {
  state = { hasError: false };
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Result
          icon={<FrownOutlined />}
          title="에러가 발생했습니다."
          extra={
            <Button
              onClick={() => {
                this.setState({ hasError: false });
                window.location.replace("/");
              }}
            >
              홈으로 가기
            </Button>
          }
        ></Result>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
