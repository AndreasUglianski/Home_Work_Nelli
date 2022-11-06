import React from 'react';
import s from './index.module.css';

export default function Word({ id, title }) {
	return (
		<div className={s.word_card}>
			<p>{title}</p>
		</div>
	);
}
