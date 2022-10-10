const product_form_elem = document.querySelector('.product_form');
const products = [];

function render() {
	const container = document.querySelector('.product-container');
	container.innerText = '';
	products.forEach(
		({ firstname, lastname, age, rate, days, email, photo, progress }) => {
			const product = document.createElement('div');
			const firstnameElem = document.createElement('p');
			const lastnameElem = document.createElement('p');
			const ageElem = document.createElement('p');
			const rateElem = document.createElement('p');
			const daysElem = document.createElement('p');
			const salaryElem = document.createElement('p');
			const emailElem = document.createElement('a');
			const photoElem = document.createElement('img');
			const progressContainer = document.createElement('div');
			const progressLine = document.createElement('div');
			const progressValue = document.createElement('p');

			firstnameElem.innerText = `Name: ${firstname}`;
			lastnameElem.innerText = `Lastname: ${lastname}`;
			ageElem.innerText = `Age: ${age}`;
			rateElem.innerText = `Rate: ${rate}`;
			daysElem.innerText = `Days: ${days}`;
			salaryElem.innerText = `Salary: ${rate * days}`;
			emailElem.innerText = email;
			progressValue.innerText = progress + '%';

			emailElem.setAttribute('href', `mailto: ${email}`);
			photoElem.setAttribute('src', photo);
			photoElem.setAttribute('alt', 'photo users');

			progressContainer.classList.add('progress-container');
			progressLine.classList.add('progress-line');
			progressLine.style.width = progress + '%';
			progressValue.classList.add('progress-value');

			progressContainer.append(progressLine, progressValue);
			product.append(
				firstnameElem,
				lastnameElem,
				ageElem,
				rateElem,
				daysElem,
				salaryElem,
				emailElem,
				photoElem,
				progressContainer
			);
			container.append(product);
			product.classList.add('product');
		}
	);
}

product_form_elem.addEventListener('submit', (event) => {
	event.preventDefault();
	const { firstname, lastname, age, rate, days, email, photo, progress } =
		event.target;
	products.push({
		firstname: firstname.value,
		lastname: lastname.value,
		age: age.value,
		rate: rate.value,
		days: days.value,
		email: email.value,
		photo: photo.value,
		progress: progress.value,
	});
	firstname.value = '';
	lastname.value = '';
	age.value = '';
	rate.value = '';
	days.value = '';
	email.value = '';
	photo.value = '';
	progress.value = '';

	render();
});
