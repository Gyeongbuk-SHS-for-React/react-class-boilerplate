import React, { useState } from "react";
import { Button } from "antd";

const FunctionComponent = (props) => {
  const [count, setCount] = useState(0)
  return <div style={{ border: "1px solid blue" }}>
  <div>
      {props.name}
    </div>
    <div>
      <Button onClick={() => setCount(count + 1)}>{count}</Button>
    </div>
  </div>
}

class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    const { count } = this.state

    return <div style={{ border: "1px solid red" }}>
      <div>
        {this.props.name}
      </div>
      <div>
        <Button onClick={() => this.setState({ count: count + 1 })}>{count}</Button>
      </div>
    </div>;
  }
}

const JsxTest = () => {
  function test() {
    console.log("test")
  }

  return <div>
    <ClassComponent name={"클래스 컴포넌트"} />
    <hr />
    <FunctionComponent name={"함수형 컴포넌트"} />
  </div>
}

export default JsxTest;