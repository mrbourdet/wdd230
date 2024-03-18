const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
// const herotext = document.querySelector('.herolabel')

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
	// herotext.style.top='30vw';
});