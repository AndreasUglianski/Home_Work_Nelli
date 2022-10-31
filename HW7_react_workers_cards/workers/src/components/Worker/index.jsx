import React from 'react';
import s from './index.module.css';

export default function Worker({
	id,
	firstname,
	lastname,
	position,
	in_office,
}) {
	const card_style = {
		backgroundColor: in_office ? 'lightgreen' : 'lightgray',
		color: in_office ? '' : 'blue',
	};

	return (
		<div className={s.worker_card} style={card_style}>
			<p>ID: {id}</p>
			<p>Firstname: {firstname}</p>
			<p>Lastname: {lastname}</p>
			<p>Position: {position}</p>
		</div>
	);
}
