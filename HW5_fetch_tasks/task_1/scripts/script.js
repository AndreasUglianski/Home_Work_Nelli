//Сформировать fetch-запрос, использовать адреса
//https://reqres.in/api/users?page=1,
//Из полученных данный отрисовать интерфейс как
//на приложенной картинке.

const root_elem = document.querySelector('#root');

let render = (json) => {
	const user = json.map(({ avatar, first_name }) => {
		const container = document.createElement('div');
		const p_elem = document.createElement('p');
		const avatar_elem = document.createElement('img');

		avatar_elem.setAttribute('src', avatar);
		avatar_elem.setAttribute('alt', 'employees');

		p_elem.innerText = first_name;
		container.append(avatar_elem, p_elem);
		return container;
	});
	root_elem.append(...user); // добавляется не весь массив , а отдельная карточка
};

fetch(`https://reqres.in/api/users?page=1`)
	.then((response) => response.json())
	.then((json) => render(json.data));
