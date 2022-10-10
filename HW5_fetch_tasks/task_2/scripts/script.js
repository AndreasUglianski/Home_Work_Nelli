//Сформировать fetch-запрос, использовать адреса
//https://reqres.in/api/users?page=1 и
//https://reqres.in/api/users?page=2
//Из полученных данный отрисовать интерфейс как на приложенной картинке.
//Кнопки внизу осуществляют переключение между страницами 1 и 2

const root_elem = document.querySelector('#root');
const page_1_btn = document.querySelector('.page_1');
const page_2_btn = document.querySelector('.page_2');

let id_page = 1;

let render = (json) => {
	const user = json.map(({ avatar, first_name }) => {
		const container = document.createElement('div');
		const p_elem = document.createElement('p');
		const avatar_elem = document.createElement('img');

		avatar_elem.setAttribute('src', avatar);
		avatar_elem.setAttribute('alt', 'employees');

		root_elem.innerHTML = '';
		p_elem.innerText = first_name;
		container.append(avatar_elem, p_elem);
		return container;
	});
	root_elem.append(...user);
};

let get_user = (id) => {
	fetch(`https://reqres.in/api/users?page=${id}`)
		.then((response) => response.json())
		.then((json) => render(json.data));
};

get_user(id_page);

page_1_btn.addEventListener('click', () => get_user(1));
page_2_btn.addEventListener('click', () => get_user(2));
