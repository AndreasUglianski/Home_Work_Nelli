const rootElem = document.querySelector('#root');

// completed == true
// 	? (card.style.backgroundColor = green)
// 	: (card.style.backgroundColor = gray);

fetch('https://jsonplaceholder.typicode.com/todos')
	.then((resp) => resp.json())
	.then((json) => render(json));

const render = (json) => {
	json.forEach(({ title, completed }) => {
		const card = document.createElement('div');
		const titleElem = document.createElement('p');
		const statusElem = document.createElement('p');

		titleElem.innerText = title;
		statusElem.innerText = `status: ${completed}`;

		card.classList.add('card');
		card.append(titleElem, statusElem);
		rootElem.append(card);
	});
};
