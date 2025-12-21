import React, { useState } from "react";

function ComponentA() {
	return <div>Status is TRUE</div>;
}

function ComponentB() {
	return <div>Status is FALSE</div>;
}

export default function StatusComponent() {
	const [status, setStatus] = useState(false);

	const toggle = () => setStatus((s) => !s);

	return (
		<div>
			<button onClick={toggle}>Toggle Status</button>
			{status ? <ComponentA /> : <ComponentB />}
		</div>
	);
}
