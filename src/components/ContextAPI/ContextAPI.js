import React, { useState, Component, useContext } from "react";
import { Button, , Switch } from "antd";
import DefaultContext from "contexts/DefauntContext";
import styled, { ThemeProvider } from "styled-components";

const ThemeDiv = styled.div`
	color:${(props) => props.theme.color}
	background-color:${(props) => props.theme.bgColor}ss 
`;

class CounterClassComponent extends Component {
  render() {
    return (
      <DefaultContext.Consumer>
        {(state) => {
          const { count, setCount } = state;
          return (
            <ThemeDiv>
              DefaultContext.Consumer
              <div>
                <Button onClick={() => setCount(count + 1)}>{count}</Button>
              </div>
            </ThemeDiv>
          );
        }}
      </DefaultContext.Consumer>
    );
  }
}

const CounterFunctionalComponent = (props) => {
  const { count, setCount } = useContext(DefaultContext);

  return (
    <ThemeDiv>
      useContext
      <div>
        <Button onClick={() => setCount(count + 1)}>{count}</Button>
      </div>
    </ThemeDiv>
  );
};

const darkTheme = {
  bgColor: "#353b48",
  color: "#fff",
};

const lightTheme = {
  bgColor: "#353b48",
  color: "#f5f6fa",
};

const ContextAPI = () => {
  const [count, setCount] = useState(0);
  const [isDark, setIsDark] = useState(false);

  const onClickSwitch = () => {
    setIsDark((prev) => !prev);
  };
  return (
    <DefaultContext.Provider value={{ count, setCount }}>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <Switch onClick={onClickSwitch}>테마 스위치</Switch>
        <CounterClassComponent />
        <CounterFunctionalComponent />
      </ThemeProvider>
    </DefaultContext.Provider>
  );
};

export default ContextAPI;
