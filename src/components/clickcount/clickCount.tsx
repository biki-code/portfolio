import React, { useState, useEffect } from "react";
import styles from "./clickCount.module.scss";

type ClickCountProps = {};

const ClickCount: React.FC<ClickCountProps> = () => {
	const [count, setCount] = useState(0);

	useEffect(() => {
		// This will run every time count changed
		console.log(`Clicked the button ${count} times`);
	}, [count]);

	return (
		<div className={styles.container}>
			<p>
				You clicked <span style={{ color: "red" }}>{count}</span> times
			</p>
			<button onClick={() => setCount(count + 1)}>Click me</button>
		</div>
	);
};

export default ClickCount;
