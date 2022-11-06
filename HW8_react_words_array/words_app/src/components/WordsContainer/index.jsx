import React from 'react';
import Word from '../Word';

export default function WordsContainer({ words_arr }) {
	return (
		<div>
			{words_arr.map((el) => (
				<Word {...el} key={el.id} />
			))}
		</div>
	);
}
