import React from 'react';
import Task from '../Task';

export default function Taskscontainer({ tasks }) {
	console.log(tasks);
	return (
		<div>
			Tasks:
			{tasks.map((el) => (
				<Task key={el.id} {...el} />
			))}
		</div>
	);
}
