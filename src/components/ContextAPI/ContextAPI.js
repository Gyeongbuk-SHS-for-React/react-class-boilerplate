import React, { useState } from "react";
import { Button } from "antd";
import DefaultContext from "contexts/DefauntContext";

const CounterComponent = (props) => {
	return <DefaultContext.Consumer>
		{(state) => {
      const { count, setCount } = state
			return (
        <div>
          컨텍스트 API 사용
          <div>
            <Button onClick={() => setCount(count + 1)}>{count}</Button>
          </div>
        </div>
			);
		}}
	</DefaultContext.Consumer>;
};

const ContextAPI = (props) => {
	const [count, setCount] = useState(0);
	return (
		<DefaultContext.Provider value={{ count, setCount }}>
      <CounterComponent />
		</DefaultContext.Provider>
	);
};

export default ContextAPI;
