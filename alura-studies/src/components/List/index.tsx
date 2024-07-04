function Lista() {
	const tasks = [
		{ task: "React", time: "01:10:00" },
		{ task: "Node", time: "00:11:22" },
		{ task: "TypeScript", time: "01:01:01" },
	];
	return (
		<aside>
			<h2>Studies</h2>
			<ul>
				{tasks.map((task, index) => (
					<li key={index}>
						<h3>{task.task}</h3>
						<span>{task.time}</span>
					</li>
				))}
			</ul>
		</aside>
	);
}

export default Lista;
