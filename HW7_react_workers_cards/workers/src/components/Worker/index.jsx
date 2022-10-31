import React from 'react';
import s from './index.module.css';
import Taskscontainer from '../Taskscontainer';

export default function Worker({
	id,
	firstname,
	lastname,
	position,
	in_office,
	avatar,
	tasks,
}) {
	const card_style = {
		backgroundColor: in_office ? 'lightgreen' : 'lightgray',
		color: in_office ? '' : 'blue',
	};

	const img_url = avatar ?? './media/no_face.png'; //оператор нулевого слияния ??

	return (
		<div className={s.worker_card} style={card_style}>
			<p>ID: {id}</p>
			<p>Firstname: {firstname}</p>
			<p>Lastname: {lastname}</p>
			<p>Position: {position}</p>
			<img src={img_url} alt='worker' />
			<Taskscontainer tasks={tasks} />
		</div>
	);
}
