const results = document.querySelector('#results');

function asyncFetch(value) {
	console.log(value);
}

//event listener for buttons
document.querySelector('#buttons').addEventListener('click', e => {
	asyncFetch(e.target.textContent.trim().toLowerCase());
});
