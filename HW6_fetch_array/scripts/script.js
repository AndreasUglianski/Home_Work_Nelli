const rootElem = document.querySelector('#root');

fetch('https://jsonplaceholder.typicode.com/todos')
	.then((resp) => resp.json())
	.then((json) => render(json));

const render = (json) => {
	const tasks = json.map(({ title, completed }) => {
		const card = document.createElement('div');
		const titleElem = document.createElement('p');
		const statusElem = document.createElement('p');

		const status = completed ? 'done' : 'not done';
		const background = completed ? 'lightgreen' : 'lightgray';

		titleElem.innerText = `Task: ${title}`;
		statusElem.innerText = `Status: ${status}`;

		card.classList.add('card');
		card.style.backgroundColor = background;

		card.append(titleElem, statusElem);
		return card;
	});
	rootElem.append(...tasks);
};
