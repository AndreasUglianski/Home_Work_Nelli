import React from 'react';
import Task from '../Task';

export default function Taskscontainer({ tasks }) {
	return (
		<div>
			Tasks:
			{tasks.lenght !== 0
				? tasks
						.sort((a, b) => a.done - b.done)
						.map((el) => <Task key={el.id} {...el} />)
				: 'No tasks'}
		</div>
	);
}
