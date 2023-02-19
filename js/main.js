const email = document.querySelector('.news__input');
const btn = document.querySelector('.news__btn');
const error = document.querySelector('.news__error');
const icon = document.querySelector('.news__formIcon');
const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const check = () => {
	if (email.value.match(reg)) {
		icon.style.display = 'none';
		error.textContent = '';
		email.style.border = '';
		email.value = '';
	} else {
		error.textContent = 'Please provide a valid email';
		icon.style.display = 'block';
		email.style.border = '2px solid hsl(0, 93%, 68%)';
	}
};

btn.addEventListener('click', check);
