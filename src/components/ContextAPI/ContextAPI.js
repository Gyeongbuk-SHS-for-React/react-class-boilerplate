import React, { useState, Component, useContext } from "react";
import { Button } from "antd";
import DefaultContext from "contexts/DefauntContext";

class CounterClassComponent extends Component {
	render() {
		return (
			<DefaultContext.Consumer>
				{(state) => {
					const { count, setCount } = state;
					return (
						<div>
							DefaultContext.Consumer
							<div>
								<Button onClick={() => setCount(count + 1)}>{count}</Button>
							</div>
						</div>
					);
				}}
			</DefaultContext.Consumer>
		);
	}
}

const CounterFunctionalComponent = (props) => {
	const { count, setCount } = useContext(DefaultContext);

	return (
		<div>
			useContext
			<div>
				<Button onClick={() => setCount(count + 1)}>{count}</Button>
			</div>
		</div>
	);
};

const ContextAPI = (props) => {
	const [count, setCount] = useState(0);
	return (
		<DefaultContext.Provider value={{ count, setCount }}>
			<CounterClassComponent />
			<CounterFunctionalComponent />
		</DefaultContext.Provider>
	);
};

export default ContextAPI;
